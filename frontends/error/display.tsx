import { Cemjsx } from "cemjs-all"

export const display = function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">

          <section class="error_wrap">
            <div class="error">
              <p class="error_text">Страница не найдена</p>
              <p class="error_main">Error 4
                <span class="error_image"></span>
                4</p>

              <p class="error_text">Вернитесь на главную страницу</p>
              <a href="/" class="btn_link btn_link_dark">
                Главная
              </a>

            </div>
          </section>

        </div>
      </main>
    </div>
  )
}