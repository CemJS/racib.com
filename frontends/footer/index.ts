import { Micro } from "cemjs-all"
import { loader } from "./loader"
import { display } from "./display"
import { listener } from './listener'

export const frontend: Micro = {
    name: "MicroTest",
    loader,
    display,
    listener
}