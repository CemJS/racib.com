import news from '@json/newsSliderTest'

export const loader = function () { 
  this.Static.SliderTestItems = news;
  this.Static.nodeList = document.querySelectorAll('sliderTest_item');
  this.Static.result;



  // this.Static.indexes = [0, 1, 2, 3, 4]
  // this.Static.sliders = document.querySelectorAll('.sliderTest_item');
} 