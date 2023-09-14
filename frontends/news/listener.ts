export const clickAny = function (e) {
    if (!this.Ref.filterCategory.contains(e.target) && this.Static.categoryStatus == 'open') {
        this.Static.categoryStatus = 'close';
        this.Ref.filterCategory.classList.remove('filter_item_active');
    }

    // if (!this.Ref.filterCategory.contains(e.target) && this.Ref.filterCalendar.contains(e.target) && this.Static.categoryStatus == 'open') {
    //     this.Static.categoryStatus = 'close';
    //     this.Ref.filterCategory.classList.remove('filter_item_active');
    // } else if (!this.Ref.filterCategory.contains(e.target) && !this.Ref.filterCalendar.contains(e.target) && this.Static.categoryStatus == 'open') {
    //     this.Static.categoryStatus = 'close';
    //     this.Ref.filterCategory.classList.remove('filter_item_active');
    // }

    // if (!this.Ref.filterCalendar.contains(e.target) && this.Ref.filterCategory.contains(e.target) && this.Static.calendarStatus == 'open') {
    //     this.Static.calendarStatus = 'close';
    //     this.Ref.calendarNews.classList.remove('filter_date_active');
    // } else if (!this.Ref.filterCalendar.contains(e.target) && !this.Ref.filterCategory.contains(e.target) && this.Static.calendarStatus == 'open') {
    //     this.Static.calendarStatus = 'close';
    //     this.Ref.calendarNews.classList.remove('filter_date_active');
    // }
    return
}
