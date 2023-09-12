import { Cemjsx } from "cemjs-all"
import arrNext from '@svg/icons/light/nextWhite.svg'
import arrPrev from '@svg/icons/light/prevWhite.svg'
// for slider
import slide1 from '@images/news/rus.jpg'
import slide2 from '@images/news/coverBlockchainLife.png'
import slide3 from '@images/news/new3.jpg'
import slide4 from '@images/news/sber.jpg'
import slide5 from '@images/news/winner.jpg'
import newsSlider from '@json/newsSliderTest'

import news from '@json/news'
import views from '@svg/icons/views.svg'

// let isDragging = false;
// let startX, startScrollLeft;
let x1 = null;
let y1 = null;

export const display = function () {

  return (
    <div class={["particles_wrap",]}
      ref="wrapCanvas"
      onclick={() => {
        this.fn("canvas")
      }}
    >
      <div class="runLine">
        <marquee behavior="scroll" direction="left" scrollamount="3">
          <h1>РОССИЙСКАЯ АССОЦИАЦИЯ КРИПТОЭКОНОМИКИ, ИСКУССТВЕННОГО ИНТЕЛЛЕКТА И БЛОКЧЕЙНА</h1>
        </marquee>
      </div>
      <canvas id="canvas" ref="canvas"></canvas>

      <div
        class={["home_news_wrap", this.Variable.openSidebar ? null : "home_news_wrap_close"]}
      >
        <div class="wrapper">
          <section class="home_news slider">
            <div class="slider_header">
              <div>
                <h2 class="home_news_title">Самые свежие факты</h2>
              </div>
              <div class="home_news_nav">
                <button
                  class="arrow"
                  onclick={() => {
                    let slides = document.querySelectorAll('.newCard_slider');
                    this.Static.result = Array.from(slides)
                    this.fn("slider", this.Ref.sliderTestContainer, this.Static.result, 'prev')
                    this.init();
                  }}
                >
                  <img src={arrPrev} />
                </button>
                <button
                  class="arrow"
                  onclick={() => {
                    let slides = document.querySelectorAll('.newCard_slider');
                    this.Static.result = Array.from(slides)
                    this.fn("slider", this.Ref.sliderTestContainer, this.Static.result, 'next')
                    this.init();
                  }}
                >
                  <img src={arrNext} />
                </button>
                <a href="/news" onclick={this.Fn.link} class="btn_link">Все новости</a>
              </div>
            </div>

            <section class="sliderTest">
              <div
                class="sliderTest_container"
                ref="sliderTestContainer"

                ontouchstart={(e) => {
                  this.fn("touch", e)
                  this.init();
                }}

              >
                {
                  newsSlider.map((item, index) => {
                    return (
                      <div
                        class={["newCard_slider", `newCard_slider_${index + 1}`]}
                        onclick={(e) => {
                          this.Fn.linkChange(`/news/show/${index}`)
                        }}
                      >
                        <div class="newCard_slider_img" style={`background-image: url(${item.img})`}>
                          <span class="newCard_slider_category">{item.category}</span>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </section>
          </section>
        </div>
      </div>

    </div>
  )
}