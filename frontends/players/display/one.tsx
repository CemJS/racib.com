import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'
import user from '@images/users/brazhnikov.jpg'

export default function () {
  console.log('=7a0865=', this.Static.record)
  return (
    <div class="main_wrap">
      <main
        class={["main", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <a
            class="back"
            href="/players"
            onclick={() => {
              setTimeout(() => {
                Object.keys(this.Static.record).forEach(key => delete this.Static.record[key]);
              }, 500)
            }}
          >
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Все участники</span>
          </a>

          <section class="profile">
            <div class="profile_user">
              <div class="profile_user_image">
                <span class="players_list_item_info_status">{this.Static.record.status}</span>
                <div class="profile_user_image_circle">
                  <img src={this.Static.record.img} alt="Фото пользователя" />
                </div>
              </div>
              <div class="profile_user_info">
                <span class="profile_user_info_name">{this.Static.record.name}</span>
                {
                  this.Static.record?.birthday ?
                    <div class="profile_user_info_birth">
                      <span>Дата рождения</span>
                      <span>{this.Static.record.birthday}</span>
                    </div> : null
                }
                <div class="profile_user_info_location">
                  <span>Местоположение</span>
                  <span>{this.Static.record.city}</span>
                </div>
              </div>
              <div>

              </div>
            </div>
            <div class="profile_content"></div>
          </section>
        </div>
      </main>
    </div>

  )
}