import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'
import next from '@svg/icons/nextWhite.svg'

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
            <span class="back_title">О РАКИБ</span>
          </div>
          <div class="about">
            <div class="block_default">
              <h2 class="general_title">
                <span>РОССИЙСКАЯ АССОЦИАЦИЯ КРИПТОЭКОНОМИКИ,</span>
                <span>ИСКУССТВЕННОГО ИНТЕЛЛЕКТА И БЛОКЧЕЙНА</span>
              </h2>
              <div class="link_block">
                <a href="/goal">
                  <img src="" alt="" />
                  <span>Миссия РАКИБ. Главные цели деятельности РАКИБ.</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    // <marquee behavior="scroll" direction="left" style="color: #000000;">РОССИЙСКАЯ АССОЦИАЦИЯ КРИПТОЭКОНОМИКИ, ИСКУССТВЕННОГО ИНТЕЛЛЕКТА И БЛОКЧЕЙНА
    // </marquee>

  )
}