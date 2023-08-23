import { Cemjsx } from "cemjs-all"
import arrNextDark from '@svg/icons/dark/next.svg'
import arrPrevDark from '@svg/icons/dark/prev.svg'

import arrowR from '@svg/icons/arrowR.svg'
import calendar from '@svg/icons/date.svg'
import date from '@svg/icons/dark/date.svg'
import map from '@svg/icons/dark/mapPin.svg'
import viewsDark from '@svg/icons/dark/views.svg'

import cover1 from '@images/events/cover/1.png'
import cover2 from '@images/events/cover/2.jpg'
import cover3 from '@images/events/cover/3.jpg'
import logo1 from '@images/events/logo/1.png'
import logo2 from '@svg/racib.svg'

import brazhnikov from '@images/users/brazhnikov.jpg'
import chulkov from '@images/users/chulkov.jpg'
import gorcharuk from '@images/users/gorcharuk.jpg'
import pripachkin from '@images/users/pripachkin.jpg'
import zelenevsky from '@images/users/zelenevsky.jpg'
import romanyuk from '@images/users/romanyuk.jpg'
import kvasnikov from '@images/users/kvasnikov.jpg'
import yan from '@images/users/yan.jpg'


const events = [
  {
    category: 'Семинар',
    cover: cover1,
    logo: logo1,
    title: 'Противодействие использованию виртуальных активов в совершении преступлений и финансировании терроризма',
    date: '24 августа 2023, 10:00',
    location: 'Москва',
    views: 11,
  },
  {
    category: 'Саммит',
    cover: cover2,
    logo: logo2,
    title: 'III ЕЖЕГОДНЫЙ САММИТ ПО КРИПТОВАЛЮТАМ И БЛОКЧЕЙН - ТЕХНОЛОГИЯМ',
    date: '13-14 сентября 2023',
    location: 'Москва',
    views: 153,
  },
  {
    category: 'Конференция',
    cover: cover3,
    logo: logo1,
    title: 'CRYPTO FUTURE TURKEY',
    date: '13-14 сентября 2023',
    location: 'Турция, Аланья',
    views: 18,
  },
  {
    category: 'Форум',
    cover: cover2,
    logo: logo2,
    title: 'Blockchain Life 2023',
    date: '24-25 октября 2023',
    location: 'Дубай, ОАЭ',
    views: 18,
  },
]

const player = [
  {
    img: brazhnikov,
    name: 'Бражников Александр Евгеньевич',
    city: 'Москва',
    country: 'Россия',
    like: 0,
    views: 1159,
    status: 'Персона',
    lastTime: '14:55',
  },
  {
    img: pripachkin,
    name: 'Припачкин Юрий Игоревич',
    city: 'Москва',
    country: 'Россия',
    like: 0,
    views: 1054,
    status: 'Персона',
    lastTime: '15:04',
  },
  {
    img: yan,
    name: 'Кривоносов Ян Анатольевич',
    city: 'Новороссийск',
    country: 'Россия',
    like: 0,
    views: 330,
    status: 'Персона',
    lastTime: '01.07.2023',
  },
  {
    img: zelenevsky,
    name: 'Зеленевский Максим Юрьевич',
    city: 'Москва',
    country: 'Россия',
    like: 0,
    views: 697,
    status: 'Персона',
    lastTime: '01.07.2023',
  },
  {
    img: gorcharuk,
    name: 'Гончарук Виктор Александрович',
    city: 'Москва',
    country: 'Россия',
    like: 0,
    views: 330,
    status: 'Персона',
    lastTime: '01.07.2023',
  },
  {
    img: chulkov,
    name: 'Чулков Игорь Владимирович',
    city: 'Москва',
    country: 'Россия',
    like: 0,
    views: 277,
    status: 'Персона',
    lastTime: '01.07.2023',
  },
  {
    img: romanyuk,
    name: 'Романюк Валерий Иванович',
    city: 'Москва',
    country: 'Россия',
    like: 0,
    views: 245,
    status: 'Персона',
    lastTime: '15:04',
  },
  {
    img: kvasnikov,
    name: 'Квасников Михаил Юрьевич',
    city: 'Москва',
    country: 'Россия',
    like: 0,
    views: 244,
    status: 'Персона',
    lastTime: '15:04',
  },
]



export const display = function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", "pt_15", "home", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <div class="home">

            {/* <section class="home_news slider">
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
                      <div class="carousel_item" ref="newsSlide" href="/">
                        <span>{item.category}</span>
                        <div class="carousel_item_img" style={`background-image: url(${item.img})`}>
                        </div>
                        <h5 class="carousel_item_title">{item.title}</h5>
                        <p class="carousel_item_desc">{item.desc}</p>
                        <div class="carousel_item_details">
                          <span class="carousel_item_details_date">{item.date}</span>
                          <span class="carousel_item_details_views">
                            {item.views}
                            <img src={views} />
                          </span>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </section> */}

            <section class="home_link link_block">
              <a href="/goal">
                <img src={arrowR} class="link_block_icon" />
                <span>III ЕЖЕГОДНЫЙ САММИТ ПО КРИПТОВАЛЮТАМ И БЛОКЧЕЙН - ТЕХНОЛОГИЯМ</span>
                {/* <p>CryptoSummit 2023</p> */}
              </a>
            </section>
            {/* slider with arrors, with background */}

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


            {/* slider without arrors */}
            <section class="home_events slider">
              <div class="slider_header">
                <div>
                  <h2>События</h2>
                  <p>Анонсы мероприятий</p>
                </div>
                <a href="/news" class="btn_link home_events_link">Все мероприятия</a>
              </div>

              <div class="carousel_wrap">
                <div class="carousel p_15">
                  {
                    events.map(item => {
                      return (
                        <div class="card">
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
                            <span class="card_info_views">
                              <img src={viewsDark} alt="Просмотры записи" />
                              {item.views}
                            </span>
                          </div>
                        </div>
                      )
                    })
                  }
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
                  player.map(item => {
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