import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'
import appeal1 from '@images/appeal/appealPresedent1.jpg'
import appeal2 from '@images/appeal/appealPresedent2.jpg'

export default function () {
    return (
        <div class="wrapper">
            <a class="back" href="/" onclick={this.Fn.link}>
                <span class="back-icon">
                    <img src={back} />
                </span>
                <span class="back_title">Главная</span>
            </a>

            <section class="appeal">
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
            </div>
        </div>
    )
}