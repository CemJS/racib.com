import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'
import mapPin from '@svg/icons/dark/mapPin.svg'
import users from '@json/allUsers'

let allUsers = users;
const posts: string[] = ['Финансы', 'Телевидение', 'Маркетинг', 'Телекоммуникации', 'Полиграфия', 'Издательство', 'Фото, видео', 'IT, интернет-технологии', 'Сетевое оборудование', 'Юридическое право', 'IT компания', 'Бизнес']

export const display = function () {
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
                      return true
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
                  this.Static.activeTab == 'Сообщества' ? 'players_tabs_item_active' : null]}
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


            <div class="players_list">
              {
                allUsers.map(item => {
                  return (
                    <a class="players_list_item" href="/profile" onclick={this.Fn.link}>
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
                        <h3>{item.name}</h3>
                        <p class="players_list_item_post">{item.post}</p>
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
                    </a>
                  )
                })
              }
            </div>

          </section>
        </div>
      </main >
    </div >

  )
}