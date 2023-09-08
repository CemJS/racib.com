import { Cemjsx } from "cemjs-all"
import arrNextDark from '@svg/icons/dark/next.svg'
import arrPrevDark from '@svg/icons/dark/prev.svg'

import arrowR from '@svg/icons/arrowR.svg'
import calendar from '@svg/icons/date.svg'
import date from '@svg/icons/dark/date.svg'
import map from '@svg/icons/dark/mapPin.svg'
import viewsDark from '@svg/icons/dark/views.svg'

import events from '@json/events'



export const display = function () {
  return (
    <section class="home_events slider">
      <div class="slider_header">
        <div>
          <h2>События</h2>
          <p>Анонсы мероприятий</p>
        </div>
        <a href="/events" onclick={this.Fn.link} class="btn_link home_events_link">Все мероприятия</a>
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

  )
}