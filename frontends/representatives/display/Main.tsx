import { Cemjsx, Static, front, Fn } from "cemjs-all"
import back from '@svg/icons/back.svg'
import notFound from '@svg/list.svg'

let answer: any = []
let status: boolean = true
let value: any = ""
let editKey = -1

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

const changeStatusrepresentatives = async (event: any) => {
  status = !status
  answer = await front.Services.functions.sendApi("/api/representatives", {
    "action": "GetAll",
    "active": status,
    "uuid": `${localStorage.uuid}`,
    "search": ""
  })
  Static.representatives = answer?.result

}
export default function () {
  console.log("Static.stateField", Static.stateField);

  return (
    <div class="main_wrap">
      <main class="main main_close">
        <div class="wrapper">
          <a class="back" href="/">
            <img src={back} />
            <span class="back_title">Главная</span>
          </a>

          <section class="representatives">
            <div class="filter">
              <div class="filter_item filter_item_event">
                <span class="filter_item_title">
                  Поиск
                </span>
                <input
                  type="text"
                  class="filter_input"
                  // placeholder="Поиск "
                  oninput={debounce(async (e: any) => {
                    value = e.target.value.toLocaleLowerCase();
                    if (value.length == 0 || value.length >= 2) {
                      answer = await front.Services.functions.sendApi("/api/representatives", {
                        "action": "GetAll",
                        "skip": Static.representatives.length,
                        "active": status,
                        "uuid": `${localStorage.uuid}`,
                        "search": value
                      })
                      Static.representatives = answer?.result
                    }
                  }, 400)}
                />
              </div>
            </div>

            <div class="repBG">Представительства РАКИБ в регионах
              взаимодействуют с местными органами
              власти, координируют деятельность
              региональных
              участников
              криптовалютного рынка, выступают от
              лица ассоциации на крупных отраслевых
              мероприятиях, проходящих в регионе,
              содействуют реализации программ
              региональной цифровизации путем
              внесения конкретных предложений в
              госструктуры,
              ответственные
              за
              исполнение программ, выполняют иные
              функции с учетом интересов локальных
              бизнес-сообществ.
              Контактный центр РАКИБ по работе с
              Представительствами и вопросам по
              взаимодействию с регионами
              email: <a href="">security@racib.com</a> </div>
            {Static.representatives?.length ?
              <div class="representatives_list">
                {Static.representatives?.map((item: any, key: number) => {
                  return (
                    <div class="representativeCard"
                      init={($el: any) => {
                        if (key == Static.representatives?.length - 1) {
                          const observer = new IntersectionObserver((entries) => {
                            entries.forEach(async entry => {
                              if (entry.isIntersecting) {
                                observer.unobserve($el)
                                answer = await front.Services.functions.sendApi("/api/representatives", {
                                  "action": "GetAll",
                                  "skip": Static.representatives?.length,
                                  "active": status,
                                  "uuid": `${localStorage?.uuid}`,
                                  "search": value
                                })
                                Static.representatives = Static.representatives?.concat(answer?.result)
                              }
                            })
                          })
                          observer.observe($el)
                        }
                      }}>
                      <div class="representativeCard_info">
                        <h5 class="representativeCard_title">
                          {item?.location}
                        </h5>
                        <span >Руководитель представительства:</span>
                        <p style="padding-top: 10px" class="representativeCard_desc">
                          {item?.headOfOffice}
                        </p>
                        <div class="representativeCard_details">
                          <span>Контактный центр:</span>
                          <p>
                            {item?.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              :
              <div class="news_list">
                <div class="notFound">
                  <span class="notFound_titleMini">Записи не найдены</span>
                  <img src={notFound} alt="Записи не найдены" class="notFound_imgMini" />
                </div>
              </div>
            }
          </section>
        </div>
      </main >
    </div >
  )
}