import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.test = () => {
    return
}

front.loader = () => {
    return
}

front.display = () => {
    return (
        <main class={["main", front.Variable.openSidebar ? null : "main_close"]}>
            <Navigation />
        </main>
    )
}

export { front }