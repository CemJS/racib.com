import { Cemjsx } from "cemjs-all"
import Main from "./display/Main"
import Show from "./display/Show"


export default function () {

  if (this.Variable.DataUrl[2]) {
    return <Show />
  }

  if (this.Variable.DataUrl.length == 1) {
    return <Main />
  }
  // if (this.Variable.DataUrl[2]) {
  //   return <Show />
  // }

  // if (this.Variable.DataUrl[1] == "course") {
  //   return <Course />
  // }



}

