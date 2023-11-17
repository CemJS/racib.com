import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import back from '@svg/icons/back.svg'
import date from '@svg/icons/dark/date.svg'
import map from '@svg/icons/dark/mapPin.svg'
import notFound from '@svg/list.svg'
import filter from '@svg/icons/dark/filter.svg'
import calendar from '@svg/icons/dark/calendarDark.svg'
import arrPrevDark from '@svg/icons/dark/prev.svg'
import arrNextDark from '@svg/icons/dark/next.svg'

import events from '@json/events'

const category = [
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
    name: 'Конференция',
  },
  {
    name: 'Meetup'
  }
]

let eventsData, categoryData = [];
eventsData = events.reverse();
categoryData = category;

let options: { month: string } = { month: 'long' }

export default function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", front.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <a class="back" href="/" onclick={Fn.link}>
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Главная</span>
          </a>

          <section class="events">

            <div class="filterNew">
              <div
                ref="filterBtn"
                class="filterNew_btn"
                onclick={() => {
                  // Static.filterShow = !Static.filterShow;
                  // Fn.init()
                  Fn.initOne("modalSoon", {})
                }}
              >
                <span class="filterNew_btn_text">Фильтр поиска</span>
                <span class="filterNew_icon">
                  <img src={filter} alt="Фильтр поиска" />
                </span>
              </div>

              <div
                ref="filterContent"
                class={["filterNew_content", Static.filterShow ? "filterNew_content_active" : null]}
              >
                <div class="filterNew_container">
                  <div class="filterNew_header">
                    <h3 class="filterNew_title">Фильтр поиска</h3>
                    <button
                      class="modal_close"
                      onclick={() => {
                        Static.filterShow = false;
                        Fn.init();
                      }}
                    >
                      x
                    </button>
                  </div>

                  <div class="filterNew_fields">

                    <div class="filterNew_field">
                      <span class="filterNew_field_title">Событие</span>
                      <input
                        type="text"
                        class="filter_input"
                        placeholder="Искать в заголовке"
                        oninput={(e) => {
                          let value = e.target.value.toLocaleLowerCase();
                          eventsData = events.filter((item) => {
                            if (item.title.toLocaleLowerCase().includes(value)) {
                              return true;
                            }
                          })
                          Fn.init();
                        }}
                      />
                    </div>

                    <div class="filterNew_field">
                      <span
                        class="filterNew_field_title"
                        onclick={(e) => {
                          if (Static.categoryStatus == 'close') {
                            Static.categoryStatus = 'open';
                            Ref.filterCategory.classList.add('filter_item_active');
                          } else if (Static.categoryStatus == 'open') {
                            Static.categoryStatus = 'close';
                            Ref.filterCategory.classList.remove('filter_item_active');
                          }
                        }}
                      >
                        Раздел
                      </span>
                      {
                        Static.chooseCategory ?
                          <div class="chooseCategory">
                            <span >{Static.chooseCategory}</span>
                            <span
                              class="chooseCategory_close"
                              onclick={() => {
                                Static.chooseCategory = '';
                                eventsData = events;
                                Fn.init();
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
                              eventsData = events.filter((item) => {
                                if (item.category.toLocaleLowerCase().includes(value)) {
                                  return true;
                                }
                              })
                              Fn.init()
                            }}
                          />
                      }
                    </div>

                    <div class="filterNew_field">
                      <span class="filterNew_field_title">Местоположение</span>
                      <input
                        type="text"
                        class="filter_input"
                        placeholder="Где искать?"
                        oninput={(e) => {
                          let value = e.target.value.toLocaleLowerCase();
                          eventsData = events.filter((item) => {
                            if (item.location.toLocaleLowerCase().includes(value)) {
                              return true;
                            }
                          })
                          Fn.init();
                        }}
                      />
                    </div>

                    <div class="filterNew_field">
                      <span class="filterNew_field_title">Дата</span>
                      <div class="filterNew_range">
                        <div
                          class="filterNew_range_item"
                          onclick={() => {
                            Static.calendarStart = true;
                            Func.createCalendar(Ref.calendar,
                              Static.currentDate.getFullYear(),
                              Static.currentDate.getMonth())

                            Fn.init()
                          }}
                        >
                          <span>дд.мм.гггг</span>
                          <span>
                            <img src={calendar} alt="Календарь" />
                          </span>


                          <div
                            // class="calendarTest_main"
                            class={["filter_date", Static.calendarStart ? "filter_date_active" : null]}
                          >
                            <div class="calendar_header">
                              <span
                                class="calendar_monthPicker"
                                onclick={() => {
                                  Ref.monthList.classList.add('calendar_monthList_show');
                                  Fn.init();
                                }}
                              >
                                {Static.currentDate.toLocaleString("ru", options)}
                              </span>
                              <div class="calendar_yearPicker">
                                <span
                                  class="calendar_arrow"
                                  onclick={() => {
                                    Static.currentDate.setFullYear(Static.currentDate.getFullYear() - 1)
                                    Func.createCalendar(Ref.calendar, Static.currentDate.getFullYear(), Static.currentDate.getMonth())

                                    Fn.init()
                                  }}
                                >
                                  <img src={arrPrevDark} alt="Previous year" />
                                </span>
                                <span class="calendar_currentYear">{Static.currentDate.getFullYear()}</span>
                                <span
                                  class="calendar_arrow"
                                  onclick={() => {
                                    Static.currentDate.setFullYear(Static.currentDate.getFullYear() + 1)
                                    Func.createCalendar(Ref.calendar,
                                      Static.currentDate.getFullYear(),
                                      Static.currentDate.getMonth())

                                    Fn.init()
                                  }}
                                >
                                  <img src={arrNextDark} alt="Next year"></img>
                                </span>
                              </div>
                            </div>

                            <div ref="calendar"></div>

                            <div class="calendar_monthList" ref="monthList">
                              {
                                Static.monthList.map((item, index) => {
                                  return (
                                    <div
                                      class="calendar_monthList_item"
                                      onclick={() => {

                                        Static.currentDate.setMonth(index);
                                        Func.createCalendar(Ref.calendar,
                                          Static.currentDate.getFullYear(),
                                          Static.currentDate.getMonth())


                                        Ref.monthList.classList.remove('calendar_monthList_show');
                                        Fn.init()
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
                        <span>—</span>
                        <div class="filterNew_range_item">
                          <span>дд.мм.гггг</span>
                          <span>
                            <img src={calendar} alt="Календарь" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="filterNew_field">
                      <span class="filterNew_field_title">Ключевые слова</span>
                    </div>

                  </div>

                  <div class="filterNew_btns">
                    <button
                      class="btn_link btn_link_dark"
                    >
                      Сбросить
                    </button>
                    <button
                      class="btn_link btn_link_dark"
                    >
                      Применить
                    </button>
                  </div>

                </div>
              </div>
            </div>











            {/* <div class="filter">
              <div class="filter_item filter_item_event">
                <span class="filter_item_title">Событие</span>
                <input
                  type="text"
                  class="filter_input"
                  placeholder="Искать в заголовке"
                  oninput={(e) => {
                    let value = e.target.value.toLocaleLowerCase();
                    eventsData = events.filter((item) => {
                      if (item.title.toLocaleLowerCase().includes(value)) {
                        return true;
                      }
                    })
                    Fn.init();
                  }}
                />
              </div>

              <div ref="filterCategory" class="filter_item">
                <span
                  class="filter_item_title"
                  onclick={(e) => {
                    if (Static.categoryStatus == 'close') {
                      Static.categoryStatus = 'open';
                      Ref.filterCategory.classList.add('filter_item_active');
                    } else if (Static.categoryStatus == 'open') {
                      Static.categoryStatus = 'close';
                      Ref.filterCategory.classList.remove('filter_item_active');
                    }
                  }}
                >
                  Раздел
                </span>
                {
                  Static.chooseCategory ?
                    <div class="chooseCategory">
                      <span >{Static.chooseCategory}</span>
                      <span
                        class="chooseCategory_close"
                        onclick={() => {
                          Static.chooseCategory = '';
                          eventsData = events;
                          Fn.init();
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
                        eventsData = events.filter((item) => {
                          if (item.category.toLocaleLowerCase().includes(value)) {
                            return true;
                          }
                        })
                        Fn.init()
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
                              class="filter_category_list_item"
                              ref='filterCategoryItem'
                              onclick={() => {
                                Static.chooseCategory = item.name;

                                if (Static.categoryStatus == 'close') {
                                  Static.categoryStatus = 'open';
                                  Ref.filterCategory.classList.add('filter_item_active');
                                } else if (Static.categoryStatus == 'open') {
                                  Static.categoryStatus = 'close';
                                  Ref.filterCategory.classList.remove('filter_item_active');
                                }
                                eventsData = events.filter((item) => {
                                  if (item.category.includes(Static.chooseCategory)) {
                                    return true
                                  }
                                })
                                Fn.init();
                              }}
                            >
                              {item.name}
                            </li>
                          )
                        }) :
                        <div class="notFound">
                          <span class="notFound_titleMini">Записи не найдены</span>
                          <img src={notFound} alt="Записи не найдены" class="notFound_imgMini" />
                        </div>
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
                  oninput={(e) => {
                    let value = e.target.value.toLocaleLowerCase();
                    eventsData = events.filter((item) => {
                      if (item.location.toLocaleLowerCase().includes(value)) {
                        return true;
                      }
                    })
                    Fn.init();
                  }}
                />
              </div>

              <div class="filter_item filter_item_date">
                <span class="filter_item_title">Дата</span>
              </div>

            </div> */}

            <div class="events_list">
              {
                eventsData.length ?

                  eventsData.map(item => {
                    return (
                      <div
                        class="card"
                        onclick={() => {
                          Static.record = item;
                          Fn.linkChange(`/events/show/${item.id}`)
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
                          {
                            item.location ?
                              <span class="card_info_location">
                                <img src={map} alt="Место проведения мероприятия" />
                                {item.location}
                              </span> : null
                          }
                        </div>
                      </div>
                    )
                  }) :
                  <div class="notFound">
                    <span class="notFound_title">Записи не найдены</span>
                    <img src={notFound} alt="Записи не найдены" class="notFound_img" />
                  </div>
              }
            </div>
          </section>
        </div>
      </main>
    </div>

  )
}