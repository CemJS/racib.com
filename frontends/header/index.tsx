import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.clickAny = function (e) {
    if (Ref.sidebar && !Ref.sidebar.contains(e.target) && !Ref.burger.contains(e.target) && front.Variable.openSidebar) {
        Ref.sidebar.classList.add('sidebar_close');
        front.Variable.openSidebar = false;
        Fn.initAll();
    }
    return
}

front.func.test = () => {
    return
}

front.loader = () => {
    front.Variable.openSidebar = false;
    Static.startTouch;
    Static.endTouch;
    return
}

front.display = () => {
    return (
        <div class="header">
            <Navigation />
        </div>
    )
}

export { front }