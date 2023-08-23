import { Cemjsx } from "cemjs-all"
import arrNext from '@svg/icons/nextWhite.svg'
import arrPrev from '@svg/icons/prevWhite.svg'

import new1 from '@images/news/coverRacib.png'
import new2 from '@images/news/coverBlockchainLife.png'
import new3 from '@images/news/new3.jpg'
import new4 from '@images/news/summit.jpg'
import new5 from '@images/news/rus.jpg'
import new6 from '@images/news/sber.jpg'
import new7 from '@images/news/friends.png'
import new8 from '@images/news/winner.jpg'
import news from '@json/news'
import views from '@svg/icons/views.svg'

// const news = [
//   {
//     category: 'Блокчейн',
//     img: new1,
//     title: 'Вместе внедрять новое',
//     desc: 'Белорусская Ассоциация «Технологии Распределенных Реестров» (АТРР) и Российская Ассоциация криптоиндустрии, искусственного интеллекта и блокчейна (РАКИБ) подписали 31 мая меморандум о сотрудничестве и взаимопонимании.',
//     date: '04 августа 2023г.',
//     views: 14,
//   },
//   {
//     category: 'Крипто',
//     img: new2,
//     title: 'Официальный трейлер Blockchain Life 2023 в Дубае',
//     desc: 'Мы рады представить официальный трейлер Blockchain Life 2023 в Дубае, который состоится 24-25 октября. Этот трейлер представляет собой совершенно новую концепцию промо-видео мировых событий, и мы гордимся тем, что стали первыми среди всех международных событий криптоиндустрии. ',
//     date: '28 июля 2023г.',
//     views: 9,
//   },
//   {
//     category: 'Майнинг',
//     img: new3,
//     title: 'Рабочая встреча майнеров в РАКИБ',
//     desc: 'Сегодня в РАКИБ состоялась рабочая встреча майнеров по вопросу развития майнинга в России. На встрече обсуждались вопросы:1) Текущее состояние и результаты по предложенной РАКИБ инициативе о создании единой сети дистрибуции майнингового оборудования.  ',
//     date: '16 июня 2023г.',
//     views: 50,
//   },
//   {
//     category: 'Крипто',
//     img: new4,
//     title: 'III Crypto Summit 2023',
//     desc: 'Сегодня в РАКИБ состоялась рабочая встреча майнеров по вопросу развития майнинга в России. На встрече обсуждались вопросы:1) Текущее состояние и результаты по предложенной РАКИБ инициативе о создании единой сети дистрибуции майнингового оборудования.  ',
//     date: ' 14 июня 2023г.',
//     views: 16,
//   },
//   {
//     category: 'Общество',
//     img: new5,
//     title: 'С праздником Дня России',
//     desc: 'Дорогие друзья, РАКИБ поздравляет вас с праздником Дня России! Пусть в это непростое для нашего Отечества время мы крепче сплотились бы, делая нашу Державу еще мощнее и красивее!',
//     date: ' 10 июня 2023г.',
//     views: 100,
//   },
//   {
//     category: 'Блокчейн',
//     img: new6,
//     title: 'РАКИБ на Первом международном форуме Сбера для участников блокчейн-отрасли',
//     desc: 'Александр Бражников, исполнительный директор Российской ассоциации криптовалют и блокчейна (РАКИБ), приглашен спикером  Панельной дискуссии WEB 3.0 VS BigTech на Блокчейн-конференция «Финансы будущего: вызовы и возможности».',
//     date: '25 мая 2023г.',
//     views: 120,
//   },
//   {
//     category: 'Общество',
//     img: new7,
//     title: 'РАКИБ в составе российской правительственной делегации в Республике Куба',
//     desc: 'РАКИБ в лице исполнительного директора Бражникова А.Е. участвовал в бизнес-форуме «БИЗНЕС ДИАЛОГ РОССИЯ-КУБА» в рамках Межправительственной Российско-Кубинской комиссии по торгово-экономическому и научно-техническому сотрудничеству.С 17 по 20 мая более 200 представителей российской делегации общались с кубинскими государственными деятелями, предпринимателями, общественными деятелями.',
//     date: '22 мая 2023г.',
//     views: 118,
//   },
//   {
//     category: 'Общество',
//     img: new8,
//     title: 'С Днём Победы 9 мая!',
//     desc: 'Примите самые искренние, самые тёплые поздравления в преддверии великого праздника, близкого сердцу каждого – Дня Великой Победы!',
//     date: '07 мая 2023г.',
//     views: 118,
//   }
// ]

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
        </div>
      </div>

    </div>
  )
}