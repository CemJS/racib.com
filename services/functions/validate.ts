

export const validEmail = function (email: string) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
}

export const validName = function (name: string) {
  return String(name)
    .toLowerCase()
    .match(
      /^([ёЁ\sA-zА-я -]*)$/i
    );
}

export const validPhone = function (phone: string) {
  return String(phone)
    .toLowerCase()
    .match(
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
    );
}