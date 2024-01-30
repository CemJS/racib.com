import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"

front.listener.clickAny = function (e) {
    if (Ref.filterCategoryv && !Ref.filterCategory.contains(e.target) && Static.categoryStatus == 'open') {
        Static.categoryStatus = 'close';
        Ref.filterCategory.classList.remove('filter_item_active');
    }
    return
}
Static.stateField = false

front.loader = async () => {
    Static.notificationShow = false
    const representativesGet = {
        "action": "GetAll",
        "active": true,
        "search": ""
    }
    let representatives = await front.Services.functions.sendApi("/api/representatives", representativesGet)
    Static.representatives = representatives?.result

    Static.representatives = representatives?.result
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