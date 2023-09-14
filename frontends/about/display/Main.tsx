import { Cemjsx } from "cemjs-all"
import pencil from '@svg/icons/pencil.svg'
import smi from '@images/banners/public.jpg'
import education from '@images/banners/education.png'
import facts from "@json/aboutFacts"

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