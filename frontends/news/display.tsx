import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'
import arrNextDark from '@svg/icons/dark/next.svg'
import arrPrevDark from '@svg/icons/dark/prev.svg'
import filter from '@svg/icons/dark/filter.svg'
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

let newsData, categoryData = [];
newsData = news;
categoryData = category;

export const display = function () {
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

          <section class="news">
            <div class="filter">
              <div class="filter_item filter_item_event">
                <span class="filter_item_title">Событие</span>
                <input
                  type="text"
                  class="filter_input"
                  placeholder="Искать в описании"
                  oninput={(e) => {
                    let value = e.target.value.toLocaleLowerCase();
                    newsData = news.filter((item) => {
                      if (item.desc.toLocaleLowerCase().includes(value)) {
                        return true;
                      }
                    })
                    this.init()
                  }}
                />
              </div>

              <div class="filter_item" ref="filterCategory">

                <span
                  class="filter_item_title"
                  onclick={(e) => {
                    if (this.Static.categoryStatus == 'close') {
                      this.Static.categoryStatus = 'open';
                      this.Ref.filterCategory.classList.add('filter_item_active');
                    } else if (this.Static.categoryStatus == 'open') {
                      this.Static.categoryStatus = 'close';
                      this.Ref.filterCategory.classList.remove('filter_item_active');
                    }
                  }}
                >
                  Раздел
                </span>

                {
                  this.Static.chooseCategory ?
                    <div class="chooseCategory">
                      <span >{this.Static.chooseCategory}</span>
                      <span
                        class="chooseCategory_close"
                        onclick={() => {
                          this.Static.chooseCategory = ''
                          this.init();
                        }}
                      >
                        x
                      </span>
                    </div> :
                    <input
                      type="text"
                      class="filter_input"
                      placeholder="Выбрать раздел"

                      oninput={(e) => {
                        let value = e.target.value.toLocaleLowerCase();
                        categoryData = category.filter((item) => {
                          if (item.name.toLocaleLowerCase().includes(value)) {
                            return true;
                          }
                        })
                        this.init()
                      }}
                    />
                }

                <div class="filter_category">
                  <ul class="filter_category_list">
                    {

                      categoryData.length ?

                        categoryData.map(item => {
                          return (
                            <li
                              ref="categoryItem"
                              class="filter_category_list_item"
                              onclick={() => {
                                this.Static.chooseCategory = item.name;
                                if (this.Static.categoryStatus == 'close') {
                                  this.Static.categoryStatus = 'open';
                                  this.Ref.filterCategory.classList.add('filter_item_active');
                                } else if (this.Static.categoryStatus == 'open') {
                                  this.Static.categoryStatus = 'close';
                                  this.Ref.filterCategory.classList.remove('filter_item_active');
                                }
                                this.init();
                              }}
                            >
                              {item.name}
                            </li>
                          )
                        }) : <span>записей не найдено</span>
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
              <div
                ref="filterCalendar"
                class="filter_item filter_item_date"
                onclick={(e) => {
                  if (this.Static.calendarStatus == 'close') {
                    this.Static.calendarStatus = 'open';
                    this.Ref.calendarNews.classList.add('filter_date_active');
                  } else if (this.Static.calendarStatus == 'open') {
                    this.Static.calendarStatus = 'close';
                    this.Ref.calendarNews.classList.remove('filter_date_active');
                  }
                }}
              >
                <span class="filter_item_title">Дата</span>
                <input
                  type="text"
                  class="filter_input"
                  placeholder="Когда искать?"
                />

                <div class="filter_date" ref="calendarNews">
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

            {/* <div class="filter_mobile_wrap">

              <span
                onclick={() => {
                  this.Ref.filterMobile.classList.toggle('filter_mobile_active');
                }}
              >
                <p>Фильтр поиска</p>
                <img src={filter} alt="Фильтр поиска" />
              </span>

              <div class="filter_mobile" ref="filterMobile">
                <span class="filter_mobile_header">
                  <h3>Фильтр поиска</h3>
                  <button>x</button>
                </span>
              </div>

            </div> */}

            <div class="news_list">
              {
                newsData.length ?

                  newsData.map((item, index) => {
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
                  }) : <span>записей не найдено</span>



              }
            </div>
          </section>
        </div>
      </main>
    </div>

  )
}