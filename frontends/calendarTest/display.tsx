import { Cemjsx } from "cemjs-all"
import Navigation from "./navigation"

export const display = function () {
  return (
    <main class={["main", this.Variable.openSidebar ? null : "main_close"]}>
      <Navigation />
    </main>
  )
}