import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"
import events from '@json/events'

front.listener.clickAny = function (e) {
    if (Ref.filterContent && !Ref.filterContent.contains(e.target) && !Ref.filterBtn.contains(e.target) && Static.filterShow) {
        Ref.filterContent.classList.remove('filterNew_content_active');
        Static.filterShow = false;
        Fn.init();
    }
    return
}

front.func.getDayCalendar = function (date: any) {
    let day = date.getDay();
    if (day == 0) day = 7
    return day - 1
}


front.func.createCalendar = function (elem: HTMLElement, year: any, month: any) {

    let d = new Date(year, month);

    let calendar = `
    <div class=${Static.classCalendar}>
      <div class=${Static.classWeekDay}>
        <div class=${Static.classWeekDayItem}>пн</div>
        <div class=${Static.classWeekDayItem}>вт</div>
        <div class=${Static.classWeekDayItem}>ср</div>
        <div class=${Static.classWeekDayItem}>чт</div>
        <div class=${Static.classWeekDayItem}>пт</div>
        <div class=${Static.classWeekDayItem}>сб</div>
        <div class=${Static.classWeekDayItem}>вс</div>
      </div>
      <div class=${Static.classCalendarDays}>
    `;

    // пустые ячейки начало
    for (let i = 0; i < Func.getDayCalendar(d); i++) {
        calendar += `<div class=${Static.classCalendarDaysItem}></div>`;
    }

    // проверка на то, что мы в текущем месяце
    while (d.getMonth() == month) {
        calendar += `<div class=${Static.classCalendarDaysItem}>${d.getDate()}</div>`;

        // проверка на то, что последний день воскресенье
        if (Func.getDayCalendar(d) % 7 == 6) {
            calendar += `</div><div class=${Static.classCalendarDays}>`
        }
        d.setDate(d.getDate() + 1)
    }


    // пустые ячейки конец
    if (Func.getDayCalendar(d) != 0) {
        for (let i = Func.getDayCalendar(d); i < 7; i++) {
            calendar += `<div class=${Static.classCalendarDaysItem}></div>`;
        }
    }

    calendar += `</div></div>`

    elem.innerHTML = calendar;
}

front.loader = () => {
    if (front.Variable.DataUrl[2]) {
        let tmpEvents = events.filter(item => item.id == front.Variable.DataUrl[2])
        if (tmpEvents.length != 0) {
            Static.record = tmpEvents[0]
        } else {
            Static.record = events[0]
        }
    }
    Static.categoryStatus = 'close';

    Static.filterShow = false;
    Static.calendarStart = false;
    Static.calendarEnd = false;


    // classes for calendar
    // this.Static.classCalendar = 'calendarTest_wrap';
    Static.classWeekDay = 'calendar_weekDay';
    Static.classWeekDayItem = 'calendar_weekDay_item';
    Static.classCalendarDays = 'calendar_days';
    Static.classCalendarDaysItem = 'calendar_days_item'


    Static.currentDate = new Date();

    Static.monthList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return
}

front.display = () => {
    return (
        <div class="main_wrap">
            <Navigation />
        </div>
    )
}

export { front }