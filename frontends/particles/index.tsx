import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"

class Slider {

    container: HTMLElement;
    items: Array<HTMLElement>;
    controls: string;

    constructor(container: HTMLElement, items: Array<HTMLElement>, controls: string) {

        this.container = container;
        this.controls = controls;
        this.items = [...items];
    }

    updateGallery() {
        this.items.forEach(el => {
            el.classList.remove('newCard_slider_1');
            el.classList.remove('newCard_slider_2');
            el.classList.remove('newCard_slider_3');
            el.classList.remove('newCard_slider_4');
            el.classList.remove('newCard_slider_5');
        })
        this.items.slice(0, 5).forEach((el, i) => {
            el.classList.add(`newCard_slider_${i + 1}`);
        })
    }

    setCurrentState(controls: string) {
        if (controls == 'prev') {
            this.items.unshift(this.items.pop())
        }
        if (controls == 'next') {
            this.items.push(this.items.shift())
        }
        this.updateGallery();
    }
}

front.listener.finish = () => {
    Static.slides = document.querySelectorAll('.newCard_slider');

    if (!Static.canvasRun) {
        Func.canvas()
    }
    return
}

front.func.canvas = function () {
    let canvas = Ref.canvas;
    let ctx = canvas.getContext('2d');

    canvas.width = Ref.wrapCanvas.offsetWidth;
    canvas.height = Ref.wrapCanvas.offsetHeight;

    let particlesArray;

    // объект для свойств позиции мыши, и радиус(определяет область вокруг мыши, в которой частицы реагируют на неё)
    let mouse = {
        x: null,
        y: null,
        radius: (canvas.height / 80) * (canvas.width / 80),
    }

    Ref.wrapCanvas.addEventListener('mousemove',
        function (event) {
            mouse.x = event.x;
            mouse.y = event.y;
        }
    );

    class Particle {
        x: number;
        y: number;
        directionX: number;
        directionY: number;
        size: number;
        color: string;

        constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            // arc нарисует круг
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = '#8dfcf6ad';
            ctx.fill();
        }

        update() {
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }

            // обнаружение позиции столкновения частицы с курсором мыши

            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                    this.x += 10;
                }
                if (mouse.x > this.x && this.x > this.size * 10) {
                    this.x -= 10;
                }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                    this.y += 10;
                }
                if (mouse.y > this.y && this.y > this.size * 10) {
                    this.y -= 10;
                }
            }
            // движение частиц
            this.x += this.directionX;
            this.y += this.directionY;
            // отрисовка частиц
            this.draw();
        }
    }

    // push частицы в массив
    function initParticle() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 9000;
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 5) + 1;
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 5) - 2.5;
            let directionY = (Math.random() * 5) - 2.5;
            let color = '#8DFCF6'

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color))
        }
    }

    // соединение частиц
    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance =
                    ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                    + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = `rgba(141,252,246, ${opacityValue})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // анимация всего этого дела
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
    }

    // изменение размера окна, обновление размеров окна и радиуса мыши 
    // доработать!
    window.addEventListener("resize", function () {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        mouse.radius = ((canvas.height / 80) * (canvas.height / 80));
        initParticle();
    });

    // если мышь убрали с экрана, убираем его последнюю позицию
    window.addEventListener("mouseout", function () {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    initParticle();
    animate();

    Static.canvasRun = true;

    Fn.init();
    return
}

front.func.slider = function (container: HTMLElement, items: Array<HTMLElement>, controls: string) {
    if (!Static.firstGallery) {
        Static.firstGallery = new Slider(container, items, controls);
    }
    Static.firstGallery.setCurrentState(controls);
    Static.infinitySlider = true;

    Fn.init()
    return
}

front.loader = async () => {
    const newsGet = {
        "action": "GetAll",
        "active": true,
        "search": ""
    }
    let news = await front.Services.functions.sendApi("/racib/News", newsGet)
    Static.news = news?.result;

    Static.canvas = Ref.canvas;
    Static.startPoint;
    Static.moved = false;
    Static.dragMouse = false;
    // --------------------------
    Static.slides = document.querySelectorAll('.newCard_slider');
    return
}

front.display = () => {
    return (
        <div>
            <Navigation />
        </div>
    )
}

export { front }