import { Cemjsx } from "cemjs-all"
import next from '@svg/icons/light/nextWhite.svg'
import arrNextDark from '@svg/icons/dark/next.svg'
import arrPrevDark from '@svg/icons/dark/prev.svg'

import observers from '@json/observers'

let isDragging = false;
let startX, startScrollLeft;
let x1 = null;
let y1 = null;

export const display = function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", "pt_0", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <div class="about">
            <section class="about_observers slider">
              <div class="slider_header">
                <h2 class="block_default_title mb_0">Наблюдательный совет РАКИБ</h2>
                <div class="home_news_nav">
                  <button
                    class="arrow arrow_dark arrow_left"
                    onclick={() => {
                      this.Ref.observersCarousel.scrollLeft -= this.Ref.observersSlide.offsetWidth + 20;
                    }}
                  >
                    <img src={arrPrevDark} />
                  </button>
                  <button
                    class="arrow arrow_dark arrow_right"
                    onclick={() => {
                      this.Ref.observersCarousel.scrollLeft += this.Ref.observersSlide.offsetWidth + 20;
                    }}
                  >
                    <img src={arrNextDark} />
                  </button>
                </div>
              </div>
              <div class="carousel_wrap">
                <div
                  class="carousel"
                  ref="observersCarousel"

                  onmousedown={(e) => {
                    isDragging = true;
                    startX = e.pageX;
                    startScrollLeft = this.Ref.observersCarousel.scrollLeft;
                  }}

                  onmousemove={(e) => {
                    if (!isDragging) return;
                    e.preventDefault();
                    this.Ref.observersCarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
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
                        this.Ref.observersCarousel.scrollLeft -= this.Ref.observersSlide.offsetWidth + 15;
                      } else {
                        this.Ref.observersCarousel.scrollLeft += this.Ref.observersSlide.offsetWidth + 15;
                      }
                    }
                    x1 = null;
                    y1 = null;
                  }}

                >
                  {
                    observers.map((item, index) => {
                      return (
                        <div class="carousel_person" ref="observersSlide">
                          <a href={`/players/observers/${index}`} class="carousel_person_circle">
                            <div
                              class="carousel_person_img"
                              style={`background-image: url(${item.img})`}
                            ></div>
                          </a>
                          <span class="carousel_person_status">{item.status}</span>
                          <h5 class="carousel_person_name">{item.name}</h5>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section>

            <div class="link_block">
              <a href="/players" onclick={this.Fn.link}>
                <img src={next} />
                <span>Перейти на страницу</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}