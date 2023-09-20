import { Cemjsx } from "cemjs-all"
import Navigation from "./navigation"

export const display = function () {
  return (
    <main
      class="modal"
      onclick={(e) => {
        if (e.target === this.Ref.modalOutside) {
          setTimeout(() => {
            this.clearData()
          }, 5);
        }
      }}
    >
      <div class="modal_wrap modalGallery_wrap" ref="modalOutside">
        <Navigation />
      </div>
    </main>
  )
}