export const validPhone = function (phone: string) {
  if (!this.Static.regPhone.test(phone)) {
    this.Ref.statusPhone.style.color = "#CF0000";
    this.Ref.statusPhone.innerText = "Неправильно введён номер телефона!"
    return false
  } else {
    this.Ref.statusPhone.style.color = "#5FAC09";
    this.Ref.statusPhone.innerText = "Номер телефона введён корректно!"
    return true
  }
}

export const validEmail = function (email: string) {
  if (!this.Static.regEmail.test(email)) {
    this.Ref.statusEmail.style.color = "#CF0000";
    this.Ref.statusEmail.innerText = "Неправильно введён email!"
    return false
  } else {
    this.Ref.statusEmail.style.color = "#5FAC09";
    this.Ref.statusEmail.innerText = "Email введён корректно!"
    return true
  }
}

export const validText = function (text: string, message: HTMLElement) {
  if (!this.Static.regLetters.test(text)) {
    message.style.color = "#CF0000"
    message.innerText = "Некорректно введены данные!"
    return false
  } else {
    message.style.color = "#5FAC09"
    message.innerText = "Данные введены корректно!"
    return true
  }
}

export const validForm = function (result: any) {
  this.Ref.buttonPreloader.classList.add('preloader-floating-circles')

  if (this.Static.company) {
    // юридическое лицо
    if (!this.Static.lastName) {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: 'Корректно заполните поле "Фамилия"',
            img: this.Static.cancel,
            className: 'modal_message_cancel'
          }
        })
        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')
      }, 2000)
      return
    }

    if (!this.Static.firstName) {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: 'Корректно заполните поле "Имя"',
            img: this.Static.cancel,
            className: 'modal_message_cancel'
          }
        })
        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')
      }, 2000)
      return
    }

    if (!this.Static.middleName) {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: 'Корректно заполните поле "Отчество"',
            img: this.Static.cancel,
            className: 'modal_message_cancel'
          }
        })
        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')
      }, 2000)
      return
    }

    if (!this.Static.phone && !validPhone(this.Static.phone)) {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: 'Корректно заполните поле "Номер телефона"',
            img: this.Static.cancel,
            className: 'modal_message_cancel'
          }
        })
        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')
      }, 2000)
      return
    }

    if (!this.Static.email && !validEmail(this.Static.email)) {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: 'Корректно заполните поле "Адрес электронной почты"',
            img: this.Static.cancel,
            className: 'modal_message_cancel'
          }
        })
        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')
      }, 2000)
      return
    }

    if (!this.Static.companyName) {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: 'Корректно заполните поле "Название компании"',
            img: this.Static.cancel,
            className: 'modal_message_cancel'
          }
        })
        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')
      }, 2000)
      return
    }

    if (!this.Static.companyPost) {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: 'Корректно заполните поле "Должность в компании"',
            img: this.Static.cancel,
            className: 'modal_message_cancel'
          }
        })
        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')
      }, 2000)
      return
    }

    if (result.Status == 'ok') {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: result.Message,
            img: this.Static.done,
            className: 'modal_message_done'
          }
        })

        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')
        this.Static.company = false
        this.Static.lastName = ''
        this.Ref.lastNameInput.value = ''
        this.Static.firstName = ''
        this.Ref.firstNameInput.value = ''
        this.Static.middleName = ''
        this.Ref.middleNameInput.value = ''
        this.Static.phone = ''
        this.Ref.phoneInput.value = ''
        this.Static.email = ''
        this.Ref.emailInput.value = ''
        this.Static.companyName = ''
        this.Ref.companyNameInput.value = ''
        this.Static.companyPost = ''
        this.Ref.companyPostInput.value = ''

        Array.from(this.Static.formMessages).map((item: any) => {
          item.innerText = ''
        })

        this.Static.formStatus = true
        this.init()
      }, 2000)
    } else {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: result.Message,
            img: this.Static.cancel,
            className: 'modal_message_cancel'
          }
        })
        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')

      }, 2000)
    }

  } else {
    // физическое лицо
    if (!this.Static.lastName) {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: 'Корректно заполните поле "Фамилия"',
            img: this.Static.cancel,
            className: 'modal_message_cancel'
          }
        })
        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')
      }, 2000)
      return
    }

    if (!this.Static.firstName) {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: 'Корректно заполните поле "Имя"',
            img: this.Static.cancel,
            className: 'modal_message_cancel'
          }
        })
        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')
      }, 2000)
      return
    }

    if (!this.Static.middleName) {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: 'Корректно заполните поле "Отчество"',
            img: this.Static.cancel,
            className: 'modal_message_cancel'
          }
        })
        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')
      }, 2000)
      return
    }

    if (!this.Static.phone && !validPhone(this.Static.phone)) {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: 'Корректно заполните поле "Номер телефона"',
            img: this.Static.cancel,
            className: 'modal_message_cancel'
          }
        })
        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')
      }, 2000)
      return
    }


    if (!this.Static.email && !validEmail(this.Static.email)) {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: 'Корректно заполните поле "Адрес электронной почты"',
            img: this.Static.cancel,
            className: 'modal_message_cancel'
          }
        })
        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')
      }, 2000)
      return
    }

    if (result.Status == 'ok') {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: result.Message,
            img: this.Static.done,
            className: 'modal_message_done'
          }
        })

        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')
        this.Static.company = false
        this.Static.lastName = ''
        this.Ref.lastNameInput.value = ''
        this.Static.firstName = ''
        this.Ref.firstNameInput.value = ''
        this.Static.middleName = ''
        this.Ref.middleNameInput.value = ''
        this.Static.phone = ''
        this.Ref.phoneInput.value = ''
        this.Static.email = ''
        this.Ref.emailInput.value = ''

        Array.from(this.Static.formMessages).map((item: any) => {
          item.innerText = ''
        })

        this.Static.formStatus = true
        this.init()
      }, 2000)
    } else {
      setTimeout(() => {
        this.Fn.initOne({
          name: "modalSuccess",
          data: {
            message: result.Message,
            img: this.Static.cancel,
            className: 'modal_message_cancel'
          }
        })
        this.Ref.buttonPreloader.classList.remove('preloader-floating-circles')

      }, 2000)
    }
  }

  // this.init()
}

