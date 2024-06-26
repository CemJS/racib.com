import { Cemjsx, Static, front, Fn, Func, Ref } from "cemjs-all";
import back from "@svg/icons/back.svg";
import notFound from "@svg/list.svg";
import views from "@svg/icons/dark/views.svg";

let answer: any = [];
let status: boolean = true;

export default function () {
  const lastRequestTimestamp = Date.now();
  function debounce(func: any, delay: number) {
    let timeoutId: any;
    return function (...args: any) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  }
  // if (!Static.news) {
  //   return (
  //     <div>123</div>
  //   )
  // }
  let value: any = "";
  return (
    <div class="main_wrap">
      <main class={["main", front.Variable.openSidebar ? null : "main_close"]}>
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
                <span class="filter_item_title">Поиск</span>
                <input
                  type="text"
                  class="filter_input"
                  placeholder="Поиск"
                  oninput={debounce(async (e: any) => {
                    value = e.target.value.toLocaleLowerCase();
                    if (value.length == 0 || value.length >= 2) {
                      answer = await front.Services.functions.sendApi(
                        "/racib/NewsAboutUs",
                        {
                          action: "GetAll",
                          active: status,
                          search: value,
                        }
                      );
                      Static.news = answer?.result;
                    }
                  }, 400)}
                />
              </div>
            </div>

            <div class="news_list">
              {Static.news?.length ? (
                Static.news?.map((item: any, key: number) => {
                  return (
                    <div
                      class="newCard"
                      style={item?.descShort ? "" : "height: 75%"}
                      ref="newsSlide"
                      onclick={async () => {
                        const getNew = {
                          action: "Get",
                          id: item?.id,
                        };
                        let newContent = await front.Services.functions.sendApi(
                          "/racib/NewsAboutUs",
                          getNew
                        );
                        //проверка на error
                        Static.contentNew = newContent?.result;
                        Fn.linkChange(`/theywriteaboutus/show/${item?.id}`);
                      }}
                      init={($el: any) => {
                        if (key == Static.news?.length - 1) {
                          const observer = new IntersectionObserver(
                            (entries) => {
                              entries.forEach(async (entry) => {
                                if (entry.isIntersecting) {
                                  observer.unobserve($el);
                                  answer =
                                    await front.Services.functions.sendApi(
                                      "/racib/NewsAboutUs",
                                      {
                                        action: "GetAll",
                                        skip: Static.news?.length,
                                        active: status,
                                        search: value,
                                      }
                                    );
                                  Static.news = Static.news?.concat(
                                    answer?.result
                                  );
                                }
                              });
                            }
                          );
                          observer.observe($el);
                        }
                      }}
                    >
                      <div
                        class="newCard_img"
                        style={item?.img ?
                          `background-image: url(https://storage.cem.su/racib/${item?.img})` :
                          `background-image: url(https://storage.cem.su/racib/0004d9d6c7f30a3eb2f0196c3e99b7cd.jpeg)`}
                      >
                        {item?.category && (
                          <span class="newCard_category">{item?.category}</span>
                        )}
                      </div>
                      <div class="newCard_info">
                        <h5 class="newCard_title">{item?.title}</h5>
                        <p class="newCard_desc">{item?.descShort}</p>
                        <div class="newCard_details">
                          {item?.date_event ? (
                            <span class="newCard_details_date">
                              {item?.date_event}
                            </span>
                          ) : null}
                          {item?.views ? (
                            <span class="newCard_details_views">
                              {item?.views}
                              <img src={views} />
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div class="notFound">
                  <span class="notFound_title">Записи не найдены</span>
                  <img
                    src={notFound}
                    alt="Записи не найдены"
                    class="notFound_img"
                  />
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
