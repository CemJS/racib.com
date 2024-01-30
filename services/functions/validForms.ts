import {
  validEmail,
  validName,
  validPhone
} from './validate'

interface Form {
  value: string,
  valid: boolean,
  error: boolean | string,
  placeholder: string,
  view: boolean,
  disable: boolean
}


export const formName = function (form: Form) {
  if (!form.value.length) {
    form.error = false
    form.valid = false
    return false
  }
  let check = validName(form.value)
  if (check) {
    form.error = false
    form.valid = true
    return true
  } else {
    form.error = "Некорректно введены данные!"
    form.valid = false
    return false
  }
}

export const formEmail = function (form: Form) {
  if (!form.value.length) {
    form.error = false
    form.valid = false
    return false
  }
  let check = validEmail(form.value)
  if (check) {
    form.error = false
    form.valid = true
    return true
  } else {
    form.error = "Неверный e-mail"
    form.valid = false
    return false
  }
}

export const formPhone = function (form: Form) {
  if (!form.value.length) {
    form.error = false
    form.valid = false
    return false
  }
  let check = validPhone(form.value)
  if (check) {
    form.error = false
    form.valid = true
    return true
  } else {
    form.error = "Неверно введён номер телефона!"
    form.valid = false
    return false
  }
}