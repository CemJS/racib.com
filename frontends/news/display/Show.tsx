import { Cemjsx, Static, front, Fn, Func, Ref } from "cemjs-all"
import back from '@svg/icons/back.svg'
import map from '@svg/icons/dark/mapPin.svg'

export default function () {

  //   if (!Static.contentNew){
  // return (
  //   <div></div>
  // )
  //   }

  return (
    <div class="main_wrap">
      <main
        class={["main", front.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <a
            class="back"
            href="/news"
            onclick={Fn.link}
          >
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Все новости</span>
          </a>

          <section class="new">
            <div class="new_profile">
              <div class="new_profile_image">
                <img src={`/assets/upload/racib/${Static.contentNew?.img}`} alt="Избражение новости" />
              </div>
              <div class="new_profile_info">
                {
                  Static.contentNew?.date_event ?
                    <span>{Static.contentNew?.date_event}</span> : null
                }
                {
                  Static.contentNew?.category ?
                    <span class="new_profile_info_category">{Static.contentNew?.category}</span> : null
                }

                {
                  Static.contentNew?.city ?
                    <span class="new_profile_info_location">
                      <img src={map} alt="Локация" />
                      {Static.contentNew?.city}
                    </span> : null
                }

              </div>
            </div>
            <div class="new_content">
              <h2 class="new_content_title">{Static.contentNew?.title}</h2>
              <div>
                {
                  Static.contentNew?.desc ?
                    <div class="new_content_desc">
                      {
                        Static.contentNew?.desc.map((item: any) => {
                          return (
                            <div class="new_content_desc_item">
                              <div>
                                {
                                  item?.text ?
                                    <div>
                                      {
                                        item?.text?.map((el: any) => {
                                          return (
                                            <p contenteditable="plaintext-only" class="new_content_text">{el}</p>
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
                                            return (
                                              <li class="event_content_list_item event_content_text">{li}</li>
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
                  Static.contentNew?.options ?
                    <div>
                      {
                        Static.contentNew?.options?.map((item: any) => {
                          return (
                            <p class="event_content_text">{item?.text}
                              <a
                                href={item?.link}
                                onclick={Fn.link}
                                class="link ml_5"
                              >
                                {item?.textLink}
                              </a>
                            </p>
                          )
                        })
                      }
                    </div> : null
                }

                {
                  Static.contentNew?.listLinks ?
                    <div class="new_content_desc">
                      {
                        Static.contentNew?.listLinks?.map((item: any) => {
                          return (
                            <div class="new_content_desc_item">
                              <div class="event_content_list_wrap">
                                <p class="event_content_list_title">{item?.title}</p>
                                <ul class="event_content_list">
                                  {
                                    item?.links ?
                                      item.links?.map((li: any) => {
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
                  Static.contentNew?.image ?
                    <div class="event_content_cover"
                      style={`background-image: url(https://crypto-emergency.com/assets/upload/racib/${Static.contentNew?.image})`}>
                    </div> : null
                }

                {
                  Static.contentNew?.video ?
                    <div>
                      {
                        Static.contentNew.video?.map((item: any, index: number) => {
                          return (
                            <div class="mt_15">
                              {
                                item?.title ?
                                  <h3 class="profile_content_title mt_10">{item?.title}</h3> : null
                              }
                              {
                                item?.src ?
                                  <div
                                    ref="videoWrap"
                                    class="profile_content_videoWrap"
                                    onclick={() => {
                                      if (Ref.videoWrap.classList.contains('videoReady')) return;
                                      Ref.videoWrap.classList.add('videoReady');
                                      Ref.videoWrap.insertAdjacentHTML('afterbegin', `<iframe class="profile_content_video" src=${item?.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
                                    }}
                                  ></div> : null
                              }
                            </div>
                          )
                        })
                      }
                    </div> : null
                }
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>

  )
}