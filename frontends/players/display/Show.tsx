import { Cemjsx, Static, front, Fn, Func, Ref } from "cemjs-all"
import back from '@svg/icons/back.svg'
import arrNextDark from '@svg/icons/dark/next.svg'
import arrPrevDark from '@svg/icons/dark/prev.svg'
import placeWork from '@svg/icons/color/placeWork.svg'
import notFound from '@svg/list.svg'

import allUsers from '@json/allUsers'

let isDragging = false;
let startX, startScrollLeft;
let x1 = null;
let y1 = null;

export default function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", front.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <a
            class="back"
            href="/players"
            onclick={Fn.link}
          >
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Все участники</span>
          </a>

          <section class="profile">
            <div class="profile_user">
              <div class="profile_user_image">
                <span class="players_list_item_info_status">{Static.record.status}</span>
                <div class="profile_user_image_circle">
                  <img src={Static.record.img} alt="Фото пользователя" />
                </div>
              </div>
              <div class="profile_user_info">
                <span class="profile_user_info_name">{Static.record.name}</span>
                {
                  Static.record?.birthday ?
                    <div class="profile_user_info_birth">
                      <span>Дата рождения</span>
                      <span>{Static.record.birthday}</span>
                    </div> : null
                }
                <div class="profile_user_info_location">
                  <span>Местоположение</span>
                  <span>{Static.record.city}</span>
                </div>
                {
                  Static.record?.registration ?
                    <div class="profile_user_info_reg">
                      <span>Регистрация</span>
                      <span>{Static.record.registration}</span>
                    </div> : null
                }
              </div>
              {
                Static.record?.placeWork ?
                  <div class="profile_user_placeWork">
                    <span>Место работы</span>
                    <span class="profile_user_placeWork_place">
                      <img class="mr_5" src={placeWork} alt="Место работы" />
                      {Static.record.placeWork}
                    </span>
                  </div> : null
              }

            </div>
            <div class="profile_content">
              <h3 class="profile_content_title mt_10">Информация</h3>

              {
                Static.record?.post ?
                  <p class="profile_content_text">{Static.record.post}</p> : null
              }

              {
                Static.record?.info ?
                  Static.record.info.map(item => {
                    return (
                      <p class="profile_content_text">{item}</p>
                    )
                  })
                  : null
              }

              {
                Static.record?.biography ? <h3 class="profile_content_title">Биография</h3> : null
              }
              {
                Static.record?.biography ?
                  Static.record?.biography.map(item => {
                    return (
                      <p class="profile_content_text">{item}</p>
                    )
                  })
                  : null
              }

              {
                Static.record?.activity ?
                  <div class="mb_10">
                    <h3 class="profile_content_title mt_10">Сфера деятельности</h3>
                    <div class="profile_content_activity">
                      {
                        Static.record.activity.map(item => {
                          return (
                            <span class="profile_content_activity_item">{item}</span>
                          )
                        })
                      }
                    </div>
                  </div> : null
              }

              {
                Static.record?.keyWords ?
                  <div class="mb_10">
                    <h3 class="profile_content_title mt_10">Ключевые слова</h3>
                    <div class="profile_content_activity">
                      {
                        Static.record.keyWords.map(item => {
                          return (
                            <span class="profile_content_activity_item">{item}</span>
                          )
                        })
                      }
                    </div>
                  </div> : null
              }

              {
                Static.record?.cover ?
                  <div class="profile_content_cover">
                    <img src={Static.record.cover} alt="Обложка компании" />
                  </div> : null
              }

              {
                Static.record?.desc ?
                  <div class="mt_15">
                    {
                      Static.record.desc.map(item => {
                        return (
                          <div>
                            {
                              item?.title ? <h3 class="profile_content_title mt_10">{item.title}</h3> : null
                            }

                            {
                              item?.text ?
                                item.text.map(el => {
                                  return (
                                    <p class="profile_content_text">{el}</p>
                                  )
                                }) : null
                            }

                            {
                              item?.list ?
                                <div>
                                  <span class="profile_content_list_title">{item.list.title}</span>
                                  <ul class="profile_content_list">
                                    {
                                      item.list.listItems.map(item => {
                                        return (
                                          <li class="profile_content_list_item">{item}</li>
                                        )
                                      })
                                    }
                                  </ul>
                                </div> : null
                            }
                          </div>
                        )
                      })
                    }
                  </div>

                  : null
              }


              {
                Static.record.options ?
                  <div>
                    {
                      Static.record.options.map(item => {
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
                Static.record?.video ?
                  <div>
                    {
                      Static.record?.video.map((item, index) => {
                        return (
                          <div class="mt_15">
                            {
                              item?.title ?
                                <h3 class="profile_content_title mt_10">{item.title}</h3> : null
                            }
                            {
                              item?.src ?
                                <div
                                  ref="videoWrap"
                                  class="profile_content_videoWrap"
                                  onclick={() => {
                                    if (Ref.videoWrap.classList.contains('videoReady')) return;
                                    Ref.videoWrap.classList.add('videoReady');
                                    Ref.videoWrap.insertAdjacentHTML('afterbegin', `<iframe class="profile_content_video" src=${item.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
                                  }}
                                ></div> : null
                            }
                          </div>
                        )
                      })
                    }
                  </div> : null
              }

              {
                Static.record?.media ?
                  <div>
                    <h3 class="profile_content_title mt_10">Медиараздел</h3>
                    <div class="profile_content_media">
                      {
                        Static.record?.media.map(item => {
                          return (
                            <div class="profile_content_media_item">
                              <img src={item} alt="Медиа" />
                            </div>
                          )
                        })
                      }
                    </div>
                  </div> : null
              }


              {
                Static.record.status == 'Персона' ?
                  <div>
                    {
                      Static.record.info || Static.record.biography || Static.record.desc ? null :
                        <div class="notFound_wrap">
                          <div class="notFound">
                            <span class="notFound_title">Информация не указана</span>
                            <img src={notFound} alt="Информация не указана" class="notFound_img" />
                          </div>
                        </div>

                    }
                  </div> :
                  Static.record.status == 'Компания' ?
                    <div></div> : null

              }

              <section class="profile_slider slider">
                <div class="slider_header">
                  <div>
                    <h2>Все участники</h2>
                    <p>Деловое сообщество</p>
                  </div>
                  <div class="home_news_nav">
                    <button
                      class="arrow arrow_dark"
                      onclick={() => {
                        Ref.playerCarousel.scrollLeft -= Ref.playerSlide.offsetWidth + 20;
                      }}
                    >
                      <img src={arrPrevDark} />
                    </button>
                    <button
                      class="arrow arrow_dark"
                      onclick={() => {
                        Ref.playerCarousel.scrollLeft += Ref.playerSlide.offsetWidth + 20;
                      }}
                    >
                      <img src={arrNextDark} />
                    </button>
                    <a href="/players" class="btn_link home_events_link">Все участники</a>
                  </div>
                </div>

                <div
                  class="carousel"
                  ref="playerCarousel"
                  onmousedown={(e) => {
                    isDragging = true;
                    startX = e.pageX;
                    startScrollLeft = Ref.playerCarousel.scrollLeft;
                  }}
                  onmousemove={(e) => {
                    if (!isDragging) return;
                    e.preventDefault();
                    Ref.playerCarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
                  }}
                  onmouseup={() => {
                    isDragging = false;
                  }}
                  ontouchstart={(e) => {
                    const firstTouch = e.touches[0];
                    x1 = firstTouch.clientX;
                    y1 = firstTouch.clientY;
                  }}
                  ontouchmove={(e) => {
                    if (!x1 || !y1) return false;
                    let x2 = e.touches[0].clientX;
                    let y2 = e.touches[0].clientY;
                    let xDiff = x2 - x1;
                    let yDiff = y2 - y1;
                    if (Math.abs(xDiff) > Math.abs(yDiff)) {
                      if (xDiff > 0) {
                        Ref.playerCarousel.scrollLeft -= Ref.playerSlide.offsetWidth + 15;
                      } else {
                        Ref.playerCarousel.scrollLeft += Ref.playerSlide.offsetWidth + 15;
                      }
                    }
                    x1 = null;
                    y1 = null;
                  }}
                >
                  {
                    allUsers.map((item, index) => {
                      return (
                        <div
                          class="carousel_person"
                          ref="playerSlide"
                          onclick={() => {
                            Static.record = item;
                            Fn.linkChange(`/players/show/${item.name}`)
                          }}
                        >
                          <div class="carousel_person_circle">
                            <div
                              class="carousel_person_img"
                              style={`background-image: url(${item.img})`}
                            ></div>
                          </div>
                          <span class="carousel_person_status">{item.status}</span>
                          <h5 class="carousel_person_name">{item.name}</h5>
                        </div>
                      )
                    })
                  }
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
    </div>

  )
}