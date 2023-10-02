import { Cemjsx } from "cemjs-all"
import arrPrevDark from '@svg/icons/dark/prev.svg'
import arrNextDark from '@svg/icons/dark/next.svg'

let options: { month: string } = { month: 'long' }

export default function () {
    return (
        <div class="wrapper">
            <div class="calendarTest">
                <h1
                    class="mb_25"
                    style="text-align: center; cursor: pointer;"
                    onclick={() => {
                        this.fn(
                            "createCalendar",
                            this.Ref.calendar,
                            this.Static.currentDate.getFullYear(),
                            this.Static.currentDate.getMonth()
                        )
                    }}
                >
                    Calendar Test
                </h1>

                <div class="calendarTest_main">
                    <div class="calendar_header">
                        <span
                            class="calendar_monthPicker"
                            onclick={() => {
                                this.Ref.monthList.classList.add('calendar_monthList_show');
                                this.init();
                            }}
                        >
                            {this.Static.currentDate.toLocaleString("ru", options)}
                        </span>
                        <div class="calendar_yearPicker">
                            <span
                                class="calendar_arrow"
                                onclick={() => {
                                    this.Static.currentDate.setFullYear(this.Static.currentDate.getFullYear() - 1)
                                    this.fn(
                                        "createCalendar",
                                        this.Ref.calendar,
                                        this.Static.currentDate.getFullYear(),
                                        this.Static.currentDate.getMonth()
                                    )
                                    this.init()
                                }}
                            >
                                <img src={arrPrevDark} alt="Previous year" />
                            </span>
                            <span class="calendar_currentYear">{this.Static.currentDate.getFullYear()}</span>
                            <span
                                class="calendar_arrow"
                                onclick={() => {
                                    this.Static.currentDate.setFullYear(this.Static.currentDate.getFullYear() + 1)
                                    this.fn(
                                        "createCalendar",
                                        this.Ref.calendar,
                                        this.Static.currentDate.getFullYear(),
                                        this.Static.currentDate.getMonth()
                                    )
                                    this.init()
                                }}
                            >
                                <img src={arrNextDark} alt="Next year"></img>
                            </span>
                        </div>
                    </div>

                    <div ref="calendar"></div>

                    <div class="calendar_monthList" ref="monthList">
                        {
                            this.Static.monthList.map((item, index) => {
                                return (
                                    <div
                                        class="calendar_monthList_item"
                                        onclick={() => {

                                            this.Static.currentDate.setMonth(index);

                                            this.fn(
                                                "createCalendar",
                                                this.Ref.calendar,
                                                this.Static.currentDate.getFullYear(),
                                                this.Static.currentDate.getMonth()
                                            )

                                            this.Ref.monthList.classList.remove('calendar_monthList_show');
                                            this.init()
                                        }}
                                    >
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}