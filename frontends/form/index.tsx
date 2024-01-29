import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"
import done from '@svg/icons/color/done.svg'
import cancel from '@svg/icons/color/cancel.svg'

front.listener.finish = () => {
    Static.formMessages = document.querySelectorAll('.form_message')
    return
}

front.func.test = () => {
    return
}

front.func.validPhone = function (phone: string) {
    if (!Static.regPhone.test(phone)) {
        Ref.statusPhone.style.color = "#CF0000";
        Ref.statusPhone.innerText = "Неправильно введён номер телефона!"
        return false
    } else {
        Ref.statusPhone.style.color = "#5FAC09";
        Ref.statusPhone.innerText = "Номер телефона введён корректно!"
        return true
    }
}

front.func.validEmail = function (email: string) {
    if (!Static.regEmail.test(email)) {
        Ref.statusEmail.style.color = "#CF0000";
        Ref.statusEmail.innerText = "Неправильно введён email!"
        return false
    } else {
        Ref.statusEmail.style.color = "#5FAC09";
        Ref.statusEmail.innerText = "Email введён корректно!"
        return true
    }
}

front.func.validText = function (text: string, message: HTMLElement) {
    if (!Static.regLetters.test(text)) {
        message.style.color = "#CF0000"
        message.innerText = "Некорректно введены данные!"
        return false
    } else {
        message.style.color = "#5FAC09"
        message.innerText = "Данные введены корректно!"
        return true
    }
}

front.func.validForm = function (result: any) {
    Ref.buttonPreloader.classList.add('preloader-floating-circles')

    if (Static.company) {
        // юридическое лицо
        if (!Static.lastName) {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: 'Корректно заполните поле "Фамилия"',
                    img: Static.cancel,
                    className: 'modal_message_cancel'
                })
                Ref.buttonPreloader.classList.remove('preloader-floating-circles')
            }, 2000)
            return
        }

        if (!Static.firstName) {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: 'Корректно заполните поле "Имя"',
                    img: Static.cancel,
                    className: 'modal_message_cancel'
                })

                Ref.buttonPreloader.classList.remove('preloader-floating-circles')
            }, 2000)
            return
        }

        if (!Static.middleName) {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: 'Корректно заполните поле "Отчество"',
                    img: Static.cancel,
                    className: 'modal_message_cancel'
                })

                Ref.buttonPreloader.classList.remove('preloader-floating-circles')
            }, 2000)
            return
        }

        if (!Static.phone && !Func.validPhone(Static.phone)) {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: 'Корректно заполните поле "Номер телефона"',
                    img: Static.cancel,
                    className: 'modal_message_cancel'
                })

                Ref.buttonPreloader.classList.remove('preloader-floating-circles')
            }, 2000)
            return
        }

        if (!Static.email && !Func.validEmail(Static.email)) {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: 'Корректно заполните поле "Адрес электронной почты"',
                    img: Static.cancel,
                    className: 'modal_message_cancel'
                })


                Ref.buttonPreloader.classList.remove('preloader-floating-circles')
            }, 2000)
            return
        }

        if (!Static.companyName) {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: 'Корректно заполните поле "Название компании"',
                    img: Static.cancel,
                    className: 'modal_message_cancel'
                })

                Ref.buttonPreloader.classList.remove('preloader-floating-circles')
            }, 2000)
            return
        }

        if (!Static.companyPost) {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: 'Корректно заполните поле "Должность в компании"',
                    img: Static.cancel,
                    className: 'modal_message_cancel'
                })

                Ref.buttonPreloader.classList.remove('preloader-floating-circles')
            }, 2000)
            return
        }

        console.log('=07aec4=', result.result)

        if (result.result == 'ok') {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: "Успешно отправленно!",
                    img: Static.done,
                    className: 'modal_message_done'
                })



                Ref.buttonPreloader.classList.remove('preloader-floating-circles')
                Static.company = false
                Static.lastName = ''
                Ref.lastNameInput.value = ''
                Static.firstName = ''
                Ref.firstNameInput.value = ''
                Static.middleName = ''
                Ref.middleNameInput.value = ''
                Static.phone = ''
                Ref.phoneInput.value = ''
                Static.email = ''
                Ref.emailInput.value = ''
                Static.companyName = ''
                Ref.companyNameInput.value = ''
                Static.companyPost = ''
                Ref.companyPostInput.value = ''

                Array.from(Static.formMessages).map((item: any) => {
                    item.innerText = ''
                })

                Static.formStatus = true
                Fn.init()
            }, 2000)
        } else {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: result.Message,
                    img: Static.cancel,
                    className: 'modal_message_cancel'
                })

                Ref.buttonPreloader.classList.remove('preloader-floating-circles')

            }, 2000)
        }

    } else {
        // физическое лицо
        if (!Static.lastName) {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: 'Корректно заполните поле "Фамилия"',
                    img: Static.cancel,
                    className: 'modal_message_cancel'
                })


                Ref.buttonPreloader.classList.remove('preloader-floating-circles')
            }, 2000)
            return
        }

        if (!Static.firstName) {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: 'Корректно заполните поле "Имя"',
                    img: Static.cancel,
                    className: 'modal_message_cancel'
                })

                Ref.buttonPreloader.classList.remove('preloader-floating-circles')
            }, 2000)
            return
        }

        if (!Static.middleName) {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: 'Корректно заполните поле "Отчество"',
                    img: Static.cancel,
                    className: 'modal_message_cancel'
                })

                Ref.buttonPreloader.classList.remove('preloader-floating-circles')
            }, 2000)
            return
        }

        if (!Static.phone && !Func.validPhone(Static.phone)) {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: 'Корректно заполните поле "Номер телефона"',
                    img: Static.cancel,
                    className: 'modal_message_cancel'
                })

                Ref.buttonPreloader.classList.remove('preloader-floating-circles')
            }, 2000)
            return
        }


        if (!Static.email && !Func.validEmail(Static.email)) {


            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: 'Корректно заполните поле "Адрес электронной почты"',
                    img: Static.cancel,
                    className: 'modal_message_cancel'
                })
                Ref.buttonPreloader.classList.remove('preloader-floating-circles')
            }, 2000)
            return
        }

        if (result.Status == 'ok') {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: result.Message,
                    img: Static.done,
                    className: 'modal_message_done'
                })


                Ref.buttonPreloader.classList.remove('preloader-floating-circles')
                Static.company = false
                Static.lastName = ''
                Ref.lastNameInput.value = ''
                Static.firstName = ''
                Ref.firstNameInput.value = ''
                Static.middleName = ''
                Ref.middleNameInput.value = ''
                Static.phone = ''
                Ref.phoneInput.value = ''
                Static.email = ''
                Ref.emailInput.value = ''

                Array.from(Static.formMessages).map((item: any) => {
                    item.innerText = ''
                })

                Static.formStatus = true
                Fn.init()
            }, 2000)
        } else {
            setTimeout(() => {
                Fn.initOne("modalSuccess", {
                    message: result.Message,
                    img: Static.cancel,
                    className: 'modal_message_cancel'
                })


                Ref.buttonPreloader.classList.remove('preloader-floating-circles')

            }, 2000)
        }
    }

    // init()
}



front.loader = () => {
    Static.company = false;
    Static.lastName;
    Static.firstName;
    Static.middleName;
    Static.phone;
    Static.email;
    Static.companyName;
    Static.companyPost;

    Static.regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    Static.regEmail = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$/
    Static.regLetters = /^([ёЁ\sA-zА-я -]*)$/i

    Static.done = done;
    Static.cancel = cancel;

    Static.formStatus = false;
    return
}

front.display = () => {
    return (
        <main class={["main", front.Variable.openSidebar ? null : "main_close"]}>
            <Navigation />
        </main>
    )
}

export { front }