import { Cemjsx } from "cemjs-all"
import arrNextDark from '@svg/icons/dark/next.svg'
import arrPrevDark from '@svg/icons/dark/prev.svg'
import goal from '@svg/icons/book.svg'
import back from '@svg/icons/back.svg'
import next from '@svg/icons/light/nextWhite.svg'

import admins from '@json/administration'

let isDragging = false;
let startX, startScrollLeft;
let x1 = null;
let y1 = null;

const RenderPerson = function ({ items }) {
    return (
        <div class="carousel_wrap">
            <div
                class="carousel"
                ref="ruleCarousel"
                onmousedown={(e) => {
                    isDragging = true;
                    startX = e.pageX;
                    startScrollLeft = this.Ref.ruleCarousel.scrollLeft;
                }}
                onmousemove={(e) => {
                    if (!isDragging) return;
                    e.preventDefault();
                    this.Ref.ruleCarousel.scrollLeft = startScrollLeft - (e.pageX - startX)
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
                            this.Ref.ruleCarousel.scrollLeft -= this.Ref.ruleSlide.offsetWidth + 15;
                        } else {
                            this.Ref.ruleCarousel.scrollLeft += this.Ref.ruleSlide.offsetWidth + 15;
                        }
                    }
                    x1 = null;
                    y1 = null;
                }}>
                {
                    items.map((item, index) => {
                        return (
                            <div class="carousel_person" ref="ruleSlide">
                                <a href={`/players/administration/${index}`} onclick={this.Fn.link} class="carousel_person_circle">
                                    <div
                                        class="carousel_person_img"
                                        style={`background-image: url(${item.img})`}
                                    ></div>
                                </a>
                                <span class="carousel_person_status">{item.status}</span>
                                <h5 class="carousel_person_name">{item.name}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default function () {
    return (
        <main class={["main", this.Variable.openSidebar ? null : "main_close"]}>
            <div class="wrapper">
                <a class="back" href="/" onclick={this.Fn.link}>
                    <span class="back-icon">
                        <img src={back} />
                    </span>
                    <span class="back_title">Главная</span>
                </a>
                <section class="block_default">
                    <h2 class="general_title">
                        <span>РОССИЙСКАЯ АССОЦИАЦИЯ КРИПТОЭКОНОМИКИ,</span>
                        <span>ИСКУССТВЕННОГО ИНТЕЛЛЕКТА И БЛОКЧЕЙНА</span>
                    </h2>
                    <div class="link_block">
                        <a href="/mission" onclick={this.Services.functions.clickSoon}>
                            <img src={goal} class="link_block_icon" />
                            <span>Миссия РАКИБ. Главные цели деятельности РАКИБ.</span>
                        </a>
                    </div>
                </section>
                <section class="block_default">
                    <h3 class="block_default_title">Правление РАКИБ</h3>
                    <p class="block_default_desc">Исполнительными органами управления РАКИБ являются: президент (единоличный исполнительный орган), исполнительный директор и правление. Правление Ассоциации является совещательным органом при президенте Ассоциации и состоит из вице-президентов, а также иных лиц, назначенных президентом.</p>
                </section>
                <section class="about_rule slider">
                    <div class="slider_header">
                        <h2 class="block_default_title mb_0">Руководство РАКИБ</h2>
                        <div class="home_news_nav">
                            <button
                                class="arrow arrow_dark"
                                onclick={() => {
                                    this.Ref.ruleCarousel.scrollLeft -= this.Ref.ruleSlide.offsetWidth + 20;
                                }}
                            >
                                <img src={arrPrevDark} />
                            </button>
                            <button
                                class="arrow arrow_dark"
                                onclick={() => {
                                    this.Ref.ruleCarousel.scrollLeft += this.Ref.ruleSlide.offsetWidth + 20;
                                }}
                            >
                                <img src={arrNextDark} />
                            </button>
                        </div>
                    </div>
                    <RenderPerson items={admins} />
                </section>
                <div class="link_block">
                    <a href="/players" onclick={this.Fn.link}>
                        <img src={next} />
                        <span>Перейти на страницу</span>
                    </a>
                </div>
            </div>
        </main>
    )
}