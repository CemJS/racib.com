class Carousel {
    element: HTMLElement;
    slide: any;
    isDragging: boolean
    startX: any;
    startScrollLeft: any;
    x1: any;
    y1: any;

    constructor() {
        this.isDragging = false
        this.x1 = null
        this.y1 = null
    }

    init(element: HTMLElement) {
        this.element = element;
        if (element.childNodes) {
            this.slide = element.childNodes[0]
        }
    }

    prev() {
        this.element.scrollLeft -= this.slide.offsetWidth + 20;
    }

    next() {
        this.element.scrollLeft += this.slide.offsetWidth + 20;
    }

    onmousedown(e) {
        this.isDragging = true;
        this.startX = e.pageX;
        this.startScrollLeft = this.element.scrollLeft;
    }

    onmousemove(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        this.element.scrollLeft = this.startScrollLeft - (e.pageX - this.startX)
    }

    onmouseup() {
        this.isDragging = false;
    }

    ontouchstart(e) {
        const firstTouch = e.touches[0];
        this.x1 = firstTouch.clientX;
        this.y1 = firstTouch.clientY;
    }

    ontouchmove(e) {
        if (!this.x1 || !this.y1) return false;
        let x2 = e.touches[0].clientX;
        let y2 = e.touches[0].clientY;
        let xDiff = x2 - this.x1;
        let yDiff = y2 - this.y1;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                this.element.scrollLeft -= this.slide.offsetWidth + 15;
            } else {
                this.element.scrollLeft += this.slide.offsetWidth + 15;
            }
        }
        this.x1 = null;
        this.y1 = null;
    }
}

export const loader = function () {
    this.Static.carousel = { admin: new Carousel(), directorate: new Carousel(), observers: new Carousel(), experts: new Carousel() }
    return
}