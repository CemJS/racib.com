import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'
import mapPin from '@svg/icons/dark/mapPin.svg'
import filter from '@svg/icons/dark/filter.svg'
import notFound from '@svg/list.svg'
import users from '@json/allUsers'

let allUsers = users;
const posts: string[] = ['Финансы', 'Телевидение', 'Маркетинг', 'Телекоммуникации', 'Полиграфия', 'Издательство', 'Фото, видео', 'IT, интернет-технологии', 'Сетевое оборудование', 'Юридическое право', 'IT компания', 'Бизнес']

export default function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <a
            class="back"
            href="/"
            onclick={this.Fn.link}
          >
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Главная</span>
          </a>

          <section class="players">
            <div class="filter">
              <div class="filter_item filter_item_event">
                <span class="filter_item_title">Имя</span>
                <input
                  type="text"
                  class="filter_input"
                  placeholder="Кого ищете?"
                  oninput={(e) => {
                    let value = e.target.value.toLocaleLowerCase().trim();
                    // allUsers = this.fn("makeFilters", value, '', '', users)
                    allUsers = users.filter((item) => {
                      if (item.name.toLocaleLowerCase().trim().includes(value)) {
                        return true;
                      }
                    })
                    this.init()
                  }}
                />
              </div>

              <div class="filter_item filter_item_location">
                <span class="filter_item_title">Страна</span>
                <input
                  type="text"
                  class="filter_input"
                  placeholder="Где искать?"
                  oninput={(e) => {
                    let value = e.target.value.toLocaleLowerCase().trim();
                    allUsers = users.filter((item) => {
                      if (item.country.toLocaleLowerCase().trim().includes(value)) {
                        return true;
                      }
                    })
                    this.init();
                  }}
                />
              </div>

              <div class="filter_item filter_item_location">
                <span class="filter_item_title">Город</span>
                <input
                  type="text"
                  class="filter_input"
                  placeholder="Где искать?"
                  oninput={(e) => {
                    let value = e.target.value.toLocaleLowerCase().trim();
                    allUsers = users.filter((item) => {
                      if (item.city.toLocaleLowerCase().trim().includes(value)) {
                        return true;
                      }
                    })
                    this.init();
                  }}
                />
              </div>

              <div class="filter_item filter_item_location">
                <span class="filter_item_title">Специализация</span>
                <input
                  type="text"
                  class="filter_input"
                  placeholder="Чем занимается?"
                  oninput={(e) => {
                    let value = e.target.value.toLocaleLowerCase().trim();

                    allUsers = users.filter((item) => {
                      if (item.post.toLocaleLowerCase().trim().includes(value)) {
                        return true;
                      }
                    })
                    this.init();
                  }}
                />
              </div>

            </div>

            <div class="players_tabs">
              <span
                class={[
                  "players_tabs_item",
                  this.Static.activeTab == '' ? 'players_tabs_item_active' : null]}
                onclick={() => {
                  this.Static.activeTab = '';
                  allUsers = users;
                  this.init();
                }}
              >
                Все
              </span>
              <span
                class={[
                  "players_tabs_item",
                  "players_tabs_item_person",
                  this.Static.activeTab == 'Персоны' ? 'players_tabs_item_active' : null]}
                onclick={() => {
                  this.Static.activeTab = 'Персоны';
                  allUsers = users.filter((item) => {
                    if (item.status == 'Персона') {
                      return true;
                    }
                  })
                  this.init();
                }}
              >
                Персоны
              </span>
              <span
                class={[
                  "players_tabs_item",
                  "players_tabs_item_community",
                  this.Static.activeTab == 'Компания' ? 'players_tabs_item_active' : null]}
                onclick={() => {
                  this.Static.activeTab = 'Компания';
                  allUsers = users.filter((item) => {
                    if (item.status == this.Static.activeTab) {
                      return true
                    }
                  })
                  this.init();
                }}
              >
                Сообщества
              </span>
            </div>

            {/* <div class="filterNew">
              <span
                class="filterNew_icon"
                onclick={() => {
                  this.Ref.filterContent.classList.toggle('filterNew_content_active')
                }}
              >
                <img src={filter} alt="Фильтр поиска" />
              </span>

              <div class="filterNew_content" ref="filterContent">
                <div class="filterNew_container">
                  <h3 class="filterNew_title">Фильтр поиска</h3>

                  <div class="filterNew_fields">

                    <div class="filterNew_field">
                      <span class="filterNew_field_title">Имя</span>
                      <input
                        type="text"
                        class="filterNew_input"
                        placeholder="Кого ищете?"
                        oninput={() => {

                        }}
                      />
                    </div>

                    <div class="filterNew_field">
                      <span class="filterNew_field_title">Страна</span>
                      <input
                        type="text"
                        class="filterNew_input"
                        placeholder="В какой стране?"
                        oninput={() => {

                        }}
                      />
                    </div>

                    <div class="filterNew_field">
                      <span>Город</span>
                      <input
                        type="text"
                        class="filterNew_input"
                        placeholder="В каком городе?"
                        oninput={() => {

                        }}
                      />
                    </div>

                    <div class="filterNew_field">
                      <span>Ключевые слова</span>
                    </div>

                  </div>

                  <div class="filter_btns">
                    <button>Сбросить</button>
                    <button>Применить</button>
                  </div>

                </div>
              </div>
            </div> */}


            <div class="players_list">
              {
                allUsers.length ?

                  allUsers.map((item, index) => {
                    return (
                      <div
                        class="players_list_item"
                        onclick={() => {
                          this.Static.record = item;
                          this.Fn.linkChange(`/players/show/${item.name}`)
                        }}
                      >
                        <span
                          class={[
                            "players_list_item_info_status",
                            item.status == 'Компания' ? "players_list_item_info_status_company" : null
                          ]}
                        >
                          {item.status}
                        </span>
                        <div class="players_list_item_circle">
                          <div
                            class="players_list_item_image"
                            style={`background-image: url(${item.img})`}
                          ></div>
                        </div>
                        <div class="players_list_item_info">
                          <h3 class="players_list_item_title">{item.name}</h3>
                          {
                            item?.post ? <p class="players_list_item_post">{item.post}</p> : null
                          }

                          {
                            item?.keyWords ?
                              <p class="players_list_item_post">
                                {
                                  item?.keyWords.map(item => {
                                    return (
                                      `${item}, `
                                    )
                                  })
                                }
                              </p> : null
                          }

                          <div class="players_list_item_location">
                            <span>
                              <img src={mapPin} />
                              {item.city}
                            </span>
                            <span>
                              <img src={item.flag} alt="" />
                              {item.country}
                            </span>
                          </div>
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
      </main >
    </div >

  )
}