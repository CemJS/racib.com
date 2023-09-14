import { Cemjsx } from "cemjs-all"
import date from '@svg/icons/dark/date.svg'
import map from '@svg/icons/dark/mapPin.svg'
import events from '@json/eventsSlider'


export const display = function () {
  return (
    <div class="main_wrap">
      <main class={["main", this.Variable.openSidebar ? null : "main_close"]}>
        <div class="wrapper">


          <section ref="gallery">

            <div class="slide slide_0"></div>
            <div class="slide slide_1"></div>
            <div class="slide slide_2"></div>
            <div class="slide slide_3"></div>

          </section>

          <div style="margin: 15px auto">
            <button
            >Prev</button>
            <button>Next</button>
          </div>


        </div>
      </main>
    </div>

  )
}