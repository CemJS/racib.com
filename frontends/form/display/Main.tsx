import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'


export default function () {
    return (
        <div class="wrapper">
            <a class="back" href="/" onclick={this.Fn.link}>
                <span class="back-icon">
                    <img src={back} />
                </span>
                <span class="back_title">Как вступить?</span>
            </a>

            <section class="form block_default">
                <h1 class="join_title form_titleMain">Вступление в члены РАКИБ</h1>
                <p class="form_subtitle">Прошу Вас принять меня в члены/участники «Ассоциации разработчиков и
                    пользователей технологии Блокчейн и продуктов, созданных на ее основе, в интересах
                    развития цифровой экономики» (РАКИБ). </p>

                <h3 class="join_title form_title">ФИО</h3>
                <div class="form_block">
                    <div class="input">
                        <span></span>
                        <input
                            class="input_field"
                            type="text"
                            autocomplete="off"
                            id="lastName"
                            ref="lastNameInput"
                            onchange={() => {
                                if (this.Ref.lastNameInput.value.length > 0) {
                                    this.Ref.lastNameLabel.classList.add('input_label_valid');
                                }
                                if (this.Ref.lastNameInput.value.length === 0) {
                                    this.Ref.lastNameLabel.classList.remove('input_label_valid');
                                }
                            }}
                        />
                        <label class="input_label" for="lastName" ref="lastNameLabel">Фамилия</label>
                    </div>
                    <div class="input">
                        <span></span>
                        <input
                            class="input_field"
                            type="text"
                            autocomplete="off"
                            id="firstName"
                            ref="firstNameInput"
                            onchange={() => {
                                if (this.Ref.firstNameInput.value.length > 0) {
                                    this.Ref.firstNameLabel.classList.add('input_label_valid');
                                }
                                if (this.Ref.firstNameInput.value.length === 0) {
                                    this.Ref.firstNameLabel.classList.remove('input_label_valid');
                                }
                            }}
                        />
                        <label class="input_label" for="firstName" ref="firstNameLabel">Имя</label>
                    </div>
                    <div class="input">
                        <span></span>
                        <input
                            class="input_field"
                            type="text"
                            autocomplete="off"
                            id="middleName"
                            ref="middleNameInput"
                            onchange={() => {
                                if (this.Ref.middleNameInput.value.length > 0) {
                                    this.Ref.middleNameLabel.classList.add('input_label_valid');
                                }
                                if (this.Ref.middleNameInput.value.length === 0) {
                                    this.Ref.middleNameLabel.classList.remove('input_label_valid');
                                }
                            }}
                        />
                        <label class="input_label" for="middleName" ref="middleNameLabel">Отчество</label>
                    </div>
                    {/* <div>
                        <div class="input">
                            <span></span>
                            <input class="input_field" type="text" autocomplete="off" id="firstName" />
                            <label class="input_label" for="firstName">Паспорт серия</label>
                        </div>
                        <div class="input">
                            <span></span>
                            <input class="input_field" type="text" autocomplete="off" id="firstName" />
                            <label class="input_label" for="firstName">Номер</label>
                        </div>
                    </div> */}
                </div>
            </section>


        </div>
    )
}