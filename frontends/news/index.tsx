import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"

front.loader = async () => {

  const newsGet = {
    "action": "GetAll",
    "active": true,
    "search": ""
  }
  let news = await front.Services.functions.sendApi("/racib/News", newsGet)

  Static.news = news?.result;

  if (front.Variable.DataUrl[2]) {
    const getNew = {
      "action": "Get",
      "id": front.Variable.DataUrl[2]
    }
    let newContent = await front.Services.functions.sendApi("/racib/News", getNew)
    Static.contentNew = newContent?.result;
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