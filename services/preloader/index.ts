const app = document.getElementById('app');
const preloader = document.getElementById('preloader');
const percent = document.querySelector('.preloader_percent');

export const loader = async function (Variable) {
    if (app && preloader) { app.style.display = "none" }
    return
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
            }, 50);
        } else {
            percent.textContent = count + '%';
        }
    }
    return
}