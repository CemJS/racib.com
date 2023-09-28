import done from '@svg/icons/color/done.svg'
import cancel from '@svg/icons/color/cancel.svg'

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
  this.Static.regEmail = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$/
  this.Static.regLetters = /^([ёЁ\sA-zА-я -]*)$/i

  this.Static.done = done;
  this.Static.cancel = cancel;

  this.Static.formStatus = false;
}