import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"
import done from '@svg/icons/color/done.svg'
import cancel from '@svg/icons/color/cancel.svg'

front.listener.finish = () => {
    Static.formMessages = document.querySelectorAll('.form_message')
    return
}

front.func.checkForm = async function () {
    if (!Static.company) {
        if (Static.form.firstName.valid && Static.form.lastName.valid &&
            Static.form.middleName.valid && Static.form.phone.valid && Static.form.email.valid) {
            // request
            Static.form.isValid = true

        } else {
            Static.form.isValid = false
        }
    } else {
        if (Static.form.firstName.valid && Static.form.lastName.valid &&
            Static.form.middleName.valid && Static.form.phone.valid && Static.form.email.valid &&
            Static.form.companyName.valid && Static.form.position.valid) {

            Static.form.isValid = true

        } else {
            Static.form.isValid = false
        }
    }

    return
}

front.loader = () => {
    Static.company = false;
    Static.formStatus = false;

    Static.form = {
        firstName: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Имя",
            view: false,
            disable: false
        },
        lastName: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Фамилия",
            view: false,
            disable: false
        },
        middleName: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Отчество",
            view: false,
            disable: false
        },
        phone: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Телефон",
            view: false,
            disable: false
        },
        email: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Email",
            view: false,
            disable: false
        },
        companyName: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Название",
            view: false,
            disable: false
        },
        position: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Должность",
            view: false,
            disable: false
        },
        isValid: false,
    }

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