import { Cemjsx, Static, front, Fn, Func, Ref } from "cemjs-all";
import back from "@svg/icons/back.svg";
import arrNextDark from "@svg/icons/dark/next.svg";
import arrPrevDark from "@svg/icons/dark/prev.svg";
import placeWork from "@svg/icons/color/placeWork.svg";
import notFound from "@svg/list.svg";

let isDragging = false;
let startX, startScrollLeft;
let x1 = null;
let y1 = null;

export default function () {
  return (
    <div class="main_wrap">
      <main class={["main", front.Variable.openSidebar ? null : "main_close"]}>
        <div class="wrapper">
          <a class="back" href="/players" onclick={Fn.link}>
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Все участники</span>
          </a>

          <section class="profile">
            <div class="profile_user">
              <div class="profile_user_image">
                <span class="players_list_item_info_status">
                  {Static.contentPlayer?.status}
                </span>
                <div class="profile_user_image_circle">
                  <img
                    src={`https://storage.cem.su/racib/${Static.contentPlayer?.img}`}
                    alt="Фото пользователя"
                  />
                </div>
              </div>
              <div class="profile_user_info">
                <span class="profile_user_info_name">
                  {Static.contentPlayer?.name}
                </span>
                {Static.contentPlayer?.birthday ? (
                  <div class="profile_user_info_birth">
                    <span>Дата рождения</span>
                    <span>{Static.contentPlayer?.birthday}</span>
                  </div>
                ) : null}
                <div class="profile_user_info_location">
                  <span>Местоположение</span>
                  <span>{Static.contentPlayer?.city}</span>
                </div>
                {Static.contentPlayer?.registration ? (
                  <div class="profile_user_info_reg">
                    <span>Регистрация</span>
                    <span>{Static.contentPlayer?.registration}</span>
                  </div>
                ) : null}
              </div>
              {Static.contentPlayer?.placeWork ? (
                <div class="profile_user_placeWork">
                  <span>Место работы</span>
                  <span class="profile_user_placeWork_place">
                    <img class="mr_5" src={placeWork} alt="Место работы" />
                    {Static.contentPlayer?.placeWork}
                  </span>
                </div>
              ) : null}
            </div>
            <div class="profile_content">
              <h3 class="profile_content_title mt_10">Информация</h3>

              {Static.contentPlayer?.post ? (
                <p class="profile_content_text">{Static.contentPlayer?.post}</p>
              ) : null}

              {Static.contentPlayer?.info
                ? Static.contentPlayer.info.map((item: any) => {
                  return <p class="profile_content_text">{item}</p>;
                })
                : null}

              {Static.contentPlayer?.biography?.length ? (
                <h3 class="profile_content_title">Биография</h3>
              ) : null}
              {Static.contentPlayer?.biography
                ? Static.contentPlayer?.biography.map((item: any) => {
                  return <p class="profile_content_text">{item}</p>;
                })
                : null}

              {Static.contentPlayer?.activity?.length ? (
                <div class="mb_10">
                  <h3 class="profile_content_title mt_10">
                    Сфера деятельности
                  </h3>
                  <div class="profile_content_activity">
                    {Static.contentPlayer?.activity.map((item: any) => {
                      return (
                        <span class="profile_content_activity_item">
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              {Static.contentPlayer?.keyWords?.length ? (
                <div class="mb_10">
                  <h3 class="profile_content_title mt_10">Ключевые слова</h3>
                  <div class="profile_content_activity">
                    {Static.contentPlayer?.keyWords?.map((item: any) => {
                      return (
                        <span class="profile_content_activity_item">
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              {Static.contentPlayer?.cover ? (
                <div class="profile_content_cover">
                  <img
                    src={`https://storage.cem.su/racib/${Static.contentPlayer?.cover}`}
                    alt="Обложка компании"
                  />
                </div>
              ) : null}

              {Static.contentPlayer?.desc?.length ? (
                <div class="mt_15">
                  {Static.contentPlayer?.desc?.map((item: any) => {
                    return (
                      <div>
                        {item?.title ? (
                          <h3 class="profile_content_title mt_10">
                            {item?.title}
                          </h3>
                        ) : null}

                        {item?.text
                          ? item?.text?.map((el: any) => {
                            return <p class="profile_content_text">{el}</p>;
                          })
                          : null}

                        {item?.list ? (
                          <div>
                            <span class="profile_content_list_title">
                              {item?.list?.title}
                            </span>
                            <ul class="profile_content_list">
                              {item?.list?.items.map((item: any) => {
                                return (
                                  <li class="profile_content_list_item">
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ) : null}

              {Static.contentPlayer?.options?.length ? (
                <div>
                  {Static.contentPlayer?.options?.map((item: any) => {
                    return (
                      <p class="event_content_text">
                        {item?.text}
                        <a
                          href={item?.link}
                          onclick={Fn.link}
                          class="link ml_5"
                        >
                          {item?.textLink && (
                            <span>
                              {item.textLink
                                .replace("https://", "")
                                .substring(0, 30) +
                                (item.textLink.length > 30 ? "..." : "")}
                            </span>
                          )}
                        </a>
                      </p>
                    );
                  })}
                </div>
              ) : null}

              {Static.contentPlayer?.video?.length ? (
                <div>
                  {Static.contentPlayer?.video?.map(
                    (item: any, index: number) => {
                      return (
                        <div class="mt_15">
                          {item?.title ? (
                            <h3 class="profile_content_title mt_10">
                              {item?.title}
                            </h3>
                          ) : null}
                          {item?.src ? (
                            <div
                              ref="videoWrap"
                              class="profile_content_videoWrap"
                              onclick={() => {
                                if (
                                  Ref.videoWrap.classList.contains("videoReady")
                                )
                                  return;
                                Ref.videoWrap.classList.add("videoReady");
                                Ref.videoWrap.insertAdjacentHTML(
                                  "afterbegin",
                                  `<iframe class="profile_content_video" src=${item?.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                                );
                              }}
                            ></div>
                          ) : null}
                        </div>
                      );
                    }
                  )}
                </div>
              ) : null}

              {Static.contentPlayer?.media?.length ? (
                <div>
                  <h3 class="profile_content_title mt_10">Медиараздел</h3>
                  <div class="profile_content_media">
                    {Static.contentPlayer?.media.map((item: any) => {
                      return (
                        <div class="profile_content_media_item">
                          <img
                            src={`https://storage.cem.su/racib/${item}`}
                            alt="Медиа"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              {Static.contentPlayer?.status == "Персона" ? (
                <div>
                  {Static.contentPlayer?.info ||
                    Static.contentPlayer?.biography ||
                    Static.contentPlayer?.desc ? null : (
                    <div class="notFound_wrap">
                      <div class="notFound">
                        <span class="notFound_title">
                          Информация не указана
                        </span>
                        <img
                          src={notFound}
                          alt="Информация не указана"
                          class="notFound_img"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : Static.contentPlayer?.status == "Компания" ? (
                <div></div>
              ) : null}

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
                        Ref.playerCarousel.scrollLeft -=
                          Ref.playerSlide.offsetWidth + 20;
                      }}
                    >
                      <img src={arrPrevDark} />
                    </button>
                    <button
                      class="arrow arrow_dark"
                      onclick={() => {
                        Ref.playerCarousel.scrollLeft +=
                          Ref.playerSlide.offsetWidth + 20;
                      }}
                    >
                      <img src={arrNextDark} />
                    </button>
                    <a href="/players" class="btn_link home_events_link">
                      Все участники
                    </a>
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
                    Ref.playerCarousel.scrollLeft =
                      startScrollLeft - (e.pageX - startX);
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
                        Ref.playerCarousel.scrollLeft -=
                          Ref.playerSlide.offsetWidth + 15;
                      } else {
                        Ref.playerCarousel.scrollLeft +=
                          Ref.playerSlide.offsetWidth + 15;
                      }
                    }
                    x1 = null;
                    y1 = null;
                  }}
                >
                  {Static.players?.map((item: any, index: number) => {
                    return (
                      <div
                        class="carousel_person"
                        ref="playerSlide"
                        onclick={async () => {
                          const getPlayer = {
                            action: "Get",
                            id: item?.id,
                            uuid: `${localStorage?.uuid}`,
                          };
                          let playerContent =
                            await front.Services.functions.sendApi(
                              "/racib/players",
                              getPlayer
                            );
                          //проверка на error
                          Static.contentPlayer = playerContent.result;
                          Fn.linkChange(
                            `/players/show/${Static.contentPlayer?.alias === ""
                              ? item?.id
                              : item?.name
                            }`
                          );
                        }}
                      >
                        <div class="carousel_person_circle">
                          <div
                            class="carousel_person_img"
                            style={`background-image: url(https://storage.cem.su/racib/${item?.img})`}
                          ></div>
                        </div>
                        <span class="carousel_person_status">
                          {item?.status}
                        </span>
                        <h5 class="carousel_person_name">{item?.name}</h5>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
