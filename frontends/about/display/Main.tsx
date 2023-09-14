import { Cemjsx } from "cemjs-all"
import pencil from '@svg/icons/pencil.svg'
import smi from '@images/banners/public.jpg'
import education from '@images/banners/education.png'
import arrNextDark from '@svg/icons/dark/next.svg'
import arrPrevDark from '@svg/icons/dark/prev.svg'
import goal from '@svg/icons/book.svg'
import back from '@svg/icons/back.svg'
import next from '@svg/icons/light/nextWhite.svg'

import admins from '@json/administration'
import directorate from '@json/directorate'
import observers from '@json/observers'
import experts from '@json/experts'
import facts from "@json/aboutFacts"


const RenderPerson = function ({ items, name, title }) {
    return (
        <section class="about_rule slider">
            <div class="slider_header">
                <h2 class="block_default_title mb_0">{title}</h2>
                <div class="home_news_nav">
                    <button
                        class="arrow arrow_dark"
                        onclick={() => {
                            this.Static.carousel[name].prev()
                        }}
                    >
                        <img src={arrPrevDark} />
                    </button>
                    <button
                        class="arrow arrow_dark"
                        onclick={() => {
                            this.Static.carousel[name].next()
                        }}
                    >
                        <img src={arrNextDark} />
                    </button>
                </div>
            </div>
            <div class="carousel_wrap">
                <div
                    class="carousel"
                    init={($el) => {
                        this.Static.carousel[name].init($el)
                    }}
                    onmousedown={(e) => {
                        this.Static.carousel[name].onmousedown(e)
                    }}
                    onmousemove={(e) => {
                        this.Static.carousel[name].onmousemove(e)
                    }}
                    onmouseup={() => {
                        this.Static.carousel[name].onmouseup()
                    }}
                    ontouchstart={(e) => {
                        this.Static.carousel[name].ontouchstart(e)
                    }}
                    ontouchmove={(e) => {
                        this.Static.carousel[name].ontouchmove(e)

                    }}>
                    {
                        items.map((item, index) => {
                            return (
                                <div class="carousel_person">
                                    <a href={`/players/show/${item.name}`} onclick={this.Fn.link} class="carousel_person_circle">
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
        </section>
    )
}

const RenderFacts = function ({ items }) {
    return (
        <ul class="list">
            {
                items.map(item => {
                    return (
                        <li class="list_item">{item.text}</li>
                    )
                })
            }
        </ul>
    )
}

export default function () {
    return (
        <main class={["main", "pt_10", this.Variable.openSidebar ? null : "main_close"]}>

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

                <RenderPerson items={admins} name="admin" title="Руководство РАКИБ" />

                <div class="link_block">
                    <a href="/players" onclick={this.Fn.link}>
                        <img src={next} />
                        <span>Перейти на страницу</span>
                    </a>
                </div>

                <div class="about">
                    <RenderPerson items={directorate} name="directorate" title="Дирекция РАКИБ" />
                    <div class="link_block">
                        <a href="/players" onclick={this.Fn.link}>
                            <img src={next} />
                            <span>Перейти на страницу</span>
                        </a>
                    </div>
                </div>

                <div class="about">
                    <RenderPerson items={observers} name="observers" title="Наблюдательный совет РАКИБ" />
                    <div class="link_block">
                        <a href="/players" onclick={this.Fn.link}>
                            <img src={next} />
                            <span>Перейти на страницу</span>
                        </a>
                    </div>
                </div>

                <div class="about">
                    <RenderPerson items={observers} name="observers" title="Экспертный совет РАКИБ" />
                    <div class="link_block">
                        <a href="/players" onclick={this.Fn.link}>
                            <img src={next} />
                            <span>Перейти на страницу</span>
                        </a>
                    </div>
                </div>

                <div class="about">
                    <section class="about_fact">
                        <h2 class="block_default_title">Факты о РАКИБ</h2>
                        <RenderFacts items={facts} />
                    </section>
                    <section class="about_public block_default">
                        <h5 class="block_default_title">Публикации в СМИ</h5>
                        <div class="about_public_img">
                            <img src={smi} alt="Публикации в СМИ РАКИБ" />
                        </div>
                        <div class="link_block">
                            <a href="/"
                                onclick={this.Services.functions.clickSoon}>
                                <img class="link_block_icon" src={pencil} alt="О нас пишут РАКИБ" />
                                <span>О нас пишут</span>
                            </a>
                        </div>
                    </section>

                    <section class="about_edu block_default">
                        <h5 class="block_default_title">Образование</h5>
                        <div class="about_public_img">
                            <img src={education} alt="Публикации в СМИ РАКИБ" />
                        </div>
                        <div class="about_edu_info">
                            <p class="pb_15">РАКИБ регулярно взаимодействует с ведущими учебными заведениями России на предмет участия в образовательных программах, относящихся к сфере IT и цифровых технологий.</p>
                            <p class="pb_15">В частности, в настоящий момент РАКИБ предлагает всем заинтересованным аудиториям пройти обучение по следующим программам:</p>
                            <ul class="about_fact_list">
                                <li class="about_fact_list_item">Программа повышения квалификации РЭУ имени Г.В. Плеханова «Цифровая экономика и цифровые технологии для государственных и муниципальных служащих».
                                    <a
                                        href="/"
                                        onclick={this.Services.functions.clickSoon}
                                        class="link pl_5
                     ">Ссылка на сайт программы.</a>
                                </li>
                                <li class="about_fact_list_item">Программа дополнительного образования BCL «Правовые основы и юридические практики работы с криптовалютой и блокчейн-проектами».
                                    <a href="/" onclick={this.Services.functions.clickSoon} class="link pl_5">Ссылка на сайт программы.</a>
                                </li>
                                <li class="about_fact_list_item">РАКИБ предоставляет возможность участия в данных образовательных программах с индивидуальной скидкой при условии обращения по адресу: petrov@racib.com либо в личных сообщения на странице в
                                    <a href="/" onclick={this.Services.functions.clickSoon} class="link pl_5">Facebook</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}