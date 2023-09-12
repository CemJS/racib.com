
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
        // console.log('=eb7735=', this.items)
        this.items.forEach(el => {
            el.classList.remove('sliderTest_item_1');
            el.classList.remove('sliderTest_item_2');
            el.classList.remove('sliderTest_item_3');
            el.classList.remove('sliderTest_item_4');
            el.classList.remove('sliderTest_item_5');
        })
        this.items.slice(0, 5).forEach((el, i) => {
            el.classList.add(`sliderTest_item_${i + 1}`);
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

const fn = {
    "slider": function (container: HTMLElement, items: Array<HTMLElement>, controls: string) {
        if (!this.Static.firstGallery) {
            this.Static.firstGallery = new Slider(container, items, controls);
        }

        // let firstGallery = new Slider(container, items, controls);
        // firstGallery.setCurrentState(controls);
        this.Static.firstGallery.setCurrentState(controls);
        this.init()
    }
}

export { fn }