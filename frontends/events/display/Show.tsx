import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import back from '@svg/icons/back.svg'
import map from '@svg/icons/dark/mapPin.svg'
import racib from '@svg/racib.svg'


export default function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", front.Variable.openSidebar ? null : "main_close"]}>
        <div class="wrapper">
          <a class="back"
            href="/events"
            onclick={Fn.link}>
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Все мероприятия</span>
          </a>

          <section class="event">
            <div class="event_profile">
              <div
                class="event_profile_image"
                style={`background-image: url(/assets/upload/racib/${Static.contentEvent?.cover})`}>
                <div class="event_profile_image_logo">
                  <img src={racib} alt="Логотип мероприятия" />
                </div>
              </div>
              <div class="event_profile_info">
                <span class="event_profile_info_category">{Static.contentEvent?.category}</span>
                {
                  Static.contentEvent?.location ?
                    <div class="event_profile_info_location">
                      <img src={map} alt="Локация" />
                      <span>{Static.contentEvent?.location}</span>
                    </div> : null
                }

                <div class="event_profile_info_owner">
                  <span>Автор</span>
                  <span class="event_profile_info_owner_img">
                    <img src={racib} />
                    РАКИБ
                  </span>
                </div>
              </div>
            </div>
            <div class="event_content">
              <h1 class="event_content_title">{Static.contentEvent?.title}</h1>
              {
                Static.contentEvent?.subtitle ?
                  <div class="block_default mY_10">
                    {
                      Static.contentEvent?.subtitle?.map((item: any) => {
                        return (
                          <p class="event_content_subtitle">{item}</p>
                        )
                      })
                    }
                  </div> : null
              }

              {
                Static.contentEvent?.desc ?
                  <div class="event_content_desc">
                    {
                      Static.contentEvent?.desc.map((item: any) => {
                        return (
                          <div class="event_content_desc_item">
                            <div>
                              {
                                item?.text ?
                                  <div>
                                    {
                                      item?.text?.map((el: any) => {
                                        return (
                                          <p class="event_content_text">{el}</p>
                                        )
                                      })
                                    }
                                  </div> : null
                              }
                              {
                                item?.list ?
                                  <div class="event_content_list_wrap">
                                    <p class="event_content_list_title">{item?.list?.title}</p>
                                    <ul class="event_content_list">
                                      {
                                        item?.list?.items?.map((li: any) => {
                                          const makeLinksClickable = (text: string, attribute: string) => {
                                            const urlRegex = /(https?:\/\/[^\s]+)/g;
                                            return text.replace(urlRegex, (url) => `<a href="${url}" rel="noreferrer" target="_blank" rel="nofollow noopener" ${attribute}>${url}</a>`);
                                          }
                                          return (
                                            <li class="event_content_list_item event_content_text" html={makeLinksClickable(li, 'class="my-link"')}></li>
                                          )
                                        })
                                      }
                                    </ul>
                                  </div> : null
                              }
                            </div>
                          </div>
                        )
                      })
                    }
                  </div> : null
              }

              {
                Static.contentEvent?.listLinks ?
                  <div class="new_content_desc">
                    {
                      Static.contentEvent?.listLinks?.map((item: any) => {
                        return (
                          <div class="new_content_desc_item">
                            <div class="event_content_list_wrap">
                              <p class="event_content_list_title">{item?.title}</p>
                              <ul class="event_content_list">
                                {
                                  item?.links ?
                                    item.links.map((li: any) => {
                                      return (
                                        <li class="event_content_list_item event_content_text">
                                          {li?.text}
                                          <a href={li?.link} class="link ml_5" onclick={Fn.link}>{li?.textLink}</a>
                                        </li>
                                      )
                                    }) : null
                                }
                              </ul>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div> : null
              }

              {
                Static.contentEvent?.options ?
                  <div>
                    {
                      Static.contentEvent.options.map((item: any) => {
                        return (
                          <p class="event_content_text">{item?.text}
                            <a href={item?.link} onclick={Fn.link} class="link ml_5">{item?.textLink}</a>
                            {
                              item?.docLink ? <a href={item?.docLink} class="link">{item?.docText}</a> : null
                            }
                          </p>
                        )
                      })
                    }
                  </div> : null
              }

              {
                Static.contentEvent?.image ?
                  <div class="event_content_cover"
                    style={`background-image: url(/assets/upload/racib/${Static.contentEvent?.image})`}>
                  </div> : null
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}