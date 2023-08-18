import { Cemjsx } from "cemjs-all"

export const display = function () {
  // console.log('=4fe088=', this.Ref.canvas)
  return (
    <div class="particles_wrap"
      ref="wrapCanvas"
      onclick={() => {
        this.fn("resize")
      }}
    >
      <canvas id="canvas" ref="canvas"></canvas>
    </div>
  )
}