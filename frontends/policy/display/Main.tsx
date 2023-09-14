import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'

export default function () {
    return (
        <main
            class={["main", this.Variable.openSidebar ? null : "main_close"]}
        >
            <div class="wrapper">
                <a
                    class="back"
                    href="/"
                    onclick={this.Fn.link}
                >
                    <span class="back-icon">
                        <img src={back} />
                    </span>
                    <span class="back_title">Политика обработки персональных данных</span>
                </a>

                <section class="userAgreement privacy">
                    <p class="pb_10">Утверждена Президентом РАКИБ. Приказ № 3 от 17.10.2017</p>

                    <ul class="userAgreement_mainList">
                        <li class="userAgreement_mainList_item">
                            <h3 class="userAgreement_subtitle">1. Общие положения</h3>
                            <ol class="userAgreement_innerList">
                                <li class="userAgreement_innerList_item">Настоящая Политика обработки персональных данных (далее – Политика) составлена в соответствии с пунктом 2 статьи 18.1 Федерального закона «О персональных данных» № 152-ФЗ от 27 июля 2006 г. (далее – ФЗ «О персональных данных»), а также иными нормативными правовыми актами Российской Федерации в области защиты и обработки персональных данных и действует в отношении всех персональных данных, обрабатываемых в «Ассоциации разработчиков и пользователей технологии блокчейн и систем искусственного интеллекта и продуктов, созданных на их основе, в интересах развития цифровой экономики» (далее – Оператор).</li>
                                <li>Настоящая Политика разработана в целях реализации требований законодательства в области обработки и обеспечения безопасности персональных данных и направлена на обеспечение защиты прав и свобод человека и гражданина при обработке его персональных данных Оператором.</li>
                                <li>Положения настоящей Политики являются обязательными для исполнения всеми работниками Оператора, имеющими доступ к персональным данным.</li>
                                <li>Настоящая Политика является общедоступным документом и размещается на сайте Оператора https://racib.com.</li>
                            </ol>
                        </li>
                        <li class="userAgreement_mainList_item">
                            <h3 class="userAgreement_subtitle">2. Используемые термины и их определения</h3>
                            <ol class="userAgreement_innerList">
                                <li class="userAgreement_innerList_item">Персональные данные – любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу.</li>
                                <li class="userAgreement_innerList_item">Субъект персональных данных – физическое лицо, которое прямо или косвенно определено с помощью персональных данных.</li>
                                <li class="userAgreement_innerList_item">Общедоступные персональные данные – персональные данные, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных либо по его просьбе.</li>
                                <li class="userAgreement_innerList_item">Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</li>
                                <li class="userAgreement_innerList_item">Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).</li>
                                <li class="userAgreement_innerList_item">Распространение персональных данных – действия, направленные на раскрытие персональных данных неопределенному кругу лиц.</li>
                                <li class="userAgreement_innerList_item">Уничтожение персональных данных – действия, в результате которых становится невозможным восстановить содержание персональных данных в информационной системе персональных данных и (или) в результате которых уничтожаются материальные носители персональных данных.</li>
                                <li class="userAgreement_innerList_item">Обезличивание персональных данных — действия, в результате которых становится невозможным без использования дополнительной информации определить принадлежность персональных данных конкретному субъекту персональных данных.</li>
                            </ol>
                            <p class="pY_10">Оператор – организация, самостоятельно или совместно с другими лицами организующая обработку персональных данных, а также определяющая цели обработки персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.</p>
                            <p class="pb_10">Оператором является Общество с ограниченной ответственностью «РАКИБ-СЕРВИС»(РАКИБ), расположенная по адресу: 107045, г. Москва, Последний пер., 20.</p>
                            <p class="pb_10">Сайт Оператора – https://racib.com.</p>
                        </li>
                        <li class="userAgreement_mainList_item">
                            <h3 class="userAgreement_subtitle">3. Цели, порядок и условия обработки персональных данных</h3>
                            <ol class="userAgreement_innerList">
                                <li class="userAgreement_innerList_item">Для достижения целей обработки персональных данных Оператор осуществляет следующие операции с персональными данными: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (предоставление, доступ), блокирование, удаление, уничтожение персональных данных.</li>
                            </ol>
                            <p class="text_italics pY_10">Объем, характер и применяемые способы обработки персональных данных поддерживаются в соответствии с заявленными целями. Оператором осуществляются необходимые мероприятия по недопущению обработки персональных данных, избыточных по отношению к заявленным целям. Оператор осуществляет необходимые мероприятия для поддержания достоверности обрабатываемых персональных данных.</p>
                            <ol class="userAgreement_innerList">
                                <li class="userAgreement_innerList_item">Оператор осуществляет обработку персональных данных, как с использованием средств автоматизации, так и без использования таких средств. Использование средств автоматизации осуществляется Оператором исключительно при обработке персональных данных работников Оператора (смешанная обработка), персональные данные иных категорий субъектов персональных данных обрабатывается без использования средств автоматизации.</li>
                                <li class="userAgreement_innerList_item">Оператор осуществляет обработку персональных данных в целях:</li>
                                <li class="userAgreement_innerList_item">осуществления деятельности, предусмотренной Уставом Оператора;</li>
                                <li class="userAgreement_innerList_item">ведения кадрового, бухгалтерского и налогового учета, подбора персонала;</li>
                                <li class="userAgreement_innerList_item">предоставления отчётности контролирующим органам;</li>
                                <li class="userAgreement_innerList_item">заключения с субъектом персональных данных договоров и их дальнейшего исполнения;</li>
                                <li class="userAgreement_innerList_item">проведения Оператором акций, опросов, исследований;</li>
                                <li class="userAgreement_innerList_item">прием Оператором участников и членов;</li>
                                <li class="userAgreement_innerList_item">направление уведомлений, запросов и информации, касающихся деятельности Оператора, использования Сайта Оператора;</li>
                                <li class="userAgreement_innerList_item">статистических и иных исследований, при условии обязательного обезличивания персональных данных;</li>
                                <li class="userAgreement_innerList_item">осуществление прав и законных интересов Оператора или третьих лиц, либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных;</li>
                                <li class="userAgreement_innerList_item">достижение целей, предусмотренных международным договором Российской Федерации или законом, для осуществления и выполнения возложенных законодательством Российской Федерации на Оператора функций, полномочий и обязанностей.</li>
                                <li class="userAgreement_innerList_item">Обработка персональных данных осуществляется Оператором на законной и справедливой основе, правовыми основания для обработки являются:

                                    <ol class="userAgreement_innerList">
                                        <li class="userAgreement_innerList_item">Конституция Российской Федерации;</li>
                                        <li class="userAgreement_innerList_item">Трудовой кодекс Российской Федерации;</li>
                                        <li class="userAgreement_innerList_item">Гражданский кодекс Российской Федерации;</li>
                                        <li class="userAgreement_innerList_item">Налоговый кодекс Российской Федерации;</li>
                                        <li class="userAgreement_innerList_item">Федеральный закон от 12.01.1996 N 7-ФЗ «О некоммерческих организациях»;</li>
                                        <li class="userAgreement_innerList_item">Федеральный закон от 01.04.1996г. № 27-ФЗ «Об индивидуальном (персонифицированном) учете в системе обязательного пенсионного страхования»;</li>
                                        <li class="userAgreement_innerList_item">Федеральный закон от 24.07.2009г. № 212-ФЗ «О страховых взносах в Пенсионный Фонд РФ, Фонд социального страхования РФ, Федеральный Фонд обязательного медицинского страхования и территориальные фонды обязательного медицинского страхования»;</li>
                                        <li class="userAgreement_innerList_item">Устав Оператора;</li>
                                        <li class="userAgreement_innerList_item">Положение о членстве Оператора;</li>
                                        <li class="userAgreement_innerList_item">Договоры, заключаемые между Оператором и субъектами персональных данных;</li>
                                        <li class="userAgreement_innerList_item">Согласия на обработку персональных данных, полученные от субъектов персональных данных.</li>
                                    </ol>
                                </li>
                                <li class="userAgreement_innerList">Оператор осуществляет обработку персональных данных на основе общих принципов:
                                    <ol class="userAgreement_innerList">
                                        <li class="userAgreement_innerList_item">законности заранее определенных конкретных целей и способов обработки персональных данных;</li>
                                        <li class="userAgreement_innerList_item">обеспечения надлежащей защиты персональных данных;</li>
                                        <li class="userAgreement_innerList_item">соответствия целей обработки персональных данных целям, заранее определенным и заявленным при сборе персональных данных;</li>
                                        <li class="userAgreement_innerList_item">соответствия объема, характера и способов обработки персональных данных целям обработки персональных данных;</li>
                                        <li class="userAgreement_innerList_item">достоверности персональных данных, их достаточности для целей обработки, недопустимости обработки персональных данных, избыточных по отношению к целям, заявленным при сборе персональных данных;</li>
                                        <li class="userAgreement_innerList_item">недопустимости объединения баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой;</li>
                                        <li class="userAgreement_innerList_item">хранения персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели их обработки;</li>
                                        <li class="userAgreement_innerList_item">уничтожения или обезличивания персональных данных по достижении целей их обработки, если срок хранения персональных данных не установлен законодательством Российской Федерации, договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных;</li>
                                        <li class="userAgreement_innerList_item">обеспечения конфиденциальности и безопасности обрабатываемых персональных данных.</li>
                                        <li class="userAgreement_innerList_item">Обработка персональных данных осуществляется при соблюдении условий, определенных законодательством Российской Федерации.</li>
                                        <li class="userAgreement_innerList_item">Обработка персональных данных субъекта персональных данных осуществляется с его согласия на обработку персональных данных, а также без такового в случаях, предусмотренных законодательством о персональных данных.</li>
                                    </ol>
                                </li>
                            </ol>
                            <p class="text_italics pY_10">При отсутствии необходимости письменного согласия субъекта на обработку его персональных данных согласие субъекта может быть дано субъектом персональных данных или его представителем в любой позволяющей подтвердить факт его получения форме, в том числе путем проставления соответствующего признака при регистрации и/или заполнении формы на Сайте Оператора.</p>
                            <p class="pb_10">Оператор вправе осуществлять обработку персональных данных без согласия субъекта персональных данных в случае отзыва субъектом персональных данных своего согласия либо в случае если персональные данные были получены Оператором от лица, не являющегося субъектом персональных данных, при наличии следующих оснований:</p>
                            <ol class="userAgreement_innerList">
                                <li class="userAgreement_innerList_item">для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления и выполнения возложенных законодательством Российской Федерации на Оператора функций, полномочий и обязанностей;</li>
                                <li class="userAgreement_innerList_item">для осуществления правосудия, для исполнения судебного акта, акта другого органа или должностного лица, подлежащих исполнению в соответствии с законодательством Российской Федерации об исполнительном производстве;</li>
                                <li class="userAgreement_innerList_item">для исполнения договора, стороной которого либо выгодоприобретателем или поручителем, по которому является субъект персональных данных, а также для заключения договора по инициативе субъекта персональных данных или договора, по которому субъект персональных данных будет являться выгодоприобретателем или поручителем;</li>
                                <li class="userAgreement_innerList_item">для осуществления прав и законных интересов Оператора или третьих лиц;</li>
                                <li class="userAgreement_innerList_item">для достижения общественно значимых целей с соблюдением условий, при которых не нарушаются права и свободы субъекта персональных данных;</li>
                                <li class="userAgreement_innerList_item">доступ неограниченного круга лиц, к персональным данным предоставлен субъектом персональных данных либо по его просьбе (персональные данные, сделанные общедоступными субъектом персональных данных);</li>
                                <li class="userAgreement_innerList_item">персональные данные подлежат опубликованию или обязательному раскрытию в соответствии с федеральным законом.</li>
                            </ol>

                            <ul class="userAgreement_secondaryList pt_10">
                                <li class="userAgreement_secondaryList_item"><span class="text_bold">1.</span> Оператор вправе поручить обработку персональных данных другому лицу с согласия субъекта персональных данных, если иное не предусмотрено федеральным законом. Такая обработка персональных данных осуществляется только на основании договора, заключенного между Оператором и третьим лицом, в котором должны быть определены: перечень действий (операций) с персональными данными, которые будут совершаться третьим лицом, осуществляющим обработку персональных данных; цели обработки персональных данных; обязанности третьего лица соблюдать конфиденциальность персональных данных и обеспечивать их безопасность при обработке, а также требования к защите обрабатываемых персональных данных. Оператор несет ответственность перед субъектом персональных данных за действия лиц, которым Оператор поручает обработку персональных данных субъекта персональных данных.</li>
                                <li class="userAgreement_secondaryList_item"><span class="text_bold">2.</span> Оператор осуществляет передачу персональных данных государственным органам в рамках их полномочий в соответствии с законодательством Российской Федерации.</li>
                                <li class="userAgreement_secondaryList_item"><span class="text_bold">3.</span> Доступ к обрабатываемым персональным данным предоставляется только тем работникам Оператора, которым он необходим в связи с исполнением ими своих должностных обязанностей и с соблюдением принципов персональной ответственности.</li>
                                <li class="userAgreement_secondaryList_item"><span class="text_bold">4.</span> Обработка персональных данных прекращается при достижении целей такой обработки, а также по истечении срока, предусмотренного законом, договором, или согласием Субъекта персональных данных на обработку его персональных данных. При отзыве Субъектом персональных данных согласия на обработку его персональных данных Обработка осуществляется только в пределах, необходимых для исполнения заключенных с ним договоров и в целях, предусмотренных законодательством Российской Федерации.</li>
                                <li class="userAgreement_secondaryList_item"><span class="text_bold">5.</span> Обработка персональных данных осуществляется с соблюдением конфиденциальности, под которой понимается обязанность не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено законодательством Российской Федерации.</li>
                                <li class="userAgreement_secondaryList_item"><span class="text_bold">6.</span> Оператор обеспечивает конфиденциальность персональных данных субъекта персональных данных со своей стороны, со стороны своих работников, имеющих доступ к персональным данным физических лиц, а также обеспечивает использование персональных данных вышеуказанными лицами исключительно в целях, соответствующих закону, договору или иному соглашению, заключенному с субъектом персональных данных.</li>
                            </ul>
                        </li>
                        <li class="userAgreement_mainList_item">
                            <h3 class="userAgreement_subtitle">4. Категории персональных данных и субъектов персональных данных</h3>
                            <ol class="userAgreement_innerList">
                                <li class="userAgreement_innerList_item">Оператор обрабатывает персональные данные следующих категорий субъектов персональных данных:</li>
                                <li class="userAgreement_innerList_item">члены, участники Оператора, кандидаты в члены, в участники Оператора, руководители, представители членов, участников Оператора;</li>
                                <li class="userAgreement_innerList_item">лица, входящие в органы управления Оператора;</li>
                                <li class="userAgreement_innerList_item">работники Оператора, соискатели должностей, близкие родственники работников Оператора, бывшие работники Оператора;</li>
                                <li class="userAgreement_innerList_item">контрагенты, в том числе потенциальные, Оператора по гражданско-правовым договорам, представители физических и юридических лиц, являющиеся сторонами по гражданско- правовым договорам, заключенным Оператором;</li>
                                <li class="userAgreement_innerList_item">пользователи сайта Оператора;</li>
                                <li class="userAgreement_innerList_item">физические лица, персональные данные которых сделаны ими общедоступными, а их обработка не нарушает их прав и соответствует требованиям, установленным законодательством Российской Федерации;</li>
                                <li class="userAgreement_innerList_item">иные физические лица, выразившие согласие на обработку Оператором их персональных данных или физические лица, обработка персональных данных которых необходима Оператору для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления и выполнения возложенных законодательством Российской Федерации на Оператора функций, полномочий и обязанностей.</li>
                                <li class="userAgreement_innerList_item">Оператор обрабатывает следующие персональные данные субъектов персональных данных:</li>
                            </ol>
                            <p class="text_italics pY_10">фамилия, имя, отчество; дата, месяц, год рождения; регион проживания; номер и серия основного документа, удостоверяющего личность, кем и когда он был выдан; сведения о регистрации по месту жительства или пребывания; почтовый адрес; сведения об образовании; семейное положение; профессия; ИНН, СНИЛС; контактный телефон; адрес электронной почты (e-mail); адрес личного сайта в сети Интернете; сведения об учетных записях в социальных сетях Facebook, ВКонтакте (VK), Twitter и других; информация о трудовой деятельности (место работы, должность, трудовой стаж); информация о сфере и направлении деятельности; фотография.</p>
                            <p class="text_italics pb_10">Оператором могут обрабатываться иные персональные данные, непосредственно необходимые для выполнения целей обработки персональных данных.</p>
                            <p class="text_italics pb_10"></p>
                        </li>
                        <li class="userAgreement_mainList_item">
                            <h3 class="userAgreement_subtitle">5. Защита персональных данных</h3>
                            <p class="pY_10">Оператор применяет комплекс правовых, организационных и технических мер по обеспечению безопасности персональных данных для обеспечения конфиденциальности персональных данных и их защиты от неправомерных действий, которые включают:</p>
                            <ol class="userAgreement_innerList">
                                <li class="userAgreement_innerList_item">назначение лица, ответственного за обработку персональных данных, которое осуществляет организацию обработки персональных данных, обучение и инструктаж, внутренний контроль за соблюдением требований к защите персональных данных;</li>
                                <li class="userAgreement_innerList_item">определение актуальных угроз безопасности персональных данных при их обработке в информационных системах и разработку мер и мероприятий по защите персональных данных;</li>
                                <li class="userAgreement_innerList_item">установление правил доступа к персональным данным, а также обеспечение регистрации и учета всех действий, совершаемых с персональными данными;</li>
                                <li class="userAgreement_innerList_item">применение организационных и технических мер и использование средств защиты информации, необходимых для достижения установленного уровня защищенности персональных данных;</li>
                                <li class="userAgreement_innerList_item">определение угроз безопасности персональных данных при их обработке в информационной системе Оператора;</li>
                                <li class="userAgreement_innerList_item">обнаружение фактов несанкционированного доступа к персональным данным и принятие мер по реагированию, включая восстановление персональных данных, модифицированных или уничтоженных вследствие несанкционированного доступа к ним;</li>
                                <li class="userAgreement_innerList_item">оценку эффективности принимаемых мер по обеспечению безопасности персональных данных;</li>
                                <li class="userAgreement_innerList_item">обучение работников Оператора, непосредственно осуществляющих обработку персональных данных, положениям законодательства Российской Федерации о персональных данных, в том числе требованиям к защите персональных данных, документам, определяющим политику Оператора в отношении обработки персональных данных, локальным актам по вопросам обработки персональных данных.</li>
                                <li class="userAgreement_innerList_item">осуществление внутреннего контроля соответствия обработки персональных данных действующим нормативным правовым актам, требованиям к защите персональных данных, настоящей Политике и иным локальным актам Оператора.</li>
                            </ol>
                        </li>
                        <li class="userAgreement_mainList_item">
                            <h3 class="userAgreement_subtitle">6. Права Оператора и субъектов персональных данных</h3>
                            <p class="pY_10">Субъект персональных данных имеет право:</p>
                            <ol class="userAgreement_innerList">
                                <li class="userAgreement_innerList_item">получать информацию, касающуюся обработки его персональных данных, в порядке, форме и сроки, установленные законодательством о персональных данных;</li>
                                <li class="userAgreement_innerList_item">требовать уточнения своих персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, недостоверными, незаконно полученными, не являются необходимыми для заявленной цели обработки или используются в целях, не заявленных ранее при предоставлении субъектом персональных данных согласия на обработку персональных данных;</li>
                                <li class="userAgreement_innerList_item">принимать предусмотренные законом меры по защите своих прав;</li>
                                <li class="userAgreement_innerList_item">отозвать свое согласие на обработку персональных данных.</li>
                            </ol>
                            <p class="pY_10">Оператор имеет право:</p>
                            <ol class="userAgreement_innerList">
                                <li class="userAgreement_innerList_item">обрабатывать персональные данные субъекта персональных данных в соответствии с заявленной целью;</li>
                                <li class="userAgreement_innerList_item">требовать от субъекта персональных данных предоставления достоверных персональных данных, необходимых для исполнения договора, оказания услуги, идентификации субъекта персональных данных, а также в иных случаях, предусмотренных законодательством о персональных данных;</li>
                                <li class="userAgreement_innerList_item">ограничить доступ субъекта персональных данных к его персональным данным в случае, если обработка персональных данных осуществляется в соответствии с законодательством о противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма, доступ субъекта персональных данных к его персональным данным нарушает права и законные интересы третьих лиц, а также в иных случаях, предусмотренных законодательством Российской Федерации;</li>
                                <li class="userAgreement_innerList_item">обрабатывать общедоступные персональные данные физических лиц;</li>
                                <li class="userAgreement_innerList_item">осуществлять обработку персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с законодательством Российской Федерации;</li>
                                <li class="userAgreement_innerList_item">поручить обработку персональных данных другому лицу с согласия субъекта персональных данных.</li>
                            </ol>
                        </li>
                        <li class="userAgreement_mainList_item">
                            <h3 class="userAgreement_subtitle">7. Политика обработки файлов cookie</h3>
                            <ol class="userAgreement_innerList">
                                <li class="userAgreement_innerList_item">Посещая Сайт Оператора, пользователь Сайта соглашается на то, что Оператор может использовать файлы cookie и иные статистические данные, в том числе для их последующей обработки системами Google Analytics, Яндекс.Метрика, Appmetrica, Google Firebase и др., а также может передавать их третьим лицам для проведения исследований, выполнения работ или оказания услуг.</li>
                                <li class="userAgreement_innerList_item">Файлы cookie – текстовые файлы небольшого размера, которые сохраняются на устройстве пользователя (персональном компьютере, ноутбуке, планшете, мобильном телефоне и т.п.) в процессе посещения сайтов в сети «Интернет».</li>
                            </ol>
                            <p class="text_italics pY_10">Пользователь Сайта Оператора может самостоятельно управлять файлами cookie путем изменения настроек браузера. Изменения пользовательских настроек, в результате которых файлы cookies будут заблокированы, могут привести к недоступности отдельных компонентов Сайта Оператора.</p>
                            <ol class="userAgreement_innerList">
                                <li class="userAgreement_innerList_item">В зависимости от используемых пользователем Сайта браузера и устройства используются разные наборы файлов cookie, включающие в себя строго необходимые, эксплуатационные, функциональные и аналитические файлы cookie.</li>
                            </ol>
                            <p class="pY_10">Кроме того, при посещении Сайта Оператора может происходить автоматический сбор иных данных, в том числе: технических характеристик устройства, IP-адреса, информации об используемом браузере и языке, даты и времени доступа к Сайту, адресов запрашиваемых страниц Сайта и иной подобной информации.</p>
                            <ol class="userAgreement_innerList">
                                <li class="userAgreement_innerList_item">Файлы cookie могут использоваться для: обеспечения функционирования и безопасности сайта, улучшения качества сайта, регистрации пользователя на Сайте, предоставления пользователю информации об Операторе, его деятельности, персонализации функций Сайта Оператора, генерации «списка интересов», состоящего из случайного идентификатора, категории интереса и отметки времени для демонстрации интернет-контента и рекламных объявлений, соответствующих интересам пользователя.</li>
                            </ol>
                        </li>
                        <li class="userAgreement_mainList_item">
                            <h3 class="userAgreement_subtitle">8. Заключительные положения</h3>
                            <ol class="userAgreement_innerList">
                                <li class="userAgreement_innerList_item">Оператор, а также его должностные лица и работники несут гражданско-правовую, административную и иную ответственность за несоблюдение принципов и условий обработки персональных данных физических лиц, а также за разглашение или незаконное использование персональных данных в соответствии с законодательством Российской Федерации.</li>
                                <li>Оператор вправе вносить изменения или дополнения в настоящую Политику, в случае необходимости, а также в случае внесения соответствующих изменений в действующее законодательство Российской Федерации о персональных данных.</li>
                            </ol>
                        </li>
                    </ul>
                    <p class="pt_10">Для реализации своих прав и законных интересов субъекты персональных данных имеют право обратиться к Оператору либо направить запрос лично или с помощью представителя по электронной почте info@racib.com, либо по адресу: 107045, г. Москва, Последний пер., 20.</p>
                </section>
            </div>
        </main>
    )
}