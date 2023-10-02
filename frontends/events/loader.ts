import events from '@json/events'

export const loader = function () {

  if (this.Variable.DataUrl[2]) {
    let tmpEvents = events.filter(item => item.id == this.Variable.DataUrl[2])
    if (tmpEvents.length != 0) {
      this.Static.record = tmpEvents[0]
    } else {
      this.Static.record = events[0]
    }
  }
  this.Static.categoryStatus = 'close';

  this.Static.filterShow = false;
  this.Static.calendarStart = false;
  this.Static.calendarEnd = false;


  // classes for calendar
  // this.Static.classCalendar = 'calendarTest_wrap';
  this.Static.classWeekDay = 'calendar_weekDay';
  this.Static.classWeekDayItem = 'calendar_weekDay_item';
  this.Static.classCalendarDays = 'calendar_days';
  this.Static.classCalendarDaysItem = 'calendar_days_item'


  this.Static.currentDate = new Date();

  this.Static.monthList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

}