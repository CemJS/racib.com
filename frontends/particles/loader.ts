export const loader = function () {
  this.Static.canvas = this.Ref.canvas;
  this.Static.startPoint;
  this.Static.moved = false;
  this.Static.dragMouse = false;
  // --------------------------
  this.Static.slides = document.querySelectorAll('.newCard_slider');

}