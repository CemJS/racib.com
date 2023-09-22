export const validPhone = function (phone: string) {
  if (!this.Static.regPhone.test(phone)) {
    this.Ref.statusPhone.style.color = "#CF0000";
    this.Ref.statusPhone.innerText = "Неправильно введён номер телефона!"
  } else {
    this.Ref.statusPhone.style.color = "#5FAC09";
    this.Ref.statusPhone.innerText = "Номер телефона введён корректно!"
  }
}

// export const validText = function(text: string){
//   if(!this.Static){
//     console.log('=59688a=', 'Correct')
//   }else{
//     console.log('=1860d3=', 'Incorrect')
//   }
// }



