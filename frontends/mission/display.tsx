import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'
import dev from '@svg/icons/color/development.svg'

export const display = function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <a class="back" href="/" onclick={this.Fn.link}>
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Главная</span>
          </a>
          <section class="dev">
            <div class="dev_content">
              <span class="dev_text">Страница в разработке...</span>
              <img class="dev_img" src={dev} alt="Страница в разработке" />
            </div>
          </section>
        </div>
      </main>
    </div>

  )
}