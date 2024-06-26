import { Cemjsx, Static, front, Fn, Func, Ref } from "cemjs-all";
import back from "@svg/icons/back.svg";
import map from "@svg/icons/dark/mapPin.svg";

export default function () {
  //   if (!Static.contentNew){
  // return (
  //   <div></div>
  // )
  //   }

  return (
    <div class="main_wrap">
      <main class={["main", front.Variable.openSidebar ? null : "main_close"]}>
        <div class="wrapper">
          <a class="back" href="/theywriteaboutus" onclick={Fn.link}>
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Все новости</span>
          </a>

          <section class="new">
            <div class="new_profile">
              <div class="new_profile_image">
                <img
                  src={Static.contentNew?.img ? `https://storage.cem.su/racib/${Static.contentNew?.img}` : `https://storage.cem.su/racib/0004d9d6c7f30a3eb2f0196c3e99b7cd.jpeg`}
                  alt="Избражение новости"
                />
              </div>
              <div class="new_profile_info">
                {Static.contentNew?.date_event ? (
                  <span>{Static.contentNew?.date_event}</span>
                ) : null}
                {Static.contentNew?.category ? (
                  <span class="new_profile_info_category">
                    {Static.contentNew?.category}
                  </span>
                ) : null}

                {Static.contentNew?.city ? (
                  <span class="new_profile_info_location">
                    <img src={map} alt="Локация" />
                    {Static.contentNew?.city}
                  </span>
                ) : null}
              </div>
            </div>
            <div class="new_content">
              <h2 class="new_content_title">{Static.contentNew?.title}</h2>
              <div>
                {Static.contentNew?.desc ? (
                  <div class="new_content_desc">
                    {Static.contentNew?.desc.map((item: any) => {
                      return (
                        <div class="new_content_desc_item">
                          <div>
                            {item?.text ? (
                              <div>
                                {item?.text?.map((el: any) => {
                                  return <p class="new_content_text">{el}</p>;
                                })}
                              </div>
                            ) : null}
                            {item?.list ? (
                              <div class="event_content_list_wrap">
                                <p class="event_content_list_title">
                                  {item?.list?.title}
                                </p>
                                <ul class="event_content_list">
                                  {item?.list?.items?.map((li: any) => {
                                    const makeLinksClickable = (
                                      text: string,
                                      attribute: string
                                    ) => {
                                      const urlRegex = /(https?:\/\/[^\s]+)/g;
                                      return text.replace(
                                        urlRegex,
                                        (url) =>
                                          `<a href="${url}" rel="noreferrer" target="_blank" rel="nofollow noopener" ${attribute}>${url}</a>`
                                      );
                                    };
                                    return (
                                      <li
                                        class="event_content_list_item event_content_text"
                                        html={makeLinksClickable(
                                          li,
                                          'class="my-link"'
                                        )}
                                      ></li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}

                {Static.contentNew?.options ? (
                  <div>
                    {Static.contentNew?.options?.map((item: any) => {
                      return (
                        <p class="event_content_text">
                          {item?.text}
                          <a
                            href={item?.link}
                            target="_blank"
                            class="link ml_5"
                          >
                            {item?.textLink && (
                              <span>
                                {item.textLink
                                  .replace("https://", "")
                                  .substring(0, 50) +
                                  (item.textLink.length > 50 ? "..." : "")}
                              </span>
                            )}
                          </a>
                        </p>
                      );
                    })}
                  </div>
                ) : null}

                {Static.contentNew?.listLinks ? (
                  <div class="new_content_desc">
                    {Static.contentNew?.listLinks?.map((item: any) => {
                      return (
                        <div class="new_content_desc_item">
                          <div class="event_content_list_wrap">
                            <p class="event_content_list_title">
                              {item?.title}
                            </p>
                            <ul class="event_content_list">
                              {item?.links
                                ? item.links?.map((li: any) => {
                                  return (
                                    <li class="event_content_list_item event_content_text">
                                      {li?.text}
                                      <a
                                        href={li?.link}
                                        class="link ml_5"
                                        onclick={Fn.link}
                                      >
                                        {li?.textLink && (
                                          <span>
                                            {li.textLink
                                              .replace("https://", "")
                                              .substring(0, 30) +
                                              (li.textLink.length > 30
                                                ? "..."
                                                : "")}
                                          </span>
                                        )}
                                      </a>
                                    </li>
                                  );
                                })
                                : null}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
                {Static.contentNew?.origin ? (
                  <div>
                    {Static.contentNew?.origin?.map((item: any) => {
                      return (
                        <p class="event_content_text">
                          {item?.text}
                          <a
                            href={item?.link}
                            target="_blank"
                            class="link ml_5"
                          >
                            {item?.textLink && (
                              <span>
                                {item.textLink
                                  .replace("https://", "")
                                  .substring(0, 50) +
                                  (item.textLink.length > 50 ? "..." : "")}
                              </span>
                            )}
                          </a>
                        </p>
                      );
                    })}
                  </div>
                ) : null}

                {Static.contentNew?.video ? (
                  <div>
                    {Static.contentNew.video?.map(
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
                                    Ref.videoWrap.classList.contains(
                                      "videoReady"
                                    )
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
                {Static.contentNew?.image ? (
                  <div
                    class="event_content_cover"
                    style={`background-image: url(https://storage.cem.su/racib/${Static.contentNew?.image})`}
                  ></div>
                ) : null}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
