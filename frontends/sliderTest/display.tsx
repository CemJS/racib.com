import { Cemjsx } from "cemjs-all"
import date from '@svg/icons/dark/date.svg'
import map from '@svg/icons/dark/mapPin.svg'
import events from '@json/eventsSlider'


export const display = function () {
  console.log('=55e12d=', '1234')
  return (
    <div class="main_wrap">
      <main class={["main", this.Variable.openSidebar ? null : "main_close"]}>
        <div class="wrapper">
          <section ref="gallery">

            <div class="slide slide_0">0</div>
            <div class="slide slide_1">1</div>
            <div class="slide slide_2">2</div>
            <div class="slide slide_3">3</div>

          </section>
          <div ref="galleryDots"></div>
        </div>
      </main>
    </div>

  )
}