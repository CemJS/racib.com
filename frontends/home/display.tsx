import { Cemjsx } from "cemjs-all"
import arrNext from '@svg/icons/nextWhite.svg'
import arrPrev from '@svg/icons/prevWhite.svg'
import views from '@svg/icons/views.svg'
import new1 from '@images/news/coverRacib.png'
import new2 from '@images/news/coverBlockchainLife.png'
import new3 from '@images/news/new3.jpg'
import new4 from '@images/news/summit.jpg'
import new5 from '@images/news/rus.jpg'
import new6 from '@images/news/sber.jpg'
import new7 from '@images/news/friends.png'
import new8 from '@images/news/winner.jpg'
import arrowR from '@svg/icons/arrowR.svg'
import calendar from '@svg/icons/date.svg'

import cover1 from '@images/events/cover/1.png'
import cover2 from '@images/events/cover/2.jpg'
import cover3 from '@images/events/cover/3.jpg'
import logo1 from '@images/events/logo/1.png'
import logo2 from '@svg/racib.svg'

const news = [
  {
    category: 'Блокчейн',
    img: new1,
    title: 'Вместе внедрять новое',
    desc: 'Белорусская Ассоциация «Технологии Распределенных Реестров» (АТРР) и Российская Ассоциация криптоиндустрии, искусственного интеллекта и блокчейна (РАКИБ) подписали 31 мая меморандум о сотрудничестве и взаимопонимании.',
    date: '04 августа 2023г.',
    views: 14,
  },
  {
    category: 'Крипто',
    img: new2,
    title: 'Официальный трейлер Blockchain Life 2023 в Дубае',
    desc: 'Мы рады представить официальный трейлер Blockchain Life 2023 в Дубае, который состоится 24-25 октября. Этот трейлер представляет собой совершенно новую концепцию промо-видео мировых событий, и мы гордимся тем, что стали первыми среди всех международных событий криптоиндустрии. ',
    date: '28 июля 2023г.',
    views: 9,
  },
  {
    category: 'Майнинг',
    img: new3,
    title: 'Рабочая встреча майнеров в РАКИБ',
    desc: 'Сегодня в РАКИБ состоялась рабочая встреча майнеров по вопросу развития майнинга в России. На встрече обсуждались вопросы:1) Текущее состояние и результаты по предложенной РАКИБ инициативе о создании единой сети дистрибуции майнингового оборудования.  ',
    date: '16 июня 2023г.',
    views: 50,
  },
  {
    category: 'Крипто',
    img: new4,
    title: 'III Crypto Summit 2023',
    desc: 'Сегодня в РАКИБ состоялась рабочая встреча майнеров по вопросу развития майнинга в России. На встрече обсуждались вопросы:1) Текущее состояние и результаты по предложенной РАКИБ инициативе о создании единой сети дистрибуции майнингового оборудования.  ',
    date: ' 14 июня 2023г.',
    views: 16,
  },
  {
    category: 'Общество',
    img: new5,
    title: 'С праздником Дня России',
    desc: 'Дорогие друзья, РАКИБ поздравляет вас с праздником Дня России! Пусть в это непростое для нашего Отечества время мы крепче сплотились бы, делая нашу Державу еще мощнее и красивее!',
    date: ' 10 июня 2023г.',
    views: 100,
  },
  {
    category: 'Блокчейн',
    img: new6,
    title: 'РАКИБ на Первом международном форуме Сбера для участников блокчейн-отрасли',
    desc: 'Александр Бражников, исполнительный директор Российской ассоциации криптовалют и блокчейна (РАКИБ), приглашен спикером  Панельной дискуссии WEB 3.0 VS BigTech на Блокчейн-конференция «Финансы будущего: вызовы и возможности».',
    date: '25 мая 2023г.',
    views: 120,
  },
  {
    category: 'Общество',
    img: new7,
    title: 'РАКИБ в составе российской правительственной делегации в Республике Куба',
    desc: 'РАКИБ в лице исполнительного директора Бражникова А.Е. участвовал в бизнес-форуме «БИЗНЕС ДИАЛОГ РОССИЯ-КУБА» в рамках Межправительственной Российско-Кубинской комиссии по торгово-экономическому и научно-техническому сотрудничеству.С 17 по 20 мая более 200 представителей российской делегации общались с кубинскими государственными деятелями, предпринимателями, общественными деятелями.',
    date: '22 мая 2023г.',
    views: 118,
  },
  {
    category: 'Общество',
    img: new8,
    title: 'С Днём Победы 9 мая!',
    desc: 'Примите самые искренние, самые тёплые поздравления в преддверии великого праздника, близкого сердцу каждого – Дня Великой Победы!',
    date: '07 мая 2023г.',
    views: 118,
  }
]

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


export const display = function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", "pt_15", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <div class="home">

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
            </section>

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
                        <div class="carousel_card">
                          <div class="carousel_card_img" style={`background-image: url(${item.cover})`}>
                            {/* <img src={item.cover} /> */}
                          </div>
                          <h5>{item.title}</h5>
                          <span>{item.date}</span>
                          <span>{item.location}</span>
                          <span>{item.views}</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>

            </section>
            {/* slider without arrors */}

          </div>
        </div>
      </main >
    </div >

  )
}