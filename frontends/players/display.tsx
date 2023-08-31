import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'



export const display = function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <div class="back">
            <a
              class="back-icon"
              href="/"
              onclick={this.Fn.link}
            >
              <img src={back} />
            </a>
            <span class="back_title">Участники</span>
          </div>

          <section class="players">
            <span>Страница участники в разработке</span>
          </section>
        </div>
      </main>
    </div>

  )
}