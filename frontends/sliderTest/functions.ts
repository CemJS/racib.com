const GalleryClassName = 'gallery';
const GalleryLineClassName = 'gallery_line';
const GallerySlideClassName = 'gallery_slide'
// const wrapperNode = document.createElement('div');

class Gallery {
    element: HTMLElement;
    size: number;
    currentSlide: number;
    lineNode: HTMLElement;
    slideItems: any;
    widthContainer: any;
    widthSlide: any;
    clickX: any;
    dragX: any;

    constructor(element: HTMLElement, options = {}) {
        this.element = element;
        this.size = element.childElementCount;
        this.currentSlide = 0;

        // чтобы при вызове методов не слетали контексты вызываем  bind
        this.manageHTML = this.manageHTML.bind(this)
        this.setParameters = this.setParameters.bind(this)
        this.setEvents = this.setEvents.bind(this)
        this.destroyEvents = this.destroyEvents.bind(this)
        this.startDrag = this.startDrag.bind(this)
        this.stopDrag = this.stopDrag.bind(this)
        this.dragging = this.dragging.bind(this)
        this.setStylePosition = this.setStylePosition.bind(this)
        // this.resizeGallery = this.resizeGallery.bind(this)

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
            childNode.classList.add(GallerySlideClassName)
            const coordsSlide = childNode.getBoundingClientRect();
            this.widthSlide = coordsSlide.width;
        })
    }

    setParameters() {
        const coordsContainer = this.element.getBoundingClientRect();
        this.widthContainer = coordsContainer.width;
        this.lineNode.style.width = `${285 * this.size}px`;
    }

    setEvents() {
        // window.addEventListener('resize', this.resizeGallery)
        this.lineNode.addEventListener('pointerdown', this.startDrag)
        window.addEventListener('pointerup', this.stopDrag)
    }

    destroyEvents() {

    }

    startDrag(e) {
        this.clickX = e.pageX;
        window.addEventListener('pointermove', this.dragging)
    }
    stopDrag() {
        window.removeEventListener('pointermove', this.dragging)
    }

    dragging(e) {
        this.dragX = e.pageX;
        const dragShift = this.dragX - this.clickX;
        this.setStylePosition(dragShift)
    }

    setStylePosition(shift) {
        this.lineNode.style.transform = `translate3d(${shift}px, 0, 0)`
    }
    // resizeGallery() {
    //     console.log('=9982d6=', '1111')
    //     this.setParameters();
    // }
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