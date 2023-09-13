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

    constructor(element: HTMLElement, options = {}) {
        this.element = element;
        this.size = element.childElementCount;
        this.currentSlide = 0;

        // чтобы при вызове методов не слетали контексты вызываем  bind
        this.manageHTML = this.manageHTML.bind(this)
        this.setParameters = this.setParameters.bind(this)

        this.manageHTML();
        this.setParameters();
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
        })

    }

    setParameters() {
        const coordsContainer = this.element.getBoundingClientRect();
        this.widthContainer = coordsContainer.width;
        this.element.style.width = `${this.widthContainer * this.size}px`;

        console.log('=cead7e=', coordsContainer)
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