import { Cemjsx } from "cemjs-all"
import arrNext from '@svg/icons/light/nextWhite.svg'
import arrPrev from '@svg/icons/light/prevWhite.svg'
import One from '../news/display/one'

import news from '@json/news'
import views from '@svg/icons/views.svg'

let isDragging = false;
let startX, startScrollLeft;
let x1 = null;
let y1 = null;

export const display = function () {
  if (this.Static.record) {
    return One.bind(this)()
  }
  return (
    <div class={["particles_wrap",]}
      ref="wrapCanvas"
      onclick={() => {
        this.fn("canvas")
      }}
    >
      <div class="runLine">
        <marquee behavior="scroll" direction="left">
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
                {/* <p>Самые свежие факты</p> */}
              </div>
              <div class="home_news_nav">
                <button
                  class="arrow"
                  onclick={() => {
                    this.Ref.newsCarousel.scrollLeft -= this.Ref.newsSlide.offsetWidth + 20;
                  }}
                >
                  <img src={arrPrev} />
                </button>
                <button
                  class="arrow"
                  onclick={() => {
                    this.Ref.newsCarousel.scrollLeft += this.Ref.newsSlide.offsetWidth + 20;
                  }}
                >
                  <img src={arrNext} />
                </button>
                <a href="/news" onclick={this.Fn.link} class="btn_link">Все новости</a>
              </div>
            </div>
            <div
              class="carousel"
              ref="newsCarousel"
              onmousedown={(e) => {
                isDragging = true;
                startX = e.pageX;
                startScrollLeft = this.Ref.newsCarousel.scrollLeft;
              }}

              onmousemove={(e) => {
                if (!isDragging) return;
                e.preventDefault();
                this.Ref.newsCarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
              }}

              onmouseup={() => {
                isDragging = false;
              }}

              ontouchstart={(e) => {
                const firstTouch = e.touches[0];
                x1 = firstTouch.clientX;
                y1 = firstTouch.clientY;
              }}

              ontouchmove={(e) => {
                if (!x1 || !y1) return false;
                let x2 = e.touches[0].clientX;
                let y2 = e.touches[0].clientY;
                let xDiff = x2 - x1;
                let yDiff = y2 - y1;
                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                  if (xDiff > 0) {
                    this.Ref.newsCarousel.scrollLeft -= this.Ref.newsSlide.offsetWidth + 15;
                  } else {
                    this.Ref.newsCarousel.scrollLeft += this.Ref.newsSlide.offsetWidth + 15;
                  }
                }
                x1 = null;
                y1 = null;
              }}
            >
              {
                news.map((item, index) => {
                  return (
                    <div
                      class="newCard"
                      ref="newsSlide"
                      onclick={(e) => {
                        // this.Fn.linkChange(`/news`)
                        this.Fn.linkChange(`/news/show/${index}`)
                        // this.Fn.initOne({
                        //   name: "news"
                        // })
                        // this.Static.record = item;
                        // this.init();
                      }}
                    >
                      <span>{item.category}</span>
                      <div class="newCard_img" style={`background-image: url(${item.img})`}>
                      </div>
                      <h5 class="newCard_title">{item.title}</h5>
                      <p class="newCard_desc">{item.descShort}</p>
                      <div class="newCard_details">
                        <span class="newCard_details_date">{item.date}</span>
                        <span class="newCard_details_views">
                          {item.views}
                          <img src={views} />
                        </span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </section>
        </div>
      </div>

    </div>
  )
}