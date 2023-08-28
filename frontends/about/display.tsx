import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'
import next from '@svg/icons/light/nextWhite.svg'
import arrNextDark from '@svg/icons/dark/next.svg'
import arrPrevDark from '@svg/icons/dark/prev.svg'
import goal from '@svg/icons/book.svg'
import pencil from '@svg/icons/pencil.svg'
import smi from '@images/banners/public.jpg'
import education from '@images/banners/education.png'


import admins from '@json/administration'
import directorate from '@json/directorate'
import observers from '@json/observers'
import experts from '@json/experts'


const facts = [
  {
    text: 'РАКИБ подготовила проект ФЗ «О внесении изменений в ФЗ «О развитии малого и среднего предпринимательства в РФ» и другие законодательные акты РФ», регулирующий деятельность рынка криптовалют.',
  },
  {
    text: 'По просьбе Экспертного совета при Комитете Госдумы по финансовому рынку РАКИБ подготовила экспертный анализ законопроектов: «О внесении изменений в части первую, вторую и четвертую Гражданского кодекса РФ», «О цифровых финансовых активах» и «Об альтернативных способах привлечения инвестиций (краудфандинге)».',
  },
  {
    text: 'Президент РАКИБ Юрий Припачкин входит в состав Совета по развитию цифровой экономики при верхней палате российского парламента, в состав Экспертного совета по международному гуманитарному праву при Первом заместителе Председателя Государственной Думы ФС РФ.',
  },
  {
    text: 'РАКИБ создала комитет по трейдингу, который занимается сертификацией и обучением криптовалютных трейдеров, а также отвечает за разработку законодательной и налоговой базы в соответствующей сфере.',
  },
  {
    text: 'РАКИБ совместно с партнерами подготовил базу типовых решений для цифровизации системы государственного управления в отдельных регионах РФ. Развивает сеть региональных представительств, присутствует в зарубежных странах.',
  },
  {
    text: 'РАКИБ организовала и провела премию «БЛОКЧЕЙН ЭКОНОМИКА» за выдающиеся заслуги в сфере развития блокчейн-технологий, номинантами которой стали ведущие российские компании и госорганы (ПАО «Сбербанк», ПАО «Мегафон», ДИТ г. Москвы, Росреестр, Ассоциация «ФинТех» и другие).'
  },
  {
    text: 'РАКИБ провела съезд представителей крипто индустрии в рамках международного форума БЛОКЧЕЙНРФ-2018, в котором приняло участие более 2000 представителей отрасли.'
  },
  {
    text: 'РАКИБ стала инициатором создания Международной децентрализованной ассоциации криптовалют и блокчейна (IDACB) для разработки единых стандартов регулирования этой сферы.'
  },
  {
    text: 'В сентябре 2018 г. глава Чечни Рамзан Кадыров и президент РАКИБ Юрий Припачкин договорились о создании в Чечне Евразийского майнингового пула. Майнинговый пул станет первым шагом реализации программы «Крипто Чечня», которая направлена на развитие экономики региона с использованием технологий блокчейна.'
  },
  {
    text: 'РАКИБ является официальным партнером высших образовательных учреждений в Москве и регионах РФ. Совместно разрабатывает и проводит обучающие программы в области цифровой экономики. Руководители и представители РАКИБ на регулярной основе проводят обучающие мероприятия, читают лекции.'
  },
  {
    text: 'РАКИБ в партнерстве с РЭУ им. Г.В.Плеханова развивает Бизнес-инкубатор иновационных проектов. Бизнес-инкубатор - площадка для качественной совместной работы, нетворкинга инвесторов, предпринимателей и творческих коллективов позволяющая протестировать идеи, создать или развить свой бизнеса.'
  },
]

export const display = function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <div class="back">
            <a
              class="back-icon"
              href="/"
              onclick={this.Fn.link}
            >
              <img src={back} />
            </a>
            <span class="back_title">О РАКИБ</span>
          </div>
          <div class="about">
            <section class="block_default">
              <h2 class="general_title">
                <span>РОССИЙСКАЯ АССОЦИАЦИЯ КРИПТОЭКОНОМИКИ,</span>
                <span>ИСКУССТВЕННОГО ИНТЕЛЛЕКТА И БЛОКЧЕЙНА</span>
              </h2>
              <div class="link_block">
                <a href="/goal">
                  <img src={goal} class="link_block_icon" />
                  <span>Миссия РАКИБ. Главные цели деятельности РАКИБ.</span>
                </a>
              </div>
            </section>

            <section class="block_default">
              <h3 class="block_default_title">Правление РАКИБ</h3>
              <p class="block_default_desc">Исполнительными органами управления РАКИБ являются: президент (единоличный исполнительный орган), исполнительный директор и правление. Правление Ассоциации является совещательным органом при президенте Ассоциации и состоит из вице-президентов, а также иных лиц, назначенных президентом.</p>
            </section>

            <section class="about_rule">
              <h3 class="pY_25 block_default_title">Руководство РАКИБ</h3>
              <div class="carousel_wrap">
                <button
                  class="arrow arrow_dark arrow_left"
                  onclick={() => {
                    this.Ref.ruleCarousel.scrollLeft -= this.Ref.ruleSlide.offsetWidth + 20;
                  }}
                >
                  <img src={arrPrevDark} />
                </button>
                <button
                  class="arrow arrow_dark arrow_right"
                  onclick={() => {
                    this.Ref.ruleCarousel.scrollLeft += this.Ref.ruleSlide.offsetWidth + 20;
                  }}
                >
                  <img src={arrNextDark} />
                </button>
                <div class="carousel" ref="ruleCarousel">
                  {
                    admins.map(item => {
                      return (
                        <div class="carousel_person" ref="ruleSlide">
                          <a href="/" class="carousel_person_circle">
                            <div
                              class="carousel_person_img"
                              style={`background-image: url(${item.img})`}
                            ></div>
                          </a>
                          <span class="carousel_person_status">{item.status}</span>
                          <h5 class="carousel_person_name">{item.name}</h5>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section>

            <div class="link_block">
              <a href="/">
                <img src={next} />
                <span>Перейти на страницу</span>
              </a>
            </div>

            <section class="about_directore">
              <h3 class="pY_25 block_default_title">Дирекция РАКИБ</h3>
              <div class="carousel_wrap">
                <button
                  class="arrow arrow_dark arrow_left"
                  onclick={() => {
                    this.Ref.directoreCarousel.scrollLeft -= this.Ref.directoreSlide.offsetWidth + 20;
                  }}
                >
                  <img src={arrPrevDark} />
                </button>
                <button
                  class="arrow arrow_dark arrow_right"
                  onclick={() => {
                    this.Ref.directoreCarousel.scrollLeft += this.Ref.directoreSlide.offsetWidth + 20;
                  }}
                >
                  <img src={arrNextDark} />
                </button>
                <div class="carousel" ref="directoreCarousel">
                  {
                    directorate.map(item => {
                      return (
                        <div class="carousel_person" ref="directoreSlide">
                          <a href="/" class="carousel_person_circle">
                            <div
                              class="carousel_person_img"
                              style={`background-image: url(${item.img})`}
                            ></div>
                          </a>
                          <span class="carousel_person_status">{item.status}</span>
                          <h5 class="carousel_person_name">{item.name}</h5>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section>

            <div class="link_block">
              <a href="/">
                <img src={next} />
                <span>Перейти на страницу</span>
              </a>
            </div>

            <section class="about_observers">
              <h3 class="pY_25 block_default_title">Наблюдательный совет РАКИБ</h3>
              <div class="carousel_wrap">
                <button
                  class="arrow arrow_dark arrow_left"
                  onclick={() => {
                    this.Ref.observersCarousel.scrollLeft -= this.Ref.observersSlide.offsetWidth + 20;
                  }}
                >
                  <img src={arrPrevDark} />
                </button>
                <button
                  class="arrow arrow_dark arrow_right"
                  onclick={() => {
                    this.Ref.observersCarousel.scrollLeft += this.Ref.observersSlide.offsetWidth + 20;
                  }}
                >
                  <img src={arrNextDark} />
                </button>
                <div class="carousel" ref="observersCarousel">
                  {
                    observers.map(item => {
                      return (
                        <div class="carousel_person" ref="observersSlide">
                          <a href="/" class="carousel_person_circle">
                            <div
                              class="carousel_person_img"
                              style={`background-image: url(${item.img})`}
                            ></div>
                          </a>
                          <span class="carousel_person_status">{item.status}</span>
                          <h5 class="carousel_person_name">{item.name}</h5>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section>

            <div class="link_block">
              <a href="/">
                <img src={next} />
                <span>Перейти на страницу</span>
              </a>
            </div>

            <section class="about_experts">
              <h3 class="pY_25 block_default_title">Экспертный совет РАКИБ</h3>
              <div class="carousel_wrap">
                <button
                  class="arrow arrow_dark arrow_left"
                  onclick={() => {
                    this.Ref.expertsCarousel.scrollLeft -= this.Ref.expertsSlide.offsetWidth + 20;
                  }}
                >
                  <img src={arrPrevDark} />
                </button>
                <button
                  class="arrow arrow_dark arrow_right"
                  onclick={() => {
                    this.Ref.expertsCarousel.scrollLeft += this.Ref.expertsSlide.offsetWidth + 20;
                  }}
                >
                  <img src={arrNextDark} />
                </button>
                <div class="carousel" ref="expertsCarousel">
                  {
                    experts.map(item => {
                      return (
                        <div class="carousel_person" ref="expertsSlide">
                          <a href="/" class="carousel_person_circle">
                            <div
                              class="carousel_person_img"
                              style={`background-image: url(${item.img})`}
                            ></div>
                          </a>
                          <span class="carousel_person_status">{item.status}</span>
                          <h5 class="carousel_person_name">{item.name}</h5>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section>

            <div class="link_block">
              <a href="/">
                <img src={next} />
                <span>Перейти на страницу</span>
              </a>
            </div>

            <section class="about_fact">
              <h2 class="block_default_title">Факты о РАКИБ</h2>
              <ul class="list">
                {
                  facts.map(item => {
                    return (
                      <li class="list_item">{item.text}</li>
                    )
                  })
                }
              </ul>
            </section>

            <section class="about_public block_default">
              <h5 class="block_default_title">Публикации в СМИ</h5>
              <div class="about_public_img">
                <img src={smi} alt="Публикации в СМИ РАКИБ" />
              </div>
              <div class="link_block">
                <a href="/" onclick={this.Fn.link}>
                  <img class="link_block_icon" src={pencil} alt="О нас пишут РАКИБ" />
                  <span>О нас пишут</span>
                </a>
              </div>
            </section>

            <section class="about_edu block_default">
              <h5 class="block_default_title">Образование</h5>
              <div class="about_public_img">
                <img src={education} alt="Публикации в СМИ РАКИБ" />
              </div>
              <div class="about_edu_info">
                <p class="pb_15">РАКИБ регулярно взаимодействует с ведущими учебными заведениями России на предмет участия в образовательных программах, относящихся к сфере IT и цифровых технологий.</p>
                <p class="pb_15">В частности, в настоящий момент РАКИБ предлагает всем заинтересованным аудиториям пройти обучение по следующим программам:</p>
                <ul class="about_fact_list">
                  <li class="about_fact_list_item">Программа повышения квалификации РЭУ имени Г.В. Плеханова «Цифровая экономика и цифровые технологии для государственных и муниципальных служащих».
                    <a href="/" onclick={this.Fn.link} class="link pl_5">Ссылка на сайт программы.</a>
                  </li>
                  <li class="about_fact_list_item">Программа дополнительного образования BCL «Правовые основы и юридические практики работы с криптовалютой и блокчейн-проектами».
                    <a href="/" onclick={this.Fn.link} class="link pl_5">Ссылка на сайт программы.</a>
                  </li>
                  <li class="about_fact_list_item">РАКИБ предоставляет возможность участия в данных образовательных программах с индивидуальной скидкой при условии обращения по адресу: petrov@racib.com либо в личных сообщения на странице в
                    <a href="/" onclick={this.Fn.link} class="link pl_5">Facebook</a>
                  </li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  )
}