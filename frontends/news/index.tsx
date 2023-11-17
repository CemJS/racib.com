import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"
import news from '@json/news'


front.listener.clickAny = function (e) {
    if (Ref.filterCategoryv && !Ref.filterCategory.contains(e.target) && Static.categoryStatus == 'open') {
        Static.categoryStatus = 'close';
        Ref.filterCategory.classList.remove('filter_item_active');
    }

    // if (!this.Ref.filterCategory.contains(e.target) && this.Ref.filterCalendar.contains(e.target) && Static.categoryStatus == 'open') {
    //     Static.categoryStatus = 'close';
    //     this.Ref.filterCategory.classList.remove('filter_item_active');
    // } else if (!this.Ref.filterCategory.contains(e.target) && !this.Ref.filterCalendar.contains(e.target) && Static.categoryStatus == 'open') {
    //     Static.categoryStatus = 'close';
    //     this.Ref.filterCategory.classList.remove('filter_item_active');
    // }

    // if (!this.Ref.filterCalendar.contains(e.target) && this.Ref.filterCategory.contains(e.target) && Static.calendarStatus == 'open') {
    //     Static.calendarStatus = 'close';
    //     this.Ref.calendarNews.classList.remove('filter_date_active');
    // } else if (!this.Ref.filterCalendar.contains(e.target) && !this.Ref.filterCategory.contains(e.target) && Static.calendarStatus == 'open') {
    //     Static.calendarStatus = 'close';
    //     this.Ref.calendarNews.classList.remove('filter_date_active');
    // }
    return
}

front.func.test = () => {
    return
}

front.func.isLeapYear = function (year) {
    return (
        (year % 4 == 0 && year % 100 != 0 && year % 400 != 0) ||
        (year % 100 == 0 && year % 400 == 0)
    );
}

front.func.getFebDay = function (year) {
    if (Func.isLeapYear(year)) {
        console.log(29);
    } else {
        console.log(28);
    }

    return Func.isLeapYear(year) ? 29 : 28;
}


front.func.getRecords = async function () {
    // console.log('=d2f90b=', 5555)
    // let answer = await this.Services.functions.sendApi("/api/News", {})
    // console.log('=74d989=', answer)
}

front.loader = () => {
    if (front.Variable.DataUrl[2]) {
        let tmpNews = news.filter(item => item.id == front.Variable.DataUrl[2])
        if (tmpNews.length != 0) {
            Static.record = tmpNews[0]
        } else {
            Static.record = news[0]
        }
    }

    // status for dropdown
    Static.categoryStatus = 'close';
    Static.calendarStatus = 'close';

    // choose category
    Static.chooseCategory = '';

    Static.current = new Date();
    Static.currentMonth;
    Static.currentDate;
    Static.currentDay;
    Static.currentYear = Static.current.getFullYear();

    Static.monthList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июль', 'Июнь', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    Static.weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    Static.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    Static.daysOfMonth = [3]

    Static.monthList.forEach((item, index) => {
        if (index === Static.current.getMonth()) {
            return Static.currentMonth = item;
        }
    })

    Static.days.forEach((item, index) => {
        if (index === Static.current.getDate()) {
            return Static.currentDate = index;
        }
    })

    Static.weekDays.forEach((item, index) => {
        if (index === Static.current.getDay()) {
            return Static.currentDay = item;
        }
    })
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