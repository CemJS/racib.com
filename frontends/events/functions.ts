//функция для конвертации дня недели
export const getDayCalendar = function (date: any) {
    let day = date.getDay();
    if (day == 0) day = 7
    return day - 1
}

export const createCalendar = function (elem: HTMLElement, year: any, month: any) {

    let d = new Date(year, month);

    let calendar = `
    <div class=${this.Static.classCalendar}>
      <div class=${this.Static.classWeekDay}>
        <div class=${this.Static.classWeekDayItem}>пн</div>
        <div class=${this.Static.classWeekDayItem}>вт</div>
        <div class=${this.Static.classWeekDayItem}>ср</div>
        <div class=${this.Static.classWeekDayItem}>чт</div>
        <div class=${this.Static.classWeekDayItem}>пт</div>
        <div class=${this.Static.classWeekDayItem}>сб</div>
        <div class=${this.Static.classWeekDayItem}>вс</div>
      </div>
      <div class=${this.Static.classCalendarDays}>
    `;

    // пустые ячейки начало
    for (let i = 0; i < getDayCalendar(d); i++) {
        calendar += `<div class=${this.Static.classCalendarDaysItem}></div>`;
    }

    // проверка на то, что мы в текущем месяце
    while (d.getMonth() == month) {
        calendar += `<div class=${this.Static.classCalendarDaysItem}>${d.getDate()}</div>`;

        // проверка на то, что последний день воскресенье
        if (getDayCalendar(d) % 7 == 6) {
            calendar += `</div><div class=${this.Static.classCalendarDays}>`
        }
        d.setDate(d.getDate() + 1)
    }


    // пустые ячейки конец
    if (getDayCalendar(d) != 0) {
        for (let i = getDayCalendar(d); i < 7; i++) {
            calendar += `<div class=${this.Static.classCalendarDaysItem}></div>`;
        }
    }

    calendar += `</div></div>`

    elem.innerHTML = calendar;
}
