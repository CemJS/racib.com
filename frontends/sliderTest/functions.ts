class Gallery {
    element: HTMLElement;
    constructor(element: HTMLElement, options = {}) {
        this.element = element;
        console.log('=d3cc6d=', this.element)
    }
}
const fn = {
    "test": function (element: HTMLElement, options = {}) {
        if (!this.Static.galleryRun) {
            this.Static.galleryRun = new Gallery(element, options = {})
        }
        this.init();
    }

}

export { fn }