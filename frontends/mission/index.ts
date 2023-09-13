import { Micro } from "cemjs-all"
import { loader } from "./loader"
import { display } from "./display"

export const frontend: Micro = {
    name: "MicroTest",
    loader,
    display
}