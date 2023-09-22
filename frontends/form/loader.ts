export const loader = function () {
  this.Static.company = false;
  this.Static.lastName;
  this.Static.firstName;
  this.Static.middleName;
  this.Static.phone;
  this.Static.email;
  this.Static.companyName;
  this.Static.companyPost;

  this.Static.regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  this.Static.numbers = /[0-9]/;
  this.Static.letters = /[А-я]/
  // this.Static.letters = /[]/
}