import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'
import map from '@svg/icons/dark/mapPin.svg'

export default function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <a
            class="back"
            href="/news"
            onclick={this.Fn.link}
          >
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Все новости</span>
          </a>

          <section class="new">
            <div class="new_profile">
              <div class="new_profile_image">
                <img src={this.Static.record.img} alt="Иибражение новости" />
              </div>
              <div class="new_profile_info">
                {
                  this.Static.record?.date ?
                    <span>{this.Static.record.date}</span> : null
                }
                {
                  this.Static.record?.category ?
                    <span class="new_profile_info_category">{this.Static.record.category}</span> : null
                }

                {
                  this.Static.record?.city ?
                    <span class="new_profile_info_location">
                      <img src={map} alt="Локация" />
                      {this.Static.record.city}
                    </span> : null
                }

              </div>
            </div>
            <div class="new_content">
              <h2 class="new_content_title">{this.Static.record.title}</h2>
              <div>
                {
                  this.Static.record.desc ?
                    this.Static.record.desc.map(item => {
                      return (
                        <p class="new_content_text">{item}</p>
                      )
                    }) : <span>Подробной информации нет</span>
                }
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>

  )
}