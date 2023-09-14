export const finish = function () {
    this.Static.slides = document.querySelectorAll('.newCard_slider');

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
    return
}