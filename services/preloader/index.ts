const app = document.getElementById('app');
const preloader = document.getElementById('preloader');
const percent = document.querySelector('.preloader_percent');
// const prog = document.getElementById('progress');

export const loader = async function (Variable) {
    if (app) {
        app.style.display = "none"
    }
}

export const progress = async function ({ load, total }) {
    let count = Math.round((load / total) * 100)
    if (percent) {
        if (count == 100) {
            percent.classList.add("text_blink");
            percent.textContent = '100%';
            setTimeout(() => {
                if (app && preloader) {
                    app.style.display = "block"
                    preloader.style.display = "none"
                }
            }, 777);
        } else {
            // prog.style.width = 200 / 100 * count + 'px';
            percent.textContent = count + '%';
        }
    }

}