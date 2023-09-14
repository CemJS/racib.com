export const daysInMonth = function (year, month) {
    let countDays = new Date(year, month, 0).getDate();
    this.Static.days = this.Static.daysFull.slice(0, countDays);
    this.init()
    return new Date(year, month, 0).getDate()
}


export const firstDayWeek = function (year, month) {
    let firstDayMonth = new Date(year, month, 1).getDay();

    let result;

    if (firstDayMonth == 0) {
        result = this.Static.weekDaysFull[this.Static.weekDaysFull.length - 1];
    }
    result = this.Static.weekDaysFull[firstDayMonth - 1];
    let start = this.Static.weekDaysFull.slice(0, firstDayMonth - 1);

    this.Static.weekDays = this.Static.weekDaysFull.slice(firstDayMonth - 1);


    this.Static.resultWeekDays = [...this.Static.weekDays, ...start]


    console.log('=result=', this.Static.resultWeekDays)

    // this.Static.days = this.Static.weekDaysFull.slice(firstDayMonth);
    this.init();
    return
}