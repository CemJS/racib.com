import { Cemjsx } from "cemjs-all"
import Navigation from "./navigation"

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
      }}>
      <div class="modal_wrap" ref="modalOutside">
        <Navigation />
      </div>
    </div>
  )
}