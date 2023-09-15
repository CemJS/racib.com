const GalleryClassName = 'gallery';
const GalleryLineClassName = 'gallery_line';
const GallerySlideClassName = 'gallery_slide'
const GalleryGraggableClassName = 'gallery_draggable';
const GalleryDotsClassName = 'gallery_dots';
const GalleryDotClassName = 'gallery_dot';
const GalleryDotActiveClassName = 'gallery_dot_active'
const GalleryNavClassName = 'gallery_nav'
const GalleryNavLeftClassName = 'gallery_nav_left'
const GalleryNavRightClassName = 'gallery_nav_right'

class Gallery {
    element: HTMLElement;
    dots: HTMLElement;
    size: number; // количество слайдов галереи
    currentSlide: number; // первый слайд
    lineNode: any;
    dotsNode: any;
    slideItems: any;
    widthContainer: any;
    widthSlide: any;
    clickX: any;
    dragX: any;
    x: any;
    startX: any;
    debouncedResizeGallery: any;
    currentSlideWasChanged: boolean;
    maximumX: number;
    settings: any;
    dotsItem: any;
    dotNodes: any;

    constructor(element: HTMLElement, dots: HTMLElement, options = { margin: 10 }) {
        this.element = element;
        this.dots = dots;
        this.size = element.childElementCount; // определяем кол-во слайдов галереи
        this.currentSlide = 0;
        this.currentSlideWasChanged = false;
        this.settings = {
            margin: options.margin || 0
        }


        // чтобы при вызове методов не слетали контексты вызываем  bind
        this.manageHTML = this.manageHTML.bind(this)
        this.setParameters = this.setParameters.bind(this)
        this.setEvents = this.setEvents.bind(this)
        this.resizeGallery = this.resizeGallery.bind(this)
        this.destroyEvents = this.destroyEvents.bind(this)
        this.startDrag = this.startDrag.bind(this)
        this.stopDrag = this.stopDrag.bind(this)
        this.dragging = this.dragging.bind(this)
        this.setStylePosition = this.setStylePosition.bind(this)
        this.clickDots = this.clickDots.bind(this)
        this.changeCurrentSlide = this.changeCurrentSlide.bind(this)
        // this.setStyleTransition = this.setStyleTransition.bind(this)

        this.manageHTML();
        this.setParameters();
        this.setEvents();
        this.destroyEvents();
    }

    manageHTML() {
        this.element.classList.add(GalleryClassName);
        this.element.innerHTML = `
            <div class="${GalleryLineClassName}">
                ${this.element.innerHTML}
            <div>
        `;


        this.lineNode = this.element.querySelector(`.${GalleryLineClassName}`);
        // this.dotsNode = this.element.querySelector(`.${GalleryDotsClassName}`)

        this.slideItems = Array.from(this.lineNode.children).map((childNode) => {
            wrapElementByDiv({
                element: childNode,
                className: GallerySlideClassName
            })
        })
        this.dots.classList.add(GalleryDotsClassName);


        this.dotsItem = Array.from(Array(this.size).keys()).map((key) => {
            wrapElementBtn(this.dots, GalleryDotClassName, key, this.currentSlide)
        })

        this.dotNodes = this.dots.querySelectorAll(`.${GalleryDotClassName}`);


    }

    setParameters() {
        const coordsContainer = this.element.getBoundingClientRect();
        this.widthContainer = coordsContainer.width;
        this.maximumX = -(this.size - 1) * (this.widthContainer + this.settings.margin);
        this.x = - this.currentSlide * (this.widthContainer + this.settings.margin);

        this.setStyleTransition();
        this.lineNode.style.width = `${this.size * (this.widthContainer + this.settings.margin)}px`;
        this.setStylePosition();
        Array.from(this.lineNode.children).forEach((slideNode: any) => {
            slideNode.style.width = `${this.widthContainer}px`;
            slideNode.style.marginRight = `${this.settings.margin}px`
        })
    }

    setEvents() {
        this.debouncedResizeGallery = debounce(this.resizeGallery);
        window.addEventListener('resize', debounce(this.resizeGallery));
        this.lineNode.addEventListener('pointerdown', this.startDrag);
        window.addEventListener('pointerup', this.stopDrag);
        window.addEventListener('pointercancel', this.stopDrag)

        this.dots.addEventListener('click', this.clickDots)

    }

    destroyEvents() {
        window.removeEventListener('resize', this.debouncedResizeGallery);
        // this.lineNode.removeEventListener('pointerdown', this.startDrag);
        // window.removeEventListener('pointerup', this.stopDrag);
        // window.removeEventListener('pointercancel', this.stopDrag)

    }

    resizeGallery() {
        this.setParameters();
    }

    clickDots(e) {
        const dotNode = e.target.closest('button');
        if (!dotNode) return;

        let dotNumber;
        for (let i = 0; i < this.dotNodes.length; i++) {
            if (this.dotNodes[i] === dotNode) {
                dotNumber = i;
                break;
            }
        }

        if (dotNumber === this.currentSlide) return;

        this.currentSlide = dotNumber;

        this.changeCurrentSlide();
    }

    changeCurrentSlide() {
        this.x = -this.currentSlide * (this.widthContainer + this.settings.margin);
        this.setStylePosition();
        this.setStyleTransition();
    }

    startDrag(e) {
        this.currentSlideWasChanged = false;
        this.clickX = e.pageX;
        this.startX = this.x;
        this.resetStyleTransition();
        this.element.classList.add(GalleryGraggableClassName);
        window.addEventListener('pointermove', this.dragging)
    }

    stopDrag() {
        window.removeEventListener('pointermove', this.dragging)
        this.element.classList.remove(GalleryGraggableClassName);
        this.changeCurrentSlide();
        // this.x = -this.currentSlide * (this.widthContainer + this.settings.margin);
        // this.setStylePosition();
        // this.setStyleTransition();
    }

    dragging(e) {
        this.dragX = e.pageX;
        const dragShift = this.dragX - this.clickX;
        const easing = dragShift / 7;
        this.x = Math.max(Math.min(this.startX + dragShift, easing), this.maximumX + easing);
        this.setStylePosition();

        //change active slide
        if (dragShift > 20 && dragShift > 0 &&
            !this.currentSlideWasChanged && this.currentSlide > 0) {
            this.currentSlideWasChanged = true;
            this.currentSlide = this.currentSlide - 1;
        }

        if (dragShift < -20 && dragShift < 0 &&
            !this.currentSlideWasChanged && this.currentSlide < this.size - 1) {
            this.currentSlideWasChanged = true;
            this.currentSlide = this.currentSlide + 1;
        }
    }

    setStylePosition() {
        this.lineNode.style.transform = `translate3d(${this.x}px, 0, 0)`;
    }

    setStyleTransition() {
        this.lineNode.style.transition = `all 0.25s ease 0s`;
    }

    resetStyleTransition() {
        this.lineNode.style.transition = `all 0s ease 0s`;
    }

}

function wrapElementByDiv({ element, className }) {
    const wrapperNode = document.createElement('div');
    wrapperNode.classList.add(className);
    element.parentNode.insertBefore(wrapperNode, element);
    wrapperNode.appendChild(element);

    return wrapperNode;
}

function wrapElementBtn(element, className, key, currentSlide) {
    const wrapBtn = document.createElement('button');
    wrapBtn.classList.add(className);

    if (key === currentSlide) {
        wrapBtn.classList.add(GalleryDotActiveClassName)
    }

    element.appendChild(wrapBtn)

    return wrapBtn;
}

function debounce(func, time = 100) {
    let timer;
    return function (e) {
        clearTimeout(timer);
        timer = setTimeout(func, time, e);
    }
}

const fn = {
    "test": function (element: HTMLElement, dots: HTMLElement, options = {}) {
        if (!this.Static.galleryRun) {
            this.Static.galleryRun = new Gallery(element, dots, options = {
                margin: 10
            })
        }
        this.Static.callGallery = true;
        this.init();
    }

}

export { fn }