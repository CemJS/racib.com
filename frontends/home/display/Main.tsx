import { Cemjsx, front, Static, Fn, Func, Ref } from "cemjs-all"
import arrNextDark from '@svg/icons/dark/next.svg'
import arrPrevDark from '@svg/icons/dark/prev.svg'
import arrNextLight from '@svg/icons/light/nextWhite.svg'
import arrPrevLight from '@svg/icons/light/prevWhite.svg'
import date from '@svg/icons/dark/date.svg'
import map from '@svg/icons/dark/mapPin.svg'
import arrowR from '@svg/icons/arrowR.svg'
import calendar from '@svg/icons/date.svg'
import players from '@json/allUsers'
import events from '@json/events'
import banner from '@images/banners/racibLetter.jpg'
import racib from '@svg/racib.svg'

let isDragging, isDragUsers = false;
let startX, xStartUsers, startScrollLeft, startScrollLeftUsers;
let x1, xUsers1 = null;
let y1, yUsers1 = null;

export default function () {
    return (
        <main
            class={["main", "pt_15", "home", front.Variable.openSidebar ? null : "main_close"]}>
            <div class="wrapper">
                <div class="home">
                    {/* <section class="home_link link_block">
              <a href="/">
                <img src={arrowR} class="link_block_icon" />
                <span>III ЕЖЕГОДНЫЙ САММИТ ПО КРИПТОВАЛЮТАМ И БЛОКЧЕЙН - ТЕХНОЛОГИЯМ</span>
              </a>
            </section> */}
                    <a class="home_banner" href="/appeal" onclick={Fn.link}>
                        <img src={banner} alt="" />
                        <span class="btn_link btn_link_dark">Ознакомиться</span>
                        <div class="home_banner_info">
                            {/* <span class="home_banner_info_date">
                                <img src={calendar} alt="Дата мероприятия" />
                                20 сентября 2023
                            </span> */}
                            {/*<h5 class="home_banner_info_title">РАКИБ выступил с обращением к Президенту РФ В. В. Путину...</h5>
                            <span class="btn_link">Ознакомиться</span>
                            <p class="home_banner_info_desc">Национальный форум</p> */}
                        </div>
                    </a>

                    <section class="home_events slider">
                        <div class="slider_header">
                            <div>
                                <h2>События</h2>
                                <p>Анонсы мероприятий</p>
                            </div>
                            <a href="/events" onclick={Fn.link} class="btn_link home_events_link">Все мероприятия</a>
                        </div>

                        <div class="carousel_wrap">
                            {/* <div
                                class="carousel_hover carousel_hover_l"
                                onmouseenter={() => {
                                    this.Ref.eventsSlider.scrollLeft -= 20;
                                }}
                                onmouseleave={() => {
                                    this.Ref.eventsSlider.scrollLeft += 20;
                                }}
                            >
                                <button
                                    class="arrow arrow_fillDark arrow_prev"
                                    onclick={() => {
                                        this.Ref.eventsSlider.scrollLeft -= this.Ref.eventsSlide.offsetWidth + 15;
                                    }}
                                >
                                    <img src={arrPrevLight} alt="Prev Slide" />
                                </button>
                            </div> */}
                            <div
                                class="carousel pY_20"
                                ref="eventsSlider"
                                onmousedown={(e) => {
                                    isDragging = true;
                                    startX = e.pageX;
                                    startScrollLeft = Ref.eventsSlider.scrollLeft;
                                }}

                                onmousemove={(e) => {
                                    if (!isDragging) return;
                                    e.preventDefault();
                                    Ref.eventsSlider.scrollLeft = startScrollLeft - (e.pageX - startX);
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
                                            Ref.eventsSlider.scrollLeft -= Ref.eventsSlide.offsetWidth + 15;
                                        }
                                        else {
                                            Ref.eventsSlider.scrollLeft += Ref.eventsSlide.offsetWidth + 15;
                                        }
                                    }
                                    x1 = null;
                                    y1 = null;
                                }}
                            >
                                {
                                    Static.events?.map((item: any) => {
                                        return (
                                            <div
                                                class="card"
                                                ref="eventsSlide"
                                                onclick={() => {
                                                    Fn.linkChange(`/events/show/${item.id}`)
                                                }}
                                            >
                                                <span class="card_category">{item.category}</span>
                                                <div class="card_img" style={`background-image: url(/assets/upload/racib/${item?.cover})`}>
                                                    <div class="card_logo">
                                                        <img src={racib} alt="Логотип" />
                                                    </div>
                                                </div>
                                                <div class="card_info">
                                                    <h5 class="card_info_title">{item.title}</h5>
                                                    <span class="card_info_date">
                                                        <img src={date} alt="Дата проведения мероприятия" />
                                                        {item.date}
                                                    </span>
                                                    <span class="card_info_location">
                                                        <img src={map} alt="Место проведения мероприятия" />
                                                        {item.location}
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </section>

                    {/* slider without arrors */}

                    {/* <section class="home_membership">
              <div class="home_membership_item">
                <span>О РАКИБ</span>
              </div>
              <div class="home_membership_item">
                <span>Как вступить?</span>
              </div>
              <div class="home_membership_item">
                <span>Как продлить?</span>
              </div>
              <div class="home_membership_item">
                <span>Как проверить ?</span>
              </div>
            </section> */}

                    {/* slider with arrow start */}
                    <section class="home_users slider">
                        <div class="slider_header">
                            <div>
                                <h2>Участники</h2>
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
                                <a href="/players" onclick={Fn.link} class="btn_link home_events_link">Все участники</a>
                            </div>
                        </div>

                        <div
                            class="carousel"
                            ref="playerCarousel"
                            onmousedown={(e) => {
                                isDragUsers = true;
                                xStartUsers = e.pageX;
                                startScrollLeftUsers = Ref.playerCarousel.scrollLeft;
                            }}
                            onmousemove={(e) => {
                                if (!isDragUsers) return;
                                e.preventDefault();
                                Ref.playerCarousel.scrollLeft = startScrollLeftUsers - (e.pageX - xStartUsers);
                            }}
                            onmouseup={() => {
                                isDragUsers = false;
                            }}
                            ontouchstart={(e) => {
                                const firstTouch = e.touches[0];
                                xUsers1 = firstTouch.clientX;
                                yUsers1 = firstTouch.clientY;
                            }}
                            ontouchmove={(e) => {
                                if (!xUsers1 || !yUsers1) return false;
                                let xUsers2 = e.touches[0].clientX;
                                let yUsers2 = e.touches[0].clientY;
                                let xDiffUsers = xUsers2 - xUsers1;
                                let yDiffUsers = yUsers2 - yUsers1;
                                if (Math.abs(xDiffUsers) > Math.abs(yDiffUsers)) {
                                    if (xDiffUsers > 0) {
                                        Ref.playerCarousel.scrollLeft -= Ref.playerSlide.offsetWidth + 15;
                                    } else {
                                        Ref.playerCarousel.scrollLeft += Ref.playerSlide.offsetWidth + 15;
                                    }
                                }
                                xUsers1 = null;
                                yUsers1 = null;
                            }}>
                            {
                                Static.players?.map((item: any, index: any) => {
                                    return (
                                        <div
                                            class="carousel_person"
                                            ref="playerSlide"
                                            onclick={() => {
                                                Fn.linkChange(`/players/show/${item?.name}`)
                                            }}>
                                            <div class="carousel_person_circle">
                                                <div
                                                    class="carousel_person_img"
                                                    style={`background-image: url(/assets/upload/racib/${item?.img})`}
                                                ></div>
                                            </div>
                                            <span class="carousel_person_status">{item?.status}</span>
                                            <h5 class="carousel_person_name">{item?.name}</h5>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                </div>
            </div>
        </main >
    )
}