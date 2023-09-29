import { Cemjsx } from "cemjs-all"

export default function () {
    return (
        <div class="modal_content modalSuccess_content">
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
            <main class="modal_body modalSuccess_body">
                <div class="modal_body_dev">
                    <span class={["modal_message", this.Static.className]}>{this.Static.message}</span>
                    <img src={this.Static.img} alt="Статус отправки" />
                </div>
            </main>
        </div>
    )
}