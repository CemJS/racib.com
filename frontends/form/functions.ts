export const validPhone = function (phone: string) {
  if (!this.Static.regPhone.test(phone)) {
    this.Ref.statusPhone.style.color = "#CF0000";
    this.Ref.statusPhone.innerText = "Неправильно введён номер телефона!"
  } else {
    this.Ref.statusPhone.style.color = "#5FAC09";
    this.Ref.statusPhone.innerText = "Номер телефона введён корректно!"
  }
}

export const validEmail = function (email: string) {
  if (!this.Static.regEmail.test(email)) {
    this.Ref.statusEmail.style.color = "#CF0000";
    this.Ref.statusEmail.innerText = "Неправильно введён email!"
  } else {
    this.Ref.statusEmail.style.color = "#5FAC09";
    this.Ref.statusEmail.innerText = "Email введён корректно!"
  }
}

export const validText = function (text: string, message: HTMLElement) {
  if (!this.Static.regLetters.test(text)) {
    message.style.color = "#CF0000"
    message.innerText = "Некорректно введены данные!"
  } else {
    message.style.color = "#5FAC09"
    message.innerText = "Данные введены корректно!"
  }
}



