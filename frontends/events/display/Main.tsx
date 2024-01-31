import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import back from '@svg/icons/back.svg'
import date from '@svg/icons/dark/date.svg'
import map from '@svg/icons/dark/mapPin.svg'
import notFound from '@svg/list.svg'
import racib from '@svg/racib.svg'

let answer: any = []
let status: boolean = true

export default function () {

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
  let value: any = ""
  return (
    <div class="main_wrap">
      <main
        class={["main", front.Variable.openSidebar ? null : "main_close"]}>
        <div class="wrapper">
          <a class="back" href="/" onclick={Fn.link}>
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Главная</span>
          </a>

          <section class="events">

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
                      answer = await front.Services.functions.sendApi("/api/events", {
                        "action": "GetAll",
                        "active": status,
                        "search": value
                      })
                      Static.events = answer?.result
                    }
                  }, 400)}
                />
              </div>
            </div>

            <div class="events_list">
              {
                Static.events?.length ?

                  Static.events?.map((item: any, key: number) => {
                    return (
                      <div
                        class="card"
                        onclick={async () => {
                          const getEvent = {
                            "action": "Get",
                            "id": item?.id
                          }
                          let eventContent = await front.Services.functions.sendApi("/api/events", getEvent)
                          Static.contentEvent = eventContent?.result
                          Fn.linkChange(`/events/show/${item?.id}`)
                        }}
                        init={($el: any) => {
                          if (key == Static.news?.length - 1) {
                            const observer = new IntersectionObserver((entries) => {
                              entries.forEach(async entry => {
                                if (entry.isIntersecting) {
                                  observer.unobserve($el)
                                  answer = await front.Services.functions.sendApi("/api/events", {
                                    "action": "GetAll",
                                    "skip": Static.events?.length,
                                    "active": status,
                                    "search": value
                                  })
                                  Static.news = Static.news?.concat(answer?.result)
                                }
                              })
                            })
                            observer.observe($el)
                          }
                        }}>
                        <span class="card_category">{item?.category}</span>
                        <div class="card_img" style={`background-image: url(/assets/upload/racib/${item?.cover})`}>
                          <div class="card_logo">
                            <img src={racib} alt="" />
                          </div>
                        </div>
                        <div class="card_info">
                          <h5 class="card_info_title">{item?.title}</h5>
                          <span class="card_info_date">
                            <img src={date} alt="Дата проведения мероприятия" />
                            {item?.date}
                          </span>
                          {
                            item?.location ?
                              <span class="card_info_location">
                                <img src={map} alt="Место проведения мероприятия" />
                                {item?.location}
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