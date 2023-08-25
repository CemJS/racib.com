import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'
import arrNextDark from '@svg/icons/dark/next.svg'
import arrPrevDark from '@svg/icons/dark/prev.svg'
import views from '@svg/icons/dark/views.svg'
import news from '@json/news'

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
            <span class="back_title">Новости</span>
          </div>

          <section class="news">
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
                      <span
                        class="calendar_monthPicker"
                        onclick={() => {
                          this.Ref.monthList.classList.add('calendar_monthList_show')
                        }}
                      >
                        {this.Static.currentMonth}
                      </span>
                      <div class="calendar_yearPicker">
                        <span
                          class="calendar_arrow"
                          onclick={() => {
                            this.Static.currentYear--;
                            this.fn("getFebDay", this.Static.currentYear);
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
                            this.fn("getFebDay", this.Static.currentYear);
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
                          this.Static.weekDays.map(item => {
                            return (
                              <div
                                class={["calendar_weekDay_item", item == this.Static.currentDay ? "calendar_weekDay_item_active" : null]}
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
                                class={["calendar_days_item", index + 1 == this.Static.currentDate ? "calendar_days_item_active" : null]}
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
                        this.Static.monthList.map(item => {
                          return (
                            <div
                              class="calendar_monthList_item"
                              onclick={() => {
                                this.Static.currentMonth = item;
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

            <div class="news_list">
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
      </main>
    </div>

  )
}