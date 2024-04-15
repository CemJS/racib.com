import { Cemjsx, front } from "cemjs-all"
import Main from "./display/Main"
import Show from "./display/Show"

export default function () {
  let param = front.Variable.DataUrl[1] || ""
  switch (param) {
    case 'show':
      return <Show />
      break;
    default:
      return <Main />
  }
}

