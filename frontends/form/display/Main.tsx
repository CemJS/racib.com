import { Cemjsx, Static, front, Fn, Func, Ref } from "cemjs-all"
import back from '@svg/icons/back.svg'


export default function () {
    return (
        <div class="wrapper">
            <a class="back" href="/" onclick={Fn.link}>
                <span class="back-icon">
                    <img src={back} />
                </span>
                <span class="back_title">Как вступить?</span>
            </a>

            <div class="form_appeal_wrap">
                <p class="form_appeal">Уважаемые господа, благодарим вас за интерес к вопросам криптоиндустрии и желание стать участником Ассоциации РАКИБ. Чтобы стать полноправным участником, пожалуйста, заполните приведенные ниже поля и отправьте нам для дальнейшего взаимодействия. В течение нескольких дней после получения вашей заявки с вами свяжется наш сотрудник для завершения процесса регистрации.</p>
            </div>

            {
                !Static.formStatus ?
                    <div>
                        <section class="form block_default">
                            <h1 class="join_title form_titleMain">Вступление в члены РАКИБ</h1>
                            <p class="form_subtitle">Прошу Вас принять меня в члены/участники «Ассоциации разработчиков и пользователей технологии Блокчейн и продуктов,  созданных на ее основе, в интересах развития цифровой экономики» (РАКИБ). </p>

                            <div class="form_choose">
                                <div
                                    class={["option", Static.company ? null : "option_active"]}
                                    for="physical"
                                    onclick={() => {
                                        Static.company = false;
                                        Fn.init()
                                    }}
                                >
                                    <div class="option_dot"></div>
                                    <span>Физическое лицо</span>
                                </div>
                                <div
                                    class={["option", Static.company ? "option_active" : null]}
                                    for="legal"
                                    onclick={() => {
                                        Static.company = true;
                                        Fn.init()
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
                                        Static.lastName ?
                                            <span
                                                class="input_icon"
                                                onclick={() => {
                                                    Ref.lastNameInput.value = ''
                                                    Ref.lastNameLabel.classList.remove('input_label_valid');
                                                    Fn.init()
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
                                                if (Ref.lastNameInput.value.length > 0) {
                                                    Ref.lastNameLabel.classList.add('input_label_valid');
                                                    Static.lastName = Ref.lastNameInput.value;
                                                }
                                                if (Ref.lastNameInput.value.length === 0) {
                                                    Ref.lastNameLabel.classList.remove('input_label_valid');
                                                }
                                            }}
                                            oninput={function () {
                                                Static.lastName = this.value;
                                                setTimeout(() => {
                                                    Func.validText(Ref.lastNameInput.value, Ref.statusLastName)

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
                                                if (Ref.firstNameInput.value.length > 0) {
                                                    Ref.firstNameLabel.classList.add('input_label_valid');
                                                    Static.firstName = Ref.firstNameInput.value
                                                }
                                                if (Ref.firstNameInput.value.length === 0) {
                                                    Ref.firstNameLabel.classList.remove('input_label_valid');
                                                }
                                            }}
                                            oninput={() => {
                                                Static.firstName = Ref.firstNameInput.value;
                                                setTimeout(() => {
                                                    Func.validText(Ref.firstNameInput.value, Ref.statusFirstName)

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
                                                if (Ref.middleNameInput.value.length > 0) {
                                                    Ref.middleNameLabel.classList.add('input_label_valid');
                                                    Static.middleName = Ref.middleNameInput.value
                                                }
                                                if (Ref.middleNameInput.value.length === 0) {
                                                    Ref.middleNameLabel.classList.remove('input_label_valid');
                                                }
                                            }}
                                            oninput={() => {
                                                Static.middleName = Ref.middleNameInput.value
                                                setTimeout(() => {
                                                    Func.validText(Ref.middleNameInput.value, Ref.statusMiddleName)

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
                                                if (Ref.phoneInput.value.length > 0) {
                                                    Ref.phoneLabel.classList.add('input_label_valid');
                                                    Static.phone = Ref.phoneInput.value;
                                                }
                                                if (Ref.phoneInput.value.length === 0) {
                                                    Ref.phoneLabel.classList.remove('input_label_valid');
                                                }
                                            }}
                                            oninput={function () {
                                                Static.phone = Ref.phoneInput.value;
                                                setTimeout(() => {
                                                    Func.validPhone(Ref.phoneInput.value)
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
                                                if (Ref.emailInput.value.length > 0) {
                                                    Ref.emailLabel.classList.add('input_label_valid');
                                                    Static.email = Ref.emailInput.value;
                                                }
                                                if (Ref.emailInput.value.length === 0) {
                                                    Ref.emailLabel.classList.remove('input_label_valid');
                                                }
                                            }}
                                            oninput={() => {
                                                Static.email = Ref.emailInput.value;
                                                setTimeout(() => {
                                                    Func.validEmail(Ref.emailInput.value)
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
                                Static.company ?
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
                                                            if (Ref.companyNameInput.value.length > 0) {
                                                                Ref.companyNameLabel.classList.add('input_label_valid');
                                                                Static.companyName = Ref.companyNameInput.value
                                                            }
                                                            if (Ref.companyNameInput.value.length === 0) {
                                                                Ref.companyNameLabel.classList.remove('input_label_valid');
                                                            }
                                                        }}
                                                        oninput={() => {
                                                            Static.companyName = Ref.companyNameInput.value;
                                                            setTimeout(() => {
                                                                Func.validText(Ref.companyNameInput.value, Ref.statusCompanyName)

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
                                                            if (Ref.companyPostInput.value.length > 0) {
                                                                Ref.companyPostLabel.classList.add('input_label_valid');
                                                                Static.companyPost = Ref.companyPostInput.value
                                                            }
                                                            if (Ref.companyPostInput.value.length === 0) {
                                                                Ref.companyPostLabel.classList.remove('input_label_valid');
                                                            }
                                                        }}
                                                        oninput={() => {
                                                            Static.companyPost = Ref.companyPostInput.value;
                                                            setTimeout(() => {
                                                                Func.validText(Ref.companyPostInput.value, Ref.statusCompanyPost)
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
                                    // let formData: object;

                                    // if (Static.company) {
                                    //     formData = {
                                    //         action: "contactForm",
                                    //         contactForm: {
                                    //             type: Static.company,
                                    //             lastName: Static.lastName,
                                    //             firstName: Static.firstName,
                                    //             middleName: Static.middleName,
                                    //             phone: Static.phone,
                                    //             email: Static.email,
                                    //             companyName: Static.companyName,
                                    //             position: Static.companyPost
                                    //         }
                                    //     };
                                    // } else {
                                    //     formData = {
                                    //         action: "contactForm",
                                    //         contactForm: {
                                    //             type: Static.company,
                                    //             lastName: Static.lastName,
                                    //             firstName: Static.firstName,
                                    //             middleName: Static.middleName,
                                    //             phone: Static.phone,
                                    //             email: Static.email,
                                    //             companyName: "",
                                    //             position: ""
                                    //         }
                                    //     };
                                    // }

                                    // const response = await fetch("/api/tg/racib", {
                                    //     method: "POST",
                                    //     body: JSON.stringify(formData)
                                    // });
                                    // if (!response.ok) {
                                    //     throw new Error(`Ошибка по адресу , статус ошибки ${response.status}`);
                                    // }
                                    // let result = await response.json()
                                    // Func.validForm(result)

                                    let data = {
                                        action: "contactForm",
                                        contactForm: {
                                            type: Static.company ? "Юридическое лицо" : "Физическое лицо",
                                            lastName: Static.lastName,
                                            firstName: Static.firstName,
                                            middleName: Static.middleName,
                                            phone: Static.phone,
                                            email: Static.email,
                                            companyName: Static?.companyName,
                                            position: Static?.companyPost
                                        }
                                    }

                                    let answer = await front.Services.functions.sendApiDefault("/api/tg/racib", data)

                                    console.log('=19190d=', answer)

                                    // if (!answer.ok) {
                                    //     setTimeout(() => {
                                    //         Fn.initOne("modalSuccess", {
                                    //             message: "Ошибка!",
                                    //             img: Static.cancel,
                                    //             className: 'modal_message_cancel'
                                    //         })

                                    //         Ref.buttonPreloader.classList.remove('preloader-floating-circles')

                                    //     }, 2000)


                                    // }

                                    Func.validForm(answer)

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
                        </div>
                    </div>
                    :
                    <section class="form_success block_default">
                        <h3 class="join_title form_title">Ваша зявка отправлена!</h3>
                        <div class="form_success_wrap">
                            <p class="form_success_text">Вам придёт письмо от представителя организации на указанную почту!</p>
                            <p class="form_success_text">Спасибо!</p>
                        </div>
                    </section>
            }



        </div>
    )
}