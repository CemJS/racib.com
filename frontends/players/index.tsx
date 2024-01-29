import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"
import allUsers from '@json/allUsers'


front.listener.finish = () => {
    return
}

front.func.test = () => {
    return
}

front.loader = async () => {
    const playersGet = {
        "action": "GetAll",
        "active": true,
        "search": ""
    }

    let players = await front.Services.functions.sendApi("/api/players", playersGet)
        Static.players = players?.result
  

    if (front.Variable.DataUrl[2]) {
        const getPlayer = {
            "action": "Get",
            "id": front.Variable.DataUrl[2],
        }
        let playerContent = await front.Services.functions.sendApi("/api/players", getPlayer)
        Static.contentPlayer = playerContent?.result;
    }

    Static.activeTab = '';
    Static.videoReady = false;

    if (front.Variable.DataUrl[2]) {
        let tmpPlayers = allUsers.filter(item => item.name == decodeURI(front.Variable.DataUrl[2]))
        if (tmpPlayers.length != 0) {
            Static.record = tmpPlayers[0]
        } else {
            Static.record = allUsers[0]
        }
    }

    Static.activeTab = '';
    Static.videoReady = false;
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