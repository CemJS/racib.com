import { Cemjsx } from "cemjs-all"
import arrPrevDark from '@svg/icons/dark/prev.svg'
import arrNextDark from '@svg/icons/dark/next.svg'

export default function () {
    return (
        <div class="wrapper">
            <div class="calendarTest">
                <h1
                    class="mb_25"
                    style="text-align: center; cursor: pointer;"
                    onclick={() => {
                        this.fn("getDateCalendar", new Date(2023, 10, 1))
                        this.fn(
                            "createCalendar",
                            this.Ref.calendar,
                            2015,
                            4
                        )
                    }}
                >
                    Calendar Test
                </h1>
                {/* <div class="filter_date filter_date_active" ref="calendar">
                    <div class="calendar">

                        <div class="calendar_header">
                            <span
                                class="calendar_monthPicker"
                                onclick={() => {
                                    this.Ref.monthList.classList.add('calendar_monthList_show');
                                    this.init();
                                }}
                            >
                                {this.Static.currentMonth}
                            </span>
                            <div class="calendar_yearPicker">
                                <span
                                    class="calendar_arrow"
                                    onclick={() => {
                                        this.Static.currentYear--;
                                        this.fn("daysInMonth", this.Static.currentYear, this.Static.currentMonthIndex--);
                                        this.fn("firstDayWeek", this.Static.currentYear, this.Static.currentMonthIndex--);
                                        this.init();
                                    }}
                                >
                                    <img src={arrPrevDark} alt="Previous year" />
                                </span>
                                <span class="calendar_currentYear">{this.Static.currentYear}</span>
                                <span
                                    class="calendar_arrow"
                                    onclick={() => {
                                        this.Static.currentYear++;
                                        this.fn("daysInMonth", this.Static.currentYear, this.Static.currentMonthIndex--);
                                        this.fn("firstDayWeek", this.Static.currentYear, this.Static.currentMonthIndex);
                                        this.init();
                                    }}
                                >
                                    <img src={arrNextDark} alt="Next year" />
                                </span>
                            </div>
                        </div>

                        <div class="calendar_body">
                            <div class="calendar_weekDay">
                                {
                                    this.Static.resultWeekDays.map((item, index) => {
                                        return (
                                            <div
                                                class={["calendar_weekDay_item", index + 1 == this.Static.currentDay ? "calendar_weekDay_item_active" : null]}
                                            >
                                                {item}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div class="calendar_days">
                                {
                                    this.Static.days.map(((item, index) => {
                                        return (
                                            <div
                                                class={["calendar_days_item", index + 1 == this.Static.current.getDate() ? "calendar_days_item_active" : null]}
                                            >
                                                {item}
                                                <span class="calendar_days_item_effect"></span>
                                                <span class="calendar_days_item_effect"></span>
                                                <span class="calendar_days_item_effect"></span>
                                                <span class="calendar_days_item_effect"></span>
                                            </div>
                                        )
                                    }))
                                }
                            </div>
                        </div>

                        <div class="calendar_monthList" ref="monthList">
                            {
                                this.Static.monthList.map((item, index) => {
                                    return (
                                        <div
                                            class="calendar_monthList_item"
                                            onclick={() => {
                                                this.Static.currentMonth = item;
                                                this.Static.currentMonthIndex = index + 1;
                                                this.fn("daysInMonth", this.Static.currentYear, this.Static.currentMonthIndex--);
                                                this.fn("firstDayWeek", this.Static.currentYear, this.Static.currentMonthIndex--);
                                                this.Ref.monthList.classList.remove('calendar_monthList_show');
                                                this.init();
                                            }}
                                        >
                                            {item}
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div> */}

                <div ref="calendar">

                </div>


            </div>
        </div >
    )
}