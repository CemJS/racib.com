import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'
import user from '@images/users/brazhnikov.jpg'

export const display = function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <a
            class="back"
            href="/"
            onclick={this.Fn.link}
          >
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Главная</span>
          </a>

          <section class="profile">
            <div class="profile_user">
              <div class="profile_user_image">
                <div class="profile_user_image_circle">
                  <img src={user} alt="Фото пользователя" />
                </div>
              </div>
              <div class="profile_user_info">
                <span class="profile_user_info_name">Бражников Александр Евгеньевич</span>
                <div class="profile_user_info_birth">
                  <span>Дата рождения</span>
                  <span>14 февраля</span>
                </div>
              </div>
            </div>
            <div class="profile_content"></div>
          </section>
        </div>
      </main>
    </div>

  )
}