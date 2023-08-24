import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'
import date from '@svg/icons/dark/date.svg'
import map from '@svg/icons/dark/mapPin.svg'
import viewsDark from '@svg/icons/dark/views.svg'

import arrNextDark from '@svg/icons/dark/next.svg'
import arrPrevDark from '@svg/icons/dark/prev.svg'

import events from '@json/events'

const category = [
  {
    name: 'Вечеринка',
  },
  {
    name: 'Встреча',
  },
  {
    name: 'Конференция',
  },
  {
    name: 'Круглый стол',
  },
  {
    name: 'Премия',
  },
  {
    name: 'Саммит',
  },
  {
    name: 'Семинар',
  },
  {
    name: 'Форум',
  },
  {
    name: 'Zoom',
  }
]

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const monthList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июль', 'Июнь', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

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
            <div class="filter">
              <div class="filter_item filter_item_event">
                <span class="filter_item_title">Событие</span>
                <input
                  type="text"
                  class="filter_input"
                  placeholder="Искать в описании"
                />
              </div>

              <div
                ref="filterCategory"
                class="filter_item"
                onclick={() => {
                  this.Ref.filterCategory.classList.toggle('filter_item_active');
                }}
              >
                <span class="filter_item_title">Раздел</span>
                <input
                  type="text"
                  class="filter_input"
                  placeholder="Выбрать раздел"
                />
                <div class="filter_category">
                  <ul class="filter_category_list">
                    {
                      category.map(item => {
                        return (
                          <li class="filter_category_list_item">{item.name}</li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>

              <div class="filter_item filter_item_location">
                <span class="filter_item_title">Местоположение</span>
                <input
                  type="text"
                  class="filter_input"
                  placeholder="Где искать?"
                />
              </div>
              <div class="filter_item filter_item_date">
                <span class="filter_item_title">Дата</span>
                <input
                  type="date"
                  class="filter_input"
                  placeholder="Когда искать?"
                />

                <div class="filter_date">
                  <div class="calendar">
                    <div class="calendar_header">
                      <span class="calendar_monthPicker">Август</span>
                      <div class="calendar_yearPicker">
                        <span>
                          <img src={arrPrevDark} alt="Previous year" />
                        </span>
                        <span class="calendar_currentYear">2023</span>
                        <span>
                          <img src={arrNextDark} alt="Next year" />
                        </span>
                      </div>
                    </div>

                    <div class="calendar_body">
                      <div class="calendar_weekDay">
                        {
                          weekDays.map(item => {
                            return (
                              <div>{item}</div>
                            )
                          })
                        }
                      </div>
                      <div class="calendar_days">
                        {
                          days.map((item => {
                            return (
                              <div>{item}</div>
                            )
                          }))
                        }
                      </div>
                    </div>

                    <div class="calendar_monthLst">
                      {
                        monthList.map(item => {
                          return (
                            <div>{item}</div>
                          )
                        })
                      }
                    </div>

                  </div>
                </div>


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