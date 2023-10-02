export const loader = function () {
  // classes for calendar
  this.Static.classCalendar = 'calendarTest_wrap';
  this.Static.classWeekDay = 'calendar_weekDay';
  this.Static.classWeekDayItem = 'calendar_weekDay_item';
  this.Static.classCalendarDays = 'calendar_days';
  this.Static.classCalendarDaysItem = 'calendar_days_item'


  this.Static.currentDate = new Date();

  this.Static.monthList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

}