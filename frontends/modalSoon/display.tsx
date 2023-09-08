import { Cemjsx } from "cemjs-all"
import dev from '@svg/icons/color/development.svg'

export const display = function () {
  return (
    <div
      class="modal"
      onclick={(e) => {
        if (e.target === this.Ref.modalOutside) {
          setTimeout(() => {
            this.clearData()
          }, 5);
        }
      }}
    >
      <div class="modal_wrap" ref="modalOutside">
        <div class="modal_content">
          <header class="modal_header">
            <button
              class="modal_close"
              onclick={() => {
                setTimeout(() => {
                  this.clearData()
                }, 5);
              }}
            >
              x
            </button>
          </header>
          <main class="modal_body">
            <div class="modal_body_dev">
              <span>В разработке ...</span>
              <img src={dev} alt="В разработке" />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}