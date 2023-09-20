import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'
import cancel from '@svg/icons/dark/cancel.svg'


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

                <div class="form_choose">
                    <div
                        class={["option",
                            this.Static.face == 'Физическое лицо' ? "option_active" : null]}
                        for="physical"
                        onclick={() => {
                            this.Static.face = 'Физическое лицо';
                            this.init()
                        }}
                    >
                        <div class="option_dot"></div>
                        <span>Физическое лицо</span>
                    </div>
                    <div
                        class={["option",
                            this.Static.face == 'Юридическое лицо' ? "option_active" : null]}
                        for="legal"
                        onclick={() => {
                            this.Static.face = 'Юридическое лицо';
                            this.init()
                        }}
                    >
                        <div class="option_dot"></div>
                        <span>Юридическое лицо</span>
                    </div>
                </div>

                <h3 class="join_title form_title">ФИО</h3>
                <div class="form_block">
                    <div class="input">
                        {
                            this.Static.lastName ?
                                <span
                                    class="input_icon"
                                    onclick={() => {
                                        this.Ref.lastNameInput.value = ''
                                        this.Ref.lastNameLabel.classList.remove('input_label_valid');
                                        this.init()
                                    }}
                                >
                                    <img src={cancel} alt="Очистить поле ввода" />
                                </span> : null
                        }
                        <input
                            class="input_field"
                            type="text"
                            autocomplete="off"
                            id="lastName"
                            ref="lastNameInput"
                            onchange={() => {
                                if (this.Ref.lastNameInput.value.length > 0) {
                                    this.Ref.lastNameLabel.classList.add('input_label_valid');
                                    this.Static.lastName = this.Ref.lastNameInput.value;
                                    console.log('=7cf451=', this.Ref.lastNameInput.value)
                                }
                                if (this.Ref.lastNameInput.value.length === 0) {
                                    this.Ref.lastNameLabel.classList.remove('input_label_valid');
                                }

                                this.init();
                            }}
                            oninput={() => {
                                this.Static.lastName = this.Ref.lastNameInput.value;
                                console.log('=7cf451=', this.Ref.lastNameInput.value)
                                this.init();
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