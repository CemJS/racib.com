import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"

front.loader = async () => {

  const eventsGet = {
    "action": "GetAll",
    "active": true,
    "search": ""
  }
  let events = await front.Services.functions.sendApi("/api/events", eventsGet)

  Static.events = events?.result;

  if (front.Variable.DataUrl[2]) {
    const getEvent = {
      "action": "Get",
      "id": front.Variable.DataUrl[2]
    }
    let eventContent = await front.Services.functions.sendApi("/api/events", getEvent)
    Static.contentEvent = eventContent?.result;
  }

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