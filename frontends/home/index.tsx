import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.test = () => {
    return
}

front.loader = async () => {

    const eventsGet = {
        "action": "GetAll",
        "active": true,
        "search": ""
    }
    let events = await front.Services.functions.sendApi("/api/events", eventsGet)
    Static.events = events?.result;

    const playersGet = {
        "action": "GetAll",
        "active": true,
        "search": ""
    }

    let players = await front.Services.functions.sendApi("/api/players", playersGet)
    Static.players = players?.result
    return
}

front.display = () => {
    return (
        <div class="main_wrap">
            <Navigation />
        </div>
    )
}

export { front }