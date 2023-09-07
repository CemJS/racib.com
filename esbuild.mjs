import esbuild from "esbuild";
import http from 'http'
import httpProxy from 'http-proxy'
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import path from 'path'
import fs from 'fs'

const proxy = httpProxy.createProxyServer({});

let nameFront
const runServe = process.argv.includes("--runServe")
const runFront = process.argv.includes("--runFront")
const dirFrontends = path.resolve("frontends")
const dirServices = path.resolve("services")
const dirImages = path.resolve("assets", "images")
const dirSvg = path.resolve("assets", "svg")
let cemconfig = JSON.parse(fs.readFileSync("cemconfig.json"))
if (!fs.existsSync("./public/assets")) {
    fs.mkdirSync("./public/assets");
}
if (!fs.existsSync("./public/assets/img")) {
    fs.mkdirSync("./public/assets/img");
}
if (!fs.existsSync("./temp")) {
    fs.mkdirSync("./temp");
}
const options = {
    publicPath: "/assets",
    outdir: "public/assets/",
    entryPoints: [{ in: "app.ts", out: "js/root" }, { in: "assets/scss/root.scss", out: "css/root" }],
    bundle: true,
    format: 'esm',
    loader: {
        '.woff': 'file',
        '.woff2': 'file',
        '.eot': 'file',
        '.ttf': 'file',
        '.jpg': 'file',
        '.jpeg': 'file',
        '.png': 'file',
        '.gif': 'file',
        '.svg': 'dataurl',
    },
    plugins: [
        sassPlugin({
            async transform(source) {
                const { css } = await postcss([autoprefixer]).process(source, { from: undefined });
                return css;
            },
        }),
        {
            name: "assets-fonts",
            setup(build) {
                build.onResolve({ filter: /.(woff|woff2|eot|ttf)$/ }, (args) => {
                    return { path: path.resolve("assets", args.path) }
                })
            }
        },
        {
            name: "assets-images",
            setup(build) {
                build.onResolve({ filter: /.(jpg|jpeg|png|svg|gif)$/ }, (args) => {
                    args.path = args.path.replace("@", "")
                    return { path: path.resolve("assets", args.path) }
                })
            }
        },
        {
            name: "assets-json",
            setup(build) {
                build.onResolve({ filter: /^@json/ }, (args) => {

                    let file = path.resolve(args.path.replace("@", "") + ".json")
                    let json = JSON.parse(fs.readFileSync(file))
                    if (Array.isArray(json)) {
                        for (let item of json) {
                            for (let key in item) {

                                if (typeof item[key] == "string" && item[key].startsWith("@svg")) {
                                    let fileDir = path.resolve("public/assets/img/")
                                    let fileName = item[key].replace("@svg/", "")
                                    let fileDirSource = path.resolve(dirSvg, fileName)
                                    fileName = fileName.replace(/\//g, '-');
                                    item[key] = "/assets/img/" + fileName
                                    fs.copyFile(fileDirSource, path.resolve(fileDir, fileName), (err) => {
                                    });
                                }

                                if (typeof item[key] == "string" && item[key].startsWith("@images")) {
                                    let fileDir = path.resolve("public/assets/img/")
                                    let fileName = item[key].replace("@images/", "")
                                    let fileDirSource = path.resolve(dirImages, fileName)
                                    fileName = fileName.replace(/\//g, '-');
                                    item[key] = "/assets/img/" + fileName
                                    fs.copyFile(fileDirSource, path.resolve(fileDir, fileName), (err) => {
                                    });
                                }
                            }
                        }
                    } else {

                    }
                    // args.path = args.path.replace("@", "")
                    fs.writeFileSync(file.replace("json", "temp"), JSON.stringify(json));
                    return { path: file.replace("json", "temp") }
                })
            }
        }
    ],
}

if (fs.existsSync(path.resolve(`assets/scss/preloader.scss`))) {
    options.entryPoints.push({ in: path.resolve(`assets/scss/preloader.scss`), out: path.resolve(options.outdir, "css", "preloader") })
}

const checkServices = async function (dir) {
    if (!fs.existsSync(dir)) {
        return {}
    }

    const services = {}
    fs.readdirSync(dir).map(file => {
        if (file[0] != ".") {
            services[file] = {
                service: true,
                name: file,
                path: {}
            }
            if (fs.existsSync(path.join(dir, file, "index.ts"))) {
                services[file].path.js = `/assets/js/_${file}.js`
                options.entryPoints.push({ in: path.join(dir, file, "index.ts"), out: path.resolve(options.outdir, "js", `_${file}`) })
            }
            if (fs.existsSync(path.join(dir, file, "cemconfig.json"))) {
                let cemconfig = JSON.parse(fs.readFileSync(path.join(dir, file, "cemconfig.json")))
                Object.assign(services[file], cemconfig)
            }
            if (fs.existsSync(path.join(dir, file, "cemconfig.json"))) {
                let cemconfig = JSON.parse(fs.readFileSync(path.join(dir, file, "cemconfig.json")))
                Object.assign(services[file], cemconfig)
            }
        }
    });
    return services
}

const checkFrontend = async function (dir, name) {
    if (!fs.existsSync(dir)) {
        return {}
    }
    const frontends = {}
    fs.readdirSync(dir).map(file => {
        if (file[0] != "." && (!name || name == file)) {
            frontends[file] = {
                front: true,
                name: file,
                path: {},
                one: name
            }
            if (fs.existsSync(path.join(dir, file, "index.ts"))) {
                frontends[file].path.js = `/assets/js/${file}.js`
                options.entryPoints.push({ in: path.join(dir, file, "index.ts"), out: path.resolve(options.outdir, "js", file) })
            }
            if (fs.existsSync(path.resolve(`assets/scss/${file}.scss`))) {
                frontends[file].path.css = `/assets/css/${file}.css`
                options.entryPoints.push({ in: path.resolve(`assets/scss/${file}.scss`), out: path.resolve(options.outdir, "css", file) })
            }
            if (fs.existsSync(path.join(dir, file, "cemconfig.json"))) {
                let cemconfig = JSON.parse(fs.readFileSync(path.join(dir, file, "cemconfig.json")))
                Object.assign(frontends[file], cemconfig)
            }
        }
    });
    return frontends
}

const start = async function () {
    if (runFront) {
        if (!process.argv[4] || !fs.existsSync(path.resolve("frontends", process.argv[4]))) {
            console.error(`Not found microfrontend whith name => ${process.argv[4]}`)
            return
        } else {
            nameFront = process.argv[4]
        }
    }

    const microFrontends = await checkFrontend(dirFrontends, nameFront);
    fs.writeFileSync('frontends.json', JSON.stringify(microFrontends));

    const services = await checkServices(dirServices);
    fs.writeFileSync('services.json', JSON.stringify(services));

    const ctx = await esbuild.context(options).catch(() => process.exit(1))
    console.log("⚡ Build complete! ⚡")
    if (runServe) {
        const serve = await ctx.serve({ servedir: "public" })
        console.log(`\nWeb: http://127.0.0.1:${cemconfig.port}`)

        http.createServer((req, res) => {

            const options = {
                hostname: "127.0.0.1",
                port: serve.port,
                path: req.url,
                method: req.method,
                headers: req.headers,
            }

            let haveChange = false

            cemconfig.hook?.proxyWeb.map((item) => {
                if (req.url.startsWith(item.url)) {
                    options.port = item.port
                    options.hostname = item.host
                    options.headers.host = options.hostname
                    haveChange = true
                }
            })

            if (!haveChange && req.url !== "/esbuild" && !req.url.startsWith("/assets") && !req.url.startsWith("/docs") && !req.url.startsWith("/contents")) {
                req.url = "/"
            }
            proxy.web(req, res, { target: `http://${options.hostname}:${options.port}`, changeOrigin: true });

            proxy.on('error', function (err, req, res) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end('Something went wrong. And we are reporting a custom error message.');
            });

        }).listen(cemconfig.port)
        await ctx.watch()
    }
    return
}

start()