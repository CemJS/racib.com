import { Cemjsx, Static, front, Fn, Ref } from "cemjs-all"
import back from '@svg/icons/back.svg'
import mapPin from '@svg/icons/dark/mapPin.svg'
import notFound from '@svg/list.svg'
import experts from '@json/experts'
import expertsList from '@json/expertsList'

export default function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", front.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <a
            class="back"
            href="/"
            onclick={Fn.link}
          >
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">О нас</span>
          </a>


          <h1 class="racib_title">Экспертный совет</h1>

          <section class="players">
            <div class="players_list">
              {
                experts.length ?

                  experts.map((item, index) => {
                    return (
                      <div
                        class="players_list_item"
                        onclick={() => {
                          Static.record = item;
                          Fn.linkChange(`/players/show/${item.name}`)
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

                          {/* {
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
                          } */}

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

          <section class="block_default">
            <h2 class="general_title">
              <span>Список участников экспертного совета</span>
              <span>Рабочей группы по вопросу законодательного регулирования криптовалют</span>
            </h2>

            <ol class="list_numeral">
              {
                expertsList.map(item => {
                  return (
                    <li class="list_numeral_item">
                      <span class="list_numeral_name">{item.name}</span>
                      <span class="list_numeral_desc">{item.desc}</span>
                    </li>
                  )
                })
              }
            </ol>

          </section>
        </div>
      </main >
    </div >

  )
}