import { Cemjsx } from "cemjs-all"
import arrNext from '@svg/icons/light/nextWhite.svg'
import arrPrev from '@svg/icons/light/prevWhite.svg'

import news from '@json/news'
import views from '@svg/icons/views.svg'


export const display = function () {
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
                <h2>Новости</h2>
                <p>Самые свежие факты</p>
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
                <a href="/news" class="btn_link">Новости</a>
              </div>
            </div>
            <div class="carousel" ref="newsCarousel"
            >
              {
                news.map((item, index) => {
                  return (
                    <div class="newCard" ref="newsSlide" href="/">
                      <span>{item.category}</span>
                      <div class="newCard_img" style={`background-image: url(${item.img})`}>
                      </div>
                      <h5 class="newCard_title">{item.title}</h5>
                      <p class="newCard_desc">{item.desc}</p>
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