import { Cemjsx } from "cemjs-all"
import Main from "./display/Main"
import Show from "./display/Show"


export default function () {
  let param = this.Variable.DataUrl[1] || ""
  switch (param) {
    case 'show':
      return <Show />
      break;
    default:
      return <Main />
  }
}

