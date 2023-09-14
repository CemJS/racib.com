interface CemJS {
    version: string
    port: number
}

interface Frontend {
    loader: Function,
    display: Function,
    listener: any,
    func: any
}

interface Configs {
    cemjs: any
    pages: any
    frontends: any
    services: any
}