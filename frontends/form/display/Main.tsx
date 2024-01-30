import { Cemjsx, Static, front, Fn, Func, Ref } from "cemjs-all"
import back from '@svg/icons/back.svg'
import done from '@svg/icons/color/done.svg'
import cancel from '@svg/icons/color/cancel.svg'


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
                                        <input
                                            class="input_field"
                                            type="text"
                                            autocomplete="off"
                                            ref="lastNameInput"
                                            oninput={(e) => {
                                                Static.form.lastName.value = e.currentTarget.value
                                                front.Services.functions.formName(Static.form.lastName)
                                                Func.checkForm()
                                            }}
                                        />
                                        <label
                                            class={[
                                                "input_label",
                                                Static.form.lastName.value.length ? "input_label_valid" : null
                                            ]}
                                            for="lastName"
                                            ref="lastNameLabel">
                                            {Static.form.lastName.placeholder}
                                            <span class="input_label_star">*</span>
                                        </label>
                                    </div>
                                    {/* Выводит ошибку здесь! */}
                                    <span class="form_message form_message-error">{Static.form.lastName?.error}</span>
                                </div>
                                <div>
                                    <div class="input">
                                        <input
                                            class="input_field"
                                            type="text"
                                            autocomplete="off"
                                            id="firstName"
                                            ref="firstNameInput"
                                            oninput={(e) => {
                                                Static.form.firstName.value = e.currentTarget.value
                                                front.Services.functions.formName(Static.form.firstName)
                                            }}
                                        />
                                        <label
                                            class={[
                                                "input_label",
                                                Static.form.firstName.value.length ? "input_label_valid" : null
                                            ]}
                                            for="firstName"
                                            ref="firstNameLabel">
                                            {Static.form.firstName.placeholder}
                                            <span class="input_label_star">*</span>
                                        </label>
                                    </div>
                                    <span class="form_message form_message-error">{Static.form.firstName?.error}</span>
                                </div>
                                <div>
                                    <div class="input">
                                        <input
                                            class="input_field"
                                            ref="middleNameInput"
                                            type="text"
                                            autocomplete="off"
                                            oninput={(e) => {
                                                Static.form.middleName.value = e.currentTarget.value
                                                front.Services.functions.formName(Static.form.middleName)
                                                Func.checkForm()
                                            }}
                                        />
                                        <label
                                            class={[
                                                "input_label",
                                                Static.form.middleName.value.length ? "input_label_valid" : null
                                            ]}
                                            for="middleName"
                                            ref="middleNameLabel">
                                            {Static.form.middleName.placeholder}
                                            <span class="input_label_star">*</span>
                                        </label>
                                    </div>
                                    <span class="form_message form_message-error">{Static.form.middleName?.error}</span>
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
                                            ref="phoneInput"
                                            autocomplete="off"
                                            oninput={(e) => {
                                                Static.form.phone.value = e.currentTarget.value
                                                front.Services.functions.formPhone(Static.form.phone)
                                                Func.checkForm()
                                            }}
                                        />
                                        <label
                                            class={[
                                                "input_label",
                                                Static.form.phone.value.length ? "input_label_valid" : null
                                            ]}
                                            for="phone"
                                            ref="phoneLabel">
                                            {Static.form.phone.placeholder}
                                            <span class="input_label_star">*</span>
                                        </label>
                                    </div>
                                    {/* Вывод ошибки здесь! */}
                                    <span class="form_message form_message-error">{Static.form.phone?.error}</span>
                                </div>

                                <div>
                                    <div class="input">
                                        <input
                                            class="input_field"
                                            type="email"
                                            name="email"
                                            ref="emailInput"
                                            autocomplete="off"
                                            oninput={(e) => {
                                                Static.form.email.value = e.currentTarget.value
                                                front.Services.functions.formEmail(Static.form.email)
                                                Func.checkForm()
                                            }}
                                        />
                                        <label
                                            class={[
                                                "input_label",
                                                Static.form.email.value.length ? "input_label_valid" : null
                                            ]}
                                            for="email"
                                            ref="emailLabel"
                                        >
                                            {Static.form.email.placeholder}
                                            <span class="input_label_star">*</span>
                                        </label>
                                    </div>
                                    {/* вывод ошибки здесь! */}
                                    <span class="form_message form_message-error">{Static.form.email?.error}</span>
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
                                                        ref="companyNameInput"
                                                        autocomplete="off"
                                                        oninput={(e) => {
                                                            Static.form.companyName.value = e.currentTarget.value
                                                            front.Services.functions.formName(Static.form.companyName)
                                                            Func.checkForm()
                                                        }}
                                                    />
                                                    <label
                                                        class={[
                                                            "input_label",
                                                            Static.form.companyName.value.length ? "input_label_valid" : null
                                                        ]}
                                                        for="companyName"
                                                        ref="companyNameLabel"
                                                    >
                                                        {Static.form.companyName.placeholder}
                                                        <span class="input_label_star">*</span>
                                                    </label>
                                                </div>
                                                {/* вывод ошибки здесь! */}
                                                <span class="form_message form_message-error">{Static.form.companyName?.error}</span>
                                            </div>
                                            <div>
                                                <div class="input">
                                                    <input
                                                        class="input_field"
                                                        type="text"
                                                        ref="companyPositionInput"
                                                        autocomplete="off"
                                                        oninput={(e) => {
                                                            Static.form.position.value = e.currentTarget.value
                                                            front.Services.functions.formName(Static.form.position)
                                                            Func.checkForm()
                                                        }}
                                                    />
                                                    <label
                                                        class={[
                                                            "input_label",
                                                            Static.form.position.value.length ? "input_label_valid" : null
                                                        ]}
                                                        for="companyPost"
                                                        ref="companyPostLabel"
                                                    >
                                                        {Static.form.position.placeholder}
                                                        <span class="input_label_star">*</span>
                                                    </label>
                                                </div>
                                                {/* вывод ошибки здесь! */}
                                                <span class="form_message form_message-error">{Static.form.position?.error}</span>
                                            </div>

                                        </div>
                                    </div> : null
                            }

                        </section>

                        <div class={["form_btn", !Static.form.isValid ? "form_btn-passive" : null]}>
                            <button
                                class="btn_link btn_link_dark"
                                type="submit"
                                onclick={async () => {
                                    if (!Static.form.isValid) return
                                    Ref.buttonPreloader.classList.add('preloader-floating-circles')

                                    let data: object = {
                                        action: "contactForm",
                                        contactForm: {
                                            type: Static.company ? "Юридическое лицо" : "Физическое лицо",
                                            lastName: Static.form.lastName.value,
                                            firstName: Static.form.firstName.value,
                                            middleName: Static.form.middleName.value,
                                            phone: Static.form.phone.value,
                                            email: Static.form.email.value,
                                            companyName: Static.form.companyName.value,
                                            position: Static.form.position.value
                                        }
                                    }

                                    let answer = await front.Services.functions.sendApiDefault("/api/tg/racib", data)

                                    if (answer.error) {
                                        setTimeout(() => {
                                            Fn.initOne("modalSuccess", {
                                                message: "Ошибка!",
                                                img: cancel,
                                                className: 'modal_message_cancel'
                                            })

                                            Ref.buttonPreloader.classList.remove('preloader-floating-circles')

                                        }, 2000)
                                    }

                                    setTimeout(() => {
                                        Fn.initOne("modalSuccess", {
                                            message: "Успешно отправленно!",
                                            img: done,
                                            className: 'modal_message_done'
                                        })

                                        Ref.buttonPreloader.classList.remove('preloader-floating-circles')

                                        Static.company = false
                                        Static.formStatus = true
                                        Static.form.lastName.value = ''
                                        Ref.lastNameInput.value = ''
                                        Static.form.firstName.value = ''
                                        Ref.firstNameInput.value = ''
                                        Static.form.middleName.value = ''
                                        Ref.middleNameInput.value = ''
                                        Static.form.phone.value = ''
                                        Ref.phoneInput.value = ''
                                        Static.email = ''
                                        Static.form.email.value = ''
                                        Ref.emailInput.value = ''
                                        Static.form.companyName.value = ''
                                        Ref.companyNameInput.value = ''
                                        Static.form.position.value = ''
                                        Ref.companyPositionInput.value = ''

                                        Array.from(Static.formMessages).map((item: any) => {
                                            item.innerText = ''
                                        })

                                    }, 2000)
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