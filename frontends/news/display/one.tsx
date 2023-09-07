import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'

import news from '@json/allUsers'

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
            onclick={() => {
              setTimeout(() => {
                Object.keys(this.Static.record).forEach(key => delete this.Static.record[key]);
                this.Fn.link;
              }, 500)
            }}
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