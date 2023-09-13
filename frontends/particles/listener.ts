const listener = {
    "start": function () {

    },
    "finish": function () {
        if (!this.Static.canvasRun) {
            this.fn("canvas");
        }
        if (!this.Static.infinitySlider) {
            setInterval(() => {
                this.Static.slides = document.querySelectorAll('.newCard_slider');
                this.Static.result = Array.from(this.Static.slides)
                this.fn("slider", this.Ref.sliderTestContainer, this.Static.result, 'prev')
            }, 5000)
        }
    }
}

export { listener }