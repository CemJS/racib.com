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

            <div class="slide slide_1"></div>
            <div class="slide slide_2"></div>
            <div class="slide slide_3"></div>
            <div class="slide slide_4"></div>


            {/* {
              events.map((item, index) => {
                return (
                  <div
                    class={["card", `card_${index}`]}
                    ref="eventsSlide"
                  // onclick={() => {
                  //   this.Fn.linkChange(`/events/show/${index}`)
                  // }}
                  >
                    <span class="card_category">{item.category}</span>
                    <div class="card_img" style={`background-image: url(${item.cover})`}>
                      <div class="card_logo">
                        <img src={item.logo} alt="Логотип" />
                      </div>
                    </div>
                    <div class="card_info">
                      <h5 class="card_info_title">{item.title}</h5>
                      <span class="card_info_date">
                        <img src={date} alt="Дата проведения мероприятия" />
                        {item.date}
                      </span>
                      <span class="card_info_location">
                        <img src={map} alt="Место проведения мероприятия" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                )
              })
            } */}


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