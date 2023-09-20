import { Cemjsx } from "cemjs-all"
import appeal1 from '@images/appeal/appealPresedent1.jpg'
import appeal2 from '@images/appeal/appealPresedent2.jpg'

let gallery = [appeal1, appeal2]

export default function () {
    return (
        <div class="modalGallery_content">
            <header class="modal_header">
                <button
                    class="modal_close"
                    onclick={() => {
                        setTimeout(() => {
                            this.clearData()
                        }, 5);
                    }}
                >
                    x
                </button>
            </header>
            <main class="modalGallery_body">
                <div class="modalGallery_image">
                    <img src={this.Static.img} />
                </div>
            </main>
        </div>
    )
}