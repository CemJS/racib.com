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
            <span class="back_title">Пользовательское соглашение</span>
          </div>

          <section class="userAgreement block_default">
            <h1 class="block_default_title">Пользовательское соглашение</h1>
            <ul>
              <li>Общие положения</li>
              <li>Учётная запись пользователя</li>
              <li>Согласие на получение сообщений</li>
              <li>Правила получения товаров/услуг</li>
            </ul>
          </section>
        </div>
      </main>
    </div>

  )
}