import { Cemjsx, front, Fn, Ref } from "cemjs-all"
import back from '@svg/icons/back.svg'
import appeal1 from '@images/appeal/appealPresedent1.jpg'
import appeal2 from '@images/appeal/appealPresedent2.jpg'

export default function () {
    return (
        <div class="wrapper">
            <a class="back" href="/" onclick={Fn.link}>
                <span class="back-icon">
                    <img src={back} />
                </span>
                <span class="back_title">Главная</span>
            </a>



            <div class="form_appeal_wrap">
                <p class="form_appeal">На форуме Российской энергетической недели 2023 (РЭН-2023), сессия «Майнинг криптовалют с точки зрения энергетиков. Регулирование или свобода действий?» Заместитель министра энергетики Российской Федерации Сниккарс Павел Николаевич позволил себе публичную клевету в адрес нашей ассоциации и ее руководства – « Была такая ассоциация РАКИБ, по моему сейчас половина руководства ассоциации в уголовном федеральном розыске и вне Российской Федерации...» (видео выступления  представлено на данном ресурсе, 35 минута записи <a href="https://www.youtube.com/watch?v=ItgW8A78Sjk" class="link pl_5" target="_blank">https://www.youtube.com/watch?v=ItgW8A78Sjk</a> )
                    Члены РАКИБ и сообщество рассматривают это как клевету, совершенную с использованием своего служебного положения (п.2 и п.3 ст.128.1 УК РФ).
                </p>

            </div>

            <div class="appeal_btn">
                <a class="btn_link btn_link_dark" href="/contents/docs/letterEnergo.pdf" target="_blank">
                    Скачать документ полностью
                </a>
            </div>


            {/* Обращение к Путину */}
            {/* <section class="appeal">
                <div class="appeal_item"
                    onclick={() => {
                        this.Fn.initOne({
                            name: "modalGallery", data: { img: appeal1 }
                        })
                    }}
                >
                    <img src={appeal1} alt="Обращение к Президенту РФ стр.1" />
                </div>
                <div class="appeal_item"
                    onclick={() => {
                        this.Fn.initOne({
                            name: "modalGallery", data: { img: appeal2 }
                        })
                    }}
                >
                    <img src={appeal2} alt="Обращение к Президенту РФ стр.2" />
                </div>
            </section>

            <div class="appeal_btn">
                <a class="btn_link btn_link_dark" href="/contents/docs/proposalRacib.docx">
                    Скачать документ «Предложение РАКИБ»
                </a>
            </div> */}
        </div>
    )
}