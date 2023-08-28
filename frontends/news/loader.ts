export const loader = function () {
  this.Static.current = new Date();
  this.Static.currentMonth;
  this.Static.currentDate;
  this.Static.currentDay;
  this.Static.currentYear = this.Static.current.getFullYear();

  this.Static.monthList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июль', 'Июнь', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  this.Static.weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  this.Static.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  this.Static.daysOfMonth = [3]

  this.Static.monthList.forEach((item, index) => {
    if (index === this.Static.current.getMonth()) {
      return this.Static.currentMonth = item;
    }
  })

  this.Static.days.forEach((item, index) => {
    if (index === this.Static.current.getDate()) {
      return this.Static.currentDate = index;
    }
  })

  this.Static.weekDays.forEach((item, index) => {
    if (index === this.Static.current.getDay()) {
      return this.Static.currentDay = item;
    }
  })

}