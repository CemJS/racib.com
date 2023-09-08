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

export default function () {

  return (
    <div class="main_wrap">
      <main
        class={["main", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <a class="back" href="/" onclick={this.Fn.link}>
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Главная</span>
          </a>

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
                  onclick={() => {
                    this.Ref.calendar.classList.toggle('filter_date_active');
                    this.Static.currentMonth = this.Static.monthList[this.Static.current.getMonth()];
                    // this.fn("daysInMonth", this.Static.currentYear, this.Static.currentMonthIndex--);
                    this.init();
                  }}
                />

                <div class="filter_date" ref="calendar">
                  <div class="calendar">

                    <div class="calendar_header">
                      <span
                        class="calendar_monthPicker"
                        onclick={() => {
                          this.Ref.monthList.classList.add('calendar_monthList_show');
                          this.init();
                        }}
                      >
                        {this.Static.currentMonth}
                      </span>
                      <div class="calendar_yearPicker">
                        <span
                          class="calendar_arrow"
                          onclick={() => {
                            this.Static.currentYear--;
                            this.fn("daysInMonth", this.Static.currentYear, this.Static.currentMonthIndex--);
                            this.fn("firstDayWeek", this.Static.currentYear, this.Static.currentMonthIndex--);
                            this.init();
                          }}
                        >
                          <img src={arrPrevDark} alt="Previous year" />
                        </span>
                        <span class="calendar_currentYear">{this.Static.currentYear}</span>
                        <span
                          class="calendar_arrow"
                          onclick={() => {
                            this.Static.currentYear++;
                            this.fn("daysInMonth", this.Static.currentYear, this.Static.currentMonthIndex--);
                            this.fn("firstDayWeek", this.Static.currentYear, this.Static.currentMonthIndex);
                            this.init();
                          }}
                        >
                          <img src={arrNextDark} alt="Next year" />
                        </span>
                      </div>
                    </div>

                    <div class="calendar_body">
                      <div class="calendar_weekDay">
                        {
                          this.Static.resultWeekDays.map((item, index) => {
                            return (
                              <div
                                class={["calendar_weekDay_item", index + 1 == this.Static.currentDay ? "calendar_weekDay_item_active" : null]}
                              >
                                {item}
                              </div>
                            )
                          })
                        }
                      </div>
                      <div class="calendar_days">
                        {
                          this.Static.days.map(((item, index) => {
                            return (
                              <div
                                class={["calendar_days_item", index + 1 == this.Static.current.getDate() ? "calendar_days_item_active" : null]}
                              >
                                {item}
                                <span class="calendar_days_item_effect"></span>
                                <span class="calendar_days_item_effect"></span>
                                <span class="calendar_days_item_effect"></span>
                                <span class="calendar_days_item_effect"></span>
                              </div>
                            )
                          }))
                        }
                      </div>
                    </div>

                    <div class="calendar_monthList" ref="monthList">
                      {
                        this.Static.monthList.map((item, index) => {
                          return (
                            <div
                              class="calendar_monthList_item"
                              onclick={() => {
                                this.Static.currentMonth = item;
                                this.Static.currentMonthIndex = index + 1;
                                this.fn("daysInMonth", this.Static.currentYear, this.Static.currentMonthIndex--);
                                this.fn("firstDayWeek", this.Static.currentYear, this.Static.currentMonthIndex--);
                                this.Ref.monthList.classList.remove('calendar_monthList_show');
                                this.init();
                              }}
                            >
                              {item}
                            </div>
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
                events.map((item, index) => {
                  return (
                    <div
                      class="card"
                      onclick={() => {
                        this.Static.record = item;
                        this.Fn.linkChange(`/news/show/${index}`)
                      }}
                    >
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
          </section>
        </div>
      </main>
    </div>

  )
}