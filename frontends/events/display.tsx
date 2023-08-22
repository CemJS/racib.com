import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'
import cover1 from '@images/events/cover/1.png'
import cover2 from '@images/events/cover/2.jpg'
import cover3 from '@images/events/cover/3.jpg'
import logo1 from '@images/events/logo/1.png'
import logo2 from '@svg/racib.svg'
import date from '@svg/icons/dark/date.svg'
import map from '@svg/icons/dark/mapPin.svg'
import viewsDark from '@svg/icons/dark/views.svg'

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
        class={["main", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <div class="back">
            <a
              class="back-icon"
              href="/"
              onclick={this.Fn.link}
            >
              <img src={back} />
            </a>
            <span class="back_title">Мероприятия</span>
          </div>

          <section class="events">
            <div class="events_filter">
              <div class="events_filter_item">
                <span class="events_filter_item_title">Событие</span>
                <span>Искать в описании</span>
              </div>
              <div class="events_filter_item">
                <span class="events_filter_item_title">Раздел</span>
                <span>Выбрать раздел</span>
              </div>
              <div class="events_filter_item">
                <span class="events_filter_item_title">Местоположение</span>
                <span>Где искать?</span>
              </div>
              <div class="events_filter_item">
                <span class="events_filter_item_title">Дата</span>
                <span>Когда искать?</span>
              </div>
            </div>
            <div class="events_list">
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
          </section>
        </div>
      </main>
    </div>

  )
}