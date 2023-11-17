import { Cemjsx, Static, front, Fn, Func, Ref } from "cemjs-all"
import back from '@svg/icons/back.svg'
import notFound from '@svg/list.svg'
import views from '@svg/icons/dark/views.svg'
import news from '@json/news'


const category = [
  {
    name: 'Блокчейн',
  },
  {
    name: 'Крипто',
  },
  {
    name: 'Майнинг',
  },
  {
    name: 'Общество',
  }
]

let newsData, categoryData = [];
newsData = news;
categoryData = category;

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
                      if (item.descShort.toLocaleLowerCase().includes(value)) {
                        return true;
                      }
                    })
                    Fn.init()
                  }}
                />
              </div>

              <div class="filter_item" ref="filterCategory">

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
                          newsData = news;
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
                        newsData = news.filter((item) => {
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
                              ref="categoryItem"
                              class="filter_category_list_item"
                              onclick={() => {
                                Static.chooseCategory = item.name;
                                if (Static.categoryStatus == 'close') {
                                  Static.categoryStatus = 'open';
                                  Ref.filterCategory.classList.add('filter_item_active');
                                } else if (Static.categoryStatus == 'open') {
                                  Static.categoryStatus = 'close';
                                  Ref.filterCategory.classList.remove('filter_item_active');
                                }
                                newsData = news.filter((item) => {
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
                    newsData = news.filter((item) => {
                      console.log('=9a2e9c=', item)
                      if (item.city.toLocaleLowerCase().includes(value)) {
                        return true;
                      }
                    })
                    Fn.init();
                  }}
                />
              </div>

            </div>

            <div class="news_list">
              {
                newsData.length ?

                  newsData.reverse().map((item, index) => {
                    return (
                      <div
                        class="newCard"
                        ref="newsSlide"
                        onclick={() => {
                          Static.record = item;
                          Fn.linkChange(`/news/show/${item.id}`)
                        }}
                      >
                        <div class="newCard_img" style={`background-image: url(${item.img})`}>
                          <span class="newCard_category">{item.category}</span>
                        </div>
                        <div class="newCard_info">
                          <h5 class="newCard_title">{item.title}</h5>
                          <p class="newCard_desc">{item.descShort}</p>
                          <div class="newCard_details">
                            {item?.date ? <span class="newCard_details_date">{item.date}</span> : null}
                            {
                              item?.views ?
                                <span class="newCard_details_views">
                                  {item.views}
                                  <img src={views} />
                                </span> : null
                            }
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
      </main>
    </div>

  )
}