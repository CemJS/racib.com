import { Cemjsx, front } from "cemjs-all"
import Main from "./display/Main"
import Agreement from "./display/Agreement"

export default function () {
  let param = front.Variable.DataUrl[1] || ""
  switch (param) {
    case 'aggrement':
      return <Agreement />
      break;
    default:
      return <Main />
  }
}

