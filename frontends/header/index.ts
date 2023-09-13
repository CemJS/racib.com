import { Frontend } from "cemjs-all"
import { loader } from "./loader"
import { display } from "./display"
import { listener } from "./listener"

export const frontend: Frontend = {
    loader,
    display,
    listener
}