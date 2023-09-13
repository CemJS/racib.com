import { Micro } from "cemjs-all"
import { loader } from "./loader"
import { display } from "./display"
import { fn } from "./functions"

export const frontend: Micro = {
    name: "MicroTest",
    loader,
    display,
    fn
}