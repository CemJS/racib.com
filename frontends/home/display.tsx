import { Cemjsx } from "cemjs-all"
import arrNextDark from '@svg/icons/dark/next.svg'
import arrPrevDark from '@svg/icons/dark/prev.svg'

import arrNextLight from '@svg/icons/light/nextWhite.svg'
import arrPrevLight from '@svg/icons/light/prevWhite.svg'

import arrowR from '@svg/icons/arrowR.svg'
import calendar from '@svg/icons/date.svg'
import date from '@svg/icons/dark/date.svg'
import map from '@svg/icons/dark/mapPin.svg'
import viewsDark from '@svg/icons/dark/views.svg'

import players from '@json/players'
import events from '@json/events'

let isDragging = false;
let startX, startScrollLeft;
let x1 = null;
let y1 = null;

export const display = function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", "pt_15", "home", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <div class="home">

            <section class="home_link link_block">
              <a href="/goal">
                <img src={arrowR} class="link_block_icon" />
                <span>III ЕЖЕГОДНЫЙ САММИТ ПО КРИПТОВАЛЮТАМ И БЛОКЧЕЙН - ТЕХНОЛОГИЯМ</span>
                {/* <p>CryptoSummit 2023</p> */}
              </a>
            </section>


            <section class="home_banner">
              <div class="home_banner_info">
                <span class="home_banner_info_date">
                  <img src={calendar} alt="Дата мероприятия" />
                  24 августа 2023, 10:00
                </span>
                <h5 class="home_banner_info_title">Противодействие использованию виртуальных активов в совершении преступлений и финансировании терроризма</h5>
                <span class="btn_link">Семинар</span>
                <p class="home_banner_info_desc">На базе МГИМО состоится  международный семинар Организации Объединенных Наций по противодействию использованию виртуальных активов в совершении преступлений, в том числе для финансировании терроризма.</p>
              </div>
            </section>

            <section class="home_events slider">
              <div class="slider_header">
                <div>
                  <h2>События</h2>
                  <p>Анонсы мероприятий</p>
                </div>
                <a href="/news" class="btn_link home_events_link">Все мероприятия</a>
              </div>

              <div class="carousel_wrap">
                <div
                  class="carousel_hover carousel_hover_l"
                  onmouseenter={() => {
                    this.Ref.eventsSlider.scrollLeft -= 20;
                  }}
                  onmouseleave={() => {
                    this.Ref.eventsSlider.scrollLeft += 20;
                  }}
                >
                  <button
                    class="arrow arrow_fillDark arrow_prev"
                    onclick={() => {
                      this.Ref.eventsSlider.scrollLeft -= this.Ref.eventsSlide.offsetWidth + 15;
                    }}
                  >
                    <img src={arrPrevLight} alt="Prev Slide" />
                  </button>
                </div>
                <div
                  class="carousel pY_20"
                  ref="eventsSlider"
                  onmousedown={(e) => {
                    isDragging = true;
                    startX = e.pageX;
                    startScrollLeft = this.Ref.eventsSlider.scrollLeft;
                  }}

                  onmousemove={(e) => {
                    if (!isDragging) return;
                    e.preventDefault();
                    this.Ref.eventsSlider.scrollLeft = startScrollLeft - (e.pageX - startX);
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
                        this.Ref.eventsSlider.scrollLeft -= this.Ref.eventsSlide.offsetWidth + 15;
                      }
                      else {
                        this.Ref.eventsSlider.scrollLeft += this.Ref.eventsSlide.offsetWidth + 15;
                      }
                    }
                    x1 = null;
                    y1 = null;
                  }}
                >
                  {
                    events.map(item => {
                      return (
                        <div class="card" ref="eventsSlide">
                          <span class="card_category">{item.category}</span>
                          <div class="card_img" style={`background-image: url(${item.cover})`}>
                            <div class="card_logo">
                              <img src={item.logo} alt="" />
                            </div>
                          </div>
                          <div class="card_info">
                            <h5 class="card_info_title">{item.title}</h5>
                            <span class="card_info_date">
                              <img src={date} alt="Дата проведения мероприятия" />
                              {item.date}
                            </span>
                            <span class="card_info_location">
                              <img src={map} alt="Место проведения мероприятия" />
                              {item.location}
                            </span>
                            {/* <span class="card_info_views">
                              <img src={viewsDark} alt="Просмотры записи" />
                              {item.views}
                            </span> */}
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
                <div
                  class="carousel_hover carousel_hover_r"
                  onmouseenter={() => {
                    this.Ref.eventsSlider.scrollLeft += 20;
                  }}
                  onmouseleave={() => {
                    this.Ref.eventsSlider.scrollLeft -= 20;
                  }}
                >
                  <button
                    class="arrow arrow_fillDark arrow_next"
                    onclick={() => {
                      this.Ref.eventsSlider.scrollLeft += this.Ref.eventsSlide.offsetWidth + 15;
                    }}
                  >
                    <img src={arrNextLight} alt="Next Slide" />
                  </button>
                </div>
              </div>
            </section>

            {/* slider without arrors */}

            {/* <section class="home_membership">
              <div class="home_membership_item">
                <span>О РАКИБ</span>
              </div>
              <div class="home_membership_item">
                <span>Как вступить?</span>
              </div>
              <div class="home_membership_item">
                <span>Как продлить?</span>
              </div>
              <div class="home_membership_item">
                <span>Как проверить ?</span>
              </div>
            </section> */}

            {/* slider with arrow start */}
            <section class="home_users slider">
              <div class="slider_header">
                <div>
                  <h2>Участники</h2>
                  <p>Деловое сообщество</p>
                </div>
                <div class="home_news_nav">
                  <button
                    class="arrow arrow_dark"
                    onclick={() => {
                      this.Ref.playerCarousel.scrollLeft -= this.Ref.playerSlide.offsetWidth + 20;
                    }}
                  >
                    <img src={arrPrevDark} />
                  </button>
                  <button
                    class="arrow arrow_dark"
                    onclick={() => {
                      this.Ref.playerCarousel.scrollLeft += this.Ref.playerSlide.offsetWidth + 20;
                    }}
                  >
                    <img src={arrNextDark} />
                  </button>
                  <a href="/news" class="btn_link home_events_link">Все участники</a>
                </div>
              </div>

              <div class="carousel" ref="playerCarousel">
                {
                  players.map(item => {
                    return (
                      <div class="carousel_person" ref="playerSlide">
                        <a href="/" class="carousel_person_circle">
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
            </section>
            {/* slider with arrow end */}
          </div>
        </div>
      </main >
    </div >

  )
}