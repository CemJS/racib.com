const GalleryClassName = 'gallery';
const GalleryLineClassName = 'gallery_line';
const GallerySlideClassName = 'gallery_slide'
// const wrapperNode = document.createElement('div');

class Gallery {
    element: HTMLElement;
    size: number; // количество слайдов галереи
    currentSlide: number; // первый слайд
    lineNode: any;
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

    constructor(element: HTMLElement, options = {}) {
        this.element = element;
        this.size = element.childElementCount; // определяем кол-во слайдов галереи
        this.currentSlide = 0;
        this.currentSlideWasChanged = false;

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
        this.lineNode = this.element.querySelector(`.${GalleryLineClassName}`)
        this.slideItems = Array.from(this.lineNode.children).map((childNode) => {
            wrapElementByDiv({
                element: childNode,
                className: GallerySlideClassName
            })
        })

    }

    setParameters() {
        const coordsContainer = this.element.getBoundingClientRect();
        this.widthContainer = coordsContainer.width;
        this.x = - this.currentSlide * this.widthContainer;
        this.lineNode.style.width = `${this.size * this.widthContainer}px`;
        Array.from(this.lineNode.children).forEach((slideNode: any) => {
            slideNode.style.width = `${this.widthContainer}px`
        })
    }

    setEvents() {
        this.debouncedResizeGallery = debounce(this.resizeGallery);
        window.addEventListener('resize', debounce(this.resizeGallery));
        this.lineNode.addEventListener('pointerdown', this.startDrag)
        window.addEventListener('pointerup', this.stopDrag)
    }

    destroyEvents() {
        window.removeEventListener('resize', this.debouncedResizeGallery);
    }

    resizeGallery() {
        this.setParameters();
    }

    startDrag(e) {
        this.currentSlideWasChanged = false;
        this.clickX = e.pageX;
        this.startX = this.x;
        this.resetStyleTransition();
        window.addEventListener('pointermove', this.dragging)
    }
    stopDrag() {
        window.removeEventListener('pointermove', this.dragging)
        this.x = -this.currentSlide * this.widthContainer;
        this.setStylePosition();
        this.setStyleTransition();
    }

    dragging(e) {
        this.dragX = e.pageX;
        const dragShift = this.dragX - this.clickX;
        const easing = dragShift / 7;
        this.x = Math.min(this.startX + dragShift, easing);
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
        console.log('=9a05b1=', '1')
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

function debounce(func, time = 100) {
    let timer;
    return function (e) {
        clearTimeout(timer);
        timer = setTimeout(func, time, e);
    }
}

const fn = {
    "test": function (element: HTMLElement, options = {}) {
        if (!this.Static.galleryRun) {
            this.Static.galleryRun = new Gallery(element, options = {})
        }
        this.Static.callGallery = true;
        this.init();
    }

}

export { fn }