import { Cemjsx } from "cemjs-all"
import slide1 from '@images/news/rus.jpg'
import slide2 from '@images/news/coverBlockchainLife.png'
import slide3 from '@images/news/new3.jpg'
import slide4 from '@images/news/sber.jpg'
import slide5 from '@images/news/winner.jpg'

export const display = function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <section class="sliderTest">
            <div class="sliderTest_container" ref="sliderTestContainer">
              <img src={slide1} class={["sliderTest_item", `sliderTest_item_1`]}  />
              <img src={slide2} class={["sliderTest_item", `sliderTest_item_2`]}  />
              <img src={slide3} class={["sliderTest_item", `sliderTest_item_3`]}  />
              <img src={slide4} class={["sliderTest_item", `sliderTest_item_4`]}  />
              <img src={slide5} class={["sliderTest_item", `sliderTest_item_5`]}  />
            </div>
            <div 
              class="sliderTest_controls" 
              ref="sliderTextControlsContainer"
              onclick={()=>{
                this.fn("sliderTest")
              }}
            >
              <button class="sliderTest_controls_previous"
                onclick={()=>{
                  let slides = document.querySelectorAll('.sliderTest_item');
                  // this.Static.SliderTestItems.unshift(this.Static.SliderTestItems.pop()) 
                  this.Static.result = Array.from(slides)
                  this.fn("slider", this.Ref.sliderTestContainer, this.Static.result, 'prev')
                  this.init();
                }}
              ></button>
              <button 
                class="sliderTest_controls_next"
                onclick={()=>{
                  let slides = document.querySelectorAll('.sliderTest_item');
                  this.Static.result = Array.from(slides)
                  // this.Static.SliderTestItems.push(this.Static.SliderTestItems.shift())
                  this.fn("slider", this.Ref.sliderTestContainer, this.Static.result, 'next')
                  this.init();
                }}
              ></button>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}