import { Cemjsx, Static, front, Fn, Func, Ref } from "cemjs-all"
import back from '@svg/icons/back.svg'
import mapPin from '@svg/icons/dark/mapPin.svg'
import notFound from '@svg/list.svg'

let answer: any = []
let status: boolean = true

const lastRequestTimestamp = Date.now()
function debounce(func: any, delay: number) {
  let timeoutId: any
  return function (...args: any) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
}

export default function () {
  let value: any = ""

  return (
    <div class="main_wrap">
      <main
        class={["main", front.Variable.openSidebar ? null : "main_close"]}>
        <div class="wrapper">
          <a class="back"
            href="/"
            onclick={Fn.link}>
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Главная</span>
          </a>

          <section class="players">
            <div class="filter">
              <div class="filter_item filter_item_event">
                <span class="filter_item_title">
                  Поиск
                </span>
                <input
                  type="text"
                  class="filter_input"
                  placeholder="Поиск"
                  oninput={debounce(async (e: any) => {
                     value = e.target.value.toLocaleLowerCase()
                    if (value.length == 0 || value.length >= 2) {
                      answer = await front.Services.functions.sendApi("/api/players", {
                        "action": "GetAll",
                        "active": status,
                        "uuid": `${localStorage?.uuid}`,
                        "search": value
                      });
                      Static.players = answer?.result
                    }
                  }, 400)} />
              </div>
            </div>

            <div class="players_list">
              {
                Static.players?.length ?

                  Static.players?.map((item: any, key: any) => {
                    return (
                      <div
                        class="players_list_item"
                        onclick={async () => {
                          const getPlayer = {
                            "action": "Get",
                            "id": item?.id,
                            "uuid": `${localStorage?.uuid}`
                          }
                          let playerContent = await front.Services.functions.sendApi("/api/players", getPlayer)
                          //проверка на error
                          Static.contentPlayer = playerContent.result
                          Fn.linkChange(`/players/show/${Static.contentPlayer?.alias === "" ? item?.id : item?.name}`)
                        }}
                        init={($el: any) => {
                          if (key == Static.players?.length - 1) {
                            const observer = new IntersectionObserver((entries) => {
                              entries.forEach(async entry => {
                                if (entry.isIntersecting) {
                                  observer.unobserve($el)
                                  answer = await front.Services.functions.sendApi("/api/players", {
                                    "action": "GetAll",
                                    "skip": Static.players?.length,
                                    "active": status,
                                    "uuid": `${localStorage.uuid}`,
                                    "search": value
                                  })
                                  // console.log('=4aaa56=',page)
                                  Static.players = Static.players.concat(answer?.result)
                                }
                              })
                            })
                            observer.observe($el)
                          }
                        }}>
                        <span
                          class={[
                            "players_list_item_info_status",
                            item.status == 'Компания' ? "players_list_item_info_status_company" : null
                          ]}>
                          {item.status}
                        </span>
                        <div class="players_list_item_circle">
                          <div
                            class="players_list_item_image"
                            style={item?.img ? `background-image: url(/assets/upload/racib/${item?.img})` : `background-image: url(/public/contents/img/user.png)`}>
                          </div>
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