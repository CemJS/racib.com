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

            <div class="form_appeal_wrap">
                <p class="form_appeal">Уважаемые господа, благодарим вас за интерес к вопросам криптоиндустрии и желание стать участником Ассоциации РАКИБ. Чтобы стать полноправным участником, пожалуйста, заполните приведенные ниже поля и отправьте нам для дальнейшего взаимодействия. В течение нескольких дней после получения вашей заявки с вами свяжется наш сотрудник для завершения процесса регистрации.</p>
            </div>

            <section class="form block_default">
                <h1 class="join_title form_titleMain">Вступление в члены РАКИБ</h1>
                <p class="form_subtitle">Прошу Вас принять меня в члены/участники «Ассоциации разработчиков и пользователей технологии Блокчейн и продуктов,  созданных на ее основе, в интересах развития цифровой экономики» (РАКИБ). </p>

                <div class="form_choose">
                    <div
                        class={["option", this.Static.company ? null : "option_active"]}
                        for="physical"
                        onclick={() => {
                            this.Static.company = false;
                            this.init()
                        }}
                    >
                        <div class="option_dot"></div>
                        <span>Физическое лицо</span>
                    </div>
                    <div
                        class={["option", this.Static.company ? "option_active" : null]}
                        for="legal"
                        onclick={() => {
                            this.Static.company = true;
                            this.init()
                        }}
                    >
                        <div class="option_dot"></div>
                        <span>Юридическое лицо</span>
                    </div>
                </div>

                <h3 class="join_title form_title">ФИО</h3>
                <div class="form_block">
                    <div>
                        <div class="input">
                            {/* {
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
                            } */}
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
                                    }
                                    if (this.Ref.lastNameInput.value.length === 0) {
                                        this.Ref.lastNameLabel.classList.remove('input_label_valid');
                                    }
                                }}
                                oninput={function () {
                                    this.Static.lastName = this.value;
                                    setTimeout(() => {
                                        this.fn(
                                            "validText",
                                            this.Ref.lastNameInput.value, this.Ref.statusLastName)
                                    }, 3000)
                                }}
                            />
                            <label class="input_label" for="lastName" ref="lastNameLabel">
                                Фамилия
                                <span class="input_label_star">*</span>
                            </label>
                        </div>
                        {/* Выводит ошибку здесь! */}
                        <span ref="statusLastName" class="form_message"></span>
                    </div>
                    <div>
                        <div class="input">
                            <input
                                class="input_field"
                                type="text"
                                autocomplete="off"
                                id="firstName"
                                ref="firstNameInput"
                                onchange={() => {
                                    if (this.Ref.firstNameInput.value.length > 0) {
                                        this.Ref.firstNameLabel.classList.add('input_label_valid');
                                        this.Static.firstName = this.Ref.firstNameInput.value
                                    }
                                    if (this.Ref.firstNameInput.value.length === 0) {
                                        this.Ref.firstNameLabel.classList.remove('input_label_valid');
                                    }
                                }}
                                oninput={() => {
                                    this.Static.firstName = this.Ref.firstNameInput.value;
                                    setTimeout(() => {
                                        this.fn(
                                            "validText",
                                            this.Ref.firstNameInput.value, this.Ref.statusFirstName)
                                    }, 3000)
                                }}
                            />
                            <label class="input_label" for="firstName" ref="firstNameLabel">
                                Имя
                                <span class="input_label_star">*</span>
                            </label>
                        </div>
                        <span ref="statusFirstName" class="form_message"></span>
                    </div>
                    <div>
                        <div class="input">
                            <input
                                class="input_field"
                                type="text"
                                autocomplete="off"
                                id="middleName"
                                ref="middleNameInput"
                                onchange={() => {
                                    if (this.Ref.middleNameInput.value.length > 0) {
                                        this.Ref.middleNameLabel.classList.add('input_label_valid');
                                        this.Static.middleName = this.Ref.middleNameInput.value
                                    }
                                    if (this.Ref.middleNameInput.value.length === 0) {
                                        this.Ref.middleNameLabel.classList.remove('input_label_valid');
                                    }
                                }}
                                oninput={() => {
                                    this.Static.middleName = this.Ref.middleNameInput.value
                                    setTimeout(() => {
                                        this.fn(
                                            "validText",
                                            this.Ref.middleNameInput.value, this.Ref.statusMiddleName)
                                    }, 3000)
                                }}
                            />
                            <label class="input_label" for="middleName" ref="middleNameLabel">
                                Отчество
                                <span class="input_label_star">*</span>
                            </label>
                        </div>
                        <span ref="statusMiddleName" class="form_message"></span>
                    </div>
                </div>

                <h3 class="join_title form_title">Контактные данные</h3>
                <div class="form_block">
                    <div>
                        <div class="input">
                            <input
                                class="input_field"
                                type="tel"
                                name="phone"
                                autocomplete="off"
                                id="phone"
                                ref="phoneInput"
                                onchange={() => {
                                    if (this.Ref.phoneInput.value.length > 0) {
                                        this.Ref.phoneLabel.classList.add('input_label_valid');
                                        this.Static.phone = this.Ref.phoneInput.value;
                                    }
                                    if (this.Ref.phoneInput.value.length === 0) {
                                        this.Ref.phoneLabel.classList.remove('input_label_valid');
                                    }
                                }}
                                oninput={function () {
                                    this.Static.phone = this.Ref.phoneInput.value;
                                    setTimeout(() => {
                                        this.fn("validPhone", this.Ref.phoneInput.value)
                                    }, 3000)
                                }}
                            />
                            <label class="input_label" for="phone" ref="phoneLabel">
                                Номер телефона
                                <span class="input_label_star">*</span>
                            </label>
                        </div>
                        {/* Вывод ошибки здесь! */}
                        <span ref="statusPhone" class="form_message"></span>
                    </div>

                    <div>
                        <div class="input">
                            <input
                                class="input_field"
                                type="email"
                                name="email"
                                autocomplete="off"
                                id="email"
                                ref="emailInput"
                                onchange={() => {
                                    if (this.Ref.emailInput.value.length > 0) {
                                        this.Ref.emailLabel.classList.add('input_label_valid');
                                        this.Static.email = this.Ref.emailInput.value;
                                    }
                                    if (this.Ref.emailInput.value.length === 0) {
                                        this.Ref.emailLabel.classList.remove('input_label_valid');
                                    }
                                }}
                                oninput={() => {
                                    this.Static.email = this.Ref.emailInput.value;
                                    setTimeout(() => {
                                        this.fn("validEmail", this.Ref.emailInput.value)
                                    }, 3000)
                                }}
                            />
                            <label class="input_label" for="email" ref="emailLabel">
                                Email
                                <span class="input_label_star">*</span>
                            </label>
                        </div>
                        {/* вывод ошибки здесь! */}
                        <span ref="statusEmail" class="form_message"></span>
                    </div>
                </div>

                {
                    this.Static.company ?
                        <div>
                            <h3 class="join_title form_title">Представляемая компания</h3>
                            <div class="form_block">
                                <div>
                                    <div class="input">
                                        <input
                                            class="input_field"
                                            type="text"
                                            autocomplete="off"
                                            id="companyName"
                                            ref="companyNameInput"
                                            onchange={() => {
                                                if (this.Ref.companyNameInput.value.length > 0) {
                                                    this.Ref.companyNameLabel.classList.add('input_label_valid');
                                                    this.Static.companyName = this.Ref.companyNameInput.value
                                                }
                                                if (this.Ref.companyNameInput.value.length === 0) {
                                                    this.Ref.companyNameLabel.classList.remove('input_label_valid');
                                                }
                                            }}
                                            oninput={() => {
                                                this.Static.companyName = this.Ref.companyNameInput.value;
                                                setTimeout(() => {
                                                    this.fn(
                                                        "validText",
                                                        this.Ref.companyNameInput.value,
                                                        this.Ref.statusCompanyName)
                                                }, 3000)
                                            }}
                                        />
                                        <label class="input_label" for="companyName" ref="companyNameLabel">
                                            Название
                                            <span class="input_label_star">*</span>
                                        </label>
                                    </div>
                                    {/* вывод ошибки здесь! */}
                                    <span ref="statusCompanyName" class="form_message"></span>
                                </div>
                                <div>
                                    <div class="input">
                                        <input
                                            class="input_field"
                                            type="text"
                                            autocomplete="off"
                                            id="companyPost"
                                            ref="companyPostInput"
                                            onchange={() => {
                                                if (this.Ref.companyPostInput.value.length > 0) {
                                                    this.Ref.companyPostLabel.classList.add('input_label_valid');
                                                    this.Static.companyPost = this.Ref.companyPostInput.value
                                                }
                                                if (this.Ref.companyPostInput.value.length === 0) {
                                                    this.Ref.companyPostLabel.classList.remove('input_label_valid');
                                                }
                                            }}
                                            oninput={() => {
                                                this.Static.companyPost = this.Ref.companyPostInput.value;
                                                setTimeout(() => {
                                                    this.fn(
                                                        "validText",
                                                        this.Ref.companyPostInput.value,
                                                        this.Ref.statusCompanyPost)
                                                }, 3000)
                                            }}
                                        />
                                        <label class="input_label" for="companyPost" ref="companyPostLabel">
                                            Должность
                                            <span class="input_label_star">*</span>
                                        </label>
                                    </div>
                                    {/* вывод ошибки здесь! */}
                                    <span ref="statusCompanyPost" class="form_message"></span>
                                </div>

                            </div>
                        </div> : null
                }


            </section>

            <div class="form_btn">

                <button
                    class="btn_link btn_link_dark"
                    type="submit"
                    onclick={async () => {
                        let formData;

                        if (this.Static.company) {
                            formData = {
                                company: this.Static.company,
                                lastName: this.Static.lastName,
                                firstName: this.Static.firstName,
                                middleName: this.Static.middleName,
                                phone: this.Static.phone,
                                email: this.Static.email,
                                nameCompany: this.Static.companyName,
                                postCompany: this.Static.companyPost
                            };
                        } else {
                            formData = {
                                company: this.Static.company,
                                lastName: this.Static.lastName,
                                firstName: this.Static.firstName,
                                middleName: this.Static.middleName,
                                phone: this.Static.phone,
                                email: this.Static.email
                            };
                        }

                        const response = await fetch("http://127.0.0.1/api", {
                            method: "POST",
                            body: JSON.stringify(formData)
                        });
                        if (!response.ok) {
                            throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
                        }
                        let result = await response.json()
                        console.log('=4b9098=', result)

                        this.fn("validForm", result)

                    }}
                >
                    <div ref="buttonPreloader">
                        <div class="f_circleG" id="frotateG_01"></div>
                        <div class="f_circleG" id="frotateG_02"></div>
                        <div class="f_circleG" id="frotateG_03"></div>
                        <div class="f_circleG" id="frotateG_04"></div>
                        <div class="f_circleG" id="frotateG_05"></div>
                        <div class="f_circleG" id="frotateG_06"></div>
                        <div class="f_circleG" id="frotateG_07"></div>
                        <div class="f_circleG" id="frotateG_08"></div>
                    </div>
                    Отправить заявку
                </button>

                {/* {
                    this.Static.company ?
                        <button
                            class="btn_link btn_link_dark"
                            type="submit"
                            onclick={async () => {
                                let formData = {
                                    company: this.Static.company,
                                    lastName: this.Static.lastName,
                                    firstName: this.Static.firstName,
                                    middleName: this.Static.middleName,
                                    phone: this.Static.phone,
                                    email: this.Static.email,
                                    nameCompany: this.Static.companyName,
                                    postCompany: this.Static.companyPost
                                };

                                const response = await fetch("http://127.0.0.1/api", {
                                    method: "POST",
                                    body: JSON.stringify(formData)
                                });
                                if (!response.ok) {
                                    throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
                                }
                                let result = await response.json()
                                console.log('=4b9098=', result)

                                this.fn("validForm", result)
                            }}
                        >
                            <div ref="buttonPreloader">
                                <div class="f_circleG" id="frotateG_01"></div>
                                <div class="f_circleG" id="frotateG_02"></div>
                                <div class="f_circleG" id="frotateG_03"></div>
                                <div class="f_circleG" id="frotateG_04"></div>
                                <div class="f_circleG" id="frotateG_05"></div>
                                <div class="f_circleG" id="frotateG_06"></div>
                                <div class="f_circleG" id="frotateG_07"></div>
                                <div class="f_circleG" id="frotateG_08"></div>
                            </div>
                            Отправить заявку
                        </button> :
                        <button
                            class="btn_link btn_link_dark"
                            type="submit"
                            onclick={async () => {
                                let formData = {
                                    company: this.Static.company,
                                    lastName: this.Static.lastName,
                                    firstName: this.Static.firstName,
                                    middleName: this.Static.middleName,
                                    phone: this.Static.phone,
                                    email: this.Static.email
                                };

                                const response = await fetch("http://127.0.0.1/api", {
                                    method: "POST",
                                    body: JSON.stringify(formData)
                                });
                                if (!response.ok) {
                                    throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
                                }
                                let result = await response.json()
                                console.log('=4b9098=', result)

                                this.fn("validForm", result)

                            }}
                        >
                            <div ref="buttonPreloader">
                                <div class="f_circleG" id="frotateG_01"></div>
                                <div class="f_circleG" id="frotateG_02"></div>
                                <div class="f_circleG" id="frotateG_03"></div>
                                <div class="f_circleG" id="frotateG_04"></div>
                                <div class="f_circleG" id="frotateG_05"></div>
                                <div class="f_circleG" id="frotateG_06"></div>
                                <div class="f_circleG" id="frotateG_07"></div>
                                <div class="f_circleG" id="frotateG_08"></div>
                            </div>
                            Отправить заявку
                        </button>
                } */}

            </div>


        </div>
    )
}