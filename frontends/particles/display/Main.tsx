import { Cemjsx, front, Fn, Func, Static, Ref } from "cemjs-all"
import arrNext from '@svg/icons/light/nextWhite.svg'
import arrPrev from '@svg/icons/light/prevWhite.svg'
import news from '@json/news'

export default function () {

    let newsSlider = Static.news;

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
                class={["home_news_wrap", front.Variable.openSidebar ? null : "home_news_wrap_close"]}
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
                                            Static.slides = document.querySelectorAll('.newCard_slider');
                                            Static.result = Array.from(Static.slides)
                                            Func.slider(Ref.sliderTestContainer, Static.result, 'prev')
                                            Fn.init();
                                        }}
                                    >
                                        <img src={arrPrev} />
                                    </button>
                                    <button
                                        class="arrow arrow_R"
                                        onclick={() => {
                                            Static.slides = document.querySelectorAll('.newCard_slider');
                                            Static.result = Array.from(Static.slides)
                                            Func.slider(Ref.sliderTestContainer, Static.result, 'next')
                                            Fn.init();
                                        }}
                                    >
                                        <img src={arrNext} />
                                    </button>
                                </div>

                                <a href="/news" onclick={Fn.link} class="btn_link">Все новости</a>
                            </div>
                        </div>

                        <section class="sliderTest">
                            <div
                                class="sliderTest_container"
                                ref="sliderTestContainer"
                                ontouchstart={(e: any) => {
                                    Static.startPoint = e.changedTouches[0].pageX;
                                }}

                                ontouchmove={(e: any) => {
                                    if (Static.moved) return
                                    e.preventDefault();
                                    if (e.touches[0].pageX > Static.startPoint + Ref.sliderTestContainer.offsetWidth / 10) {
                                        Static.moved = true;
                                        let slides = document.querySelectorAll('.newCard_slider');
                                        Static.result = Array.from(slides)
                                        Func.slider(Ref.sliderTestContainer, Static.result, 'prev')

                                        Fn.init();
                                    }
                                    if (e.touches[0].pageX < Static.startPoint - Ref.sliderTestContainer.offsetWidth / 10) {
                                        let slides = document.querySelectorAll('.newCard_slider');
                                        Static.result = Array.from(slides)
                                        Func.slider(Ref.sliderTestContainer, Static.result, 'next')

                                        Static.moved = true;
                                    }
                                }}

                                ontouchend={() => {
                                    Static.moved = !Static.moved;
                                }}
                            >
                                {
                                    newsSlider.slice(0, 5).map((item: any, index: number) => {
                                        return (
                                            <div
                                                class={["newCard_slider", `newCard_slider_${index + 1}`]}
                                                onclick={() => {
                                                    Fn.linkChange(`/news/show/${item.id}`)
                                                }}
                                            >
                                                <div class="newCard_slider_img" style={`background-image: url(/assets/upload/racib/${item?.img})`}>
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