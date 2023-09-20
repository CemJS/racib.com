import { Cemjsx } from "cemjs-all"
import arrNext from '@svg/icons/light/nextWhite.svg'
import arrPrev from '@svg/icons/light/prevWhite.svg'
// for slider

import newsSlider from '@json/newsSliderTest'


export default function () {
    return (
        <div class={["particles_wrap",]} ref="wrapCanvas">
            <div
                class="runLine_wrap">
                <div class="runLine">
                    {
                        ([1, 2, 3, 4]).map(() => {
                            return (
                                <div class="runLine_item">
                                    <h1 ref="runLine" class="runLine_title">РОССИЙСКАЯ АССОЦИАЦИЯ КРИПТОЭКОНОМИКИ, ИСКУССТВЕННОГО ИНТЕЛЛЕКТА И БЛОКЧЕЙНА. </h1>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

            <canvas id="canvas" ref="canvas"></canvas>

            <div
                class={["home_news_wrap", this.Variable.openSidebar ? null : "home_news_wrap_close"]}
            >
                <div class="wrapper">
                    <section class="home_news slider">
                        <div class="slider_header">
                            <div>
                                <h2 class="home_news_title">Самые свежие факты</h2>
                            </div>
                            <div class="home_news_nav">
                                <div class="home_news_nav_arrows">
                                    <button
                                        class="arrow arrow_L"
                                        onclick={() => {
                                            this.Static.slides = document.querySelectorAll('.newCard_slider');
                                            this.Static.result = Array.from(this.Static.slides)
                                            this.fn("slider", this.Ref.sliderTestContainer, this.Static.result, 'prev')
                                            this.init();
                                        }}
                                    >
                                        <img src={arrPrev} />
                                    </button>
                                    <button
                                        class="arrow arrow_R"
                                        onclick={() => {
                                            this.Static.slides = document.querySelectorAll('.newCard_slider');
                                            this.Static.result = Array.from(this.Static.slides)
                                            this.fn("slider", this.Ref.sliderTestContainer, this.Static.result, 'next')
                                            this.init();
                                        }}
                                    >
                                        <img src={arrNext} />
                                    </button>
                                </div>

                                <a href="/news" onclick={this.Fn.link} class="btn_link">Все новости</a>
                            </div>
                        </div>

                        <section class="sliderTest">
                            <div
                                class="sliderTest_container"
                                ref="sliderTestContainer"
                                ontouchstart={(e: any) => {
                                    this.Static.startPoint = e.changedTouches[0].pageX;
                                }}

                                ontouchmove={(e: any) => {
                                    if (this.Static.moved) return
                                    e.preventDefault();
                                    if (e.touches[0].pageX > this.Static.startPoint + this.Ref.sliderTestContainer.offsetWidth / 10) {
                                        this.Static.moved = true;
                                        let slides = document.querySelectorAll('.newCard_slider');
                                        this.Static.result = Array.from(slides)
                                        this.fn("slider", this.Ref.sliderTestContainer, this.Static.result, 'prev')
                                        this.init();
                                    }
                                    if (e.touches[0].pageX < this.Static.startPoint - this.Ref.sliderTestContainer.offsetWidth / 10) {
                                        let slides = document.querySelectorAll('.newCard_slider');
                                        this.Static.result = Array.from(slides)
                                        this.fn("slider", this.Ref.sliderTestContainer, this.Static.result, 'next')
                                        this.Static.moved = true;
                                    }
                                }}

                                ontouchend={() => {
                                    this.Static.moved = !this.Static.moved;
                                }}
                            >
                                {
                                    newsSlider.map((item, index) => {
                                        return (
                                            <div
                                                class={["newCard_slider", `newCard_slider_${index + 1}`]}
                                                onclick={() => {
                                                    this.Fn.linkChange(`/news/show/${item.id}`)
                                                }}
                                            >
                                                <div class="newCard_slider_img" style={`background-image: url(${item.img})`}>
                                                    <span class="newCard_slider_category">{item.category}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* <div class="sliderTest_nav_lines">
                                {
                                    newsSlider.map((item, index) => {
                                        return (
                                            <div
                                                class={[
                                                    "sliderTest_nav_lines_item",
                                                    `sliderTest_nav_lines_item_${index + 1}`,
                                                    index + 1 == 3 ? `sliderTest_nav_lines_item_active` : null
                                                ]}></div>
                                        )
                                    })
                                }
                            </div> */}

                        </section>
                    </section>
                </div>
            </div>

        </div>
    )
}