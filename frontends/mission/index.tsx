import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"

front.loader = async () => {
    return
}
front.display = () => {
    return (
        <div>
            <Navigation />
        </div>
    )
}

export { front }