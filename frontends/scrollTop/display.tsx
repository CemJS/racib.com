import { Cemjsx } from "cemjs-all"

export const display = function () {
  return (
    <span
      class="scrollTop scrollTop_show"
      ref="scrollTop"
      onclick={() => {
        window.scrollTo(0, 0)
      }}
    >
    </span>

  )
}