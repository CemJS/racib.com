import { Cemjsx } from "cemjs-all"
import Main from "./display/Main"
import Join from "./display/Join"

export default function () {
  let param = this.Variable.DataUrl[1] || ""
  switch (param) {
    case 'join':
      return <Join />
      break;
    default:
      return <Main />
  }
}

