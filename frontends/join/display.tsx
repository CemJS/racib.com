import { Cemjsx } from "cemjs-all"
import back from '@svg/icons/back.svg'


export const display = function () {
  return (
    <div class="main_wrap">
      <main
        class={["main", this.Variable.openSidebar ? null : "main_close"]}
      >
        <div class="wrapper">
          <a class="back" href="/" onclick={this.Fn.link}>
            <span class="back-icon">
              <img src={back} />
            </span>
            <span class="back_title">Главная</span>
          </a>
          <section class="join block_default">
            <p class="text join_text">Этапность действий, чтобы зарегистрироваться в Ассоциации:</p>
            <h3 class="join_title">1. Регистрация</h3>
            <p class="text join_text">Сначала, Вам необходимо зарегистрировать собственную анкету на нашем сайте. Сделать это можно по ссылке: racib.com/enter.</p>

            <h3 class="join_title">2. ДОКУМЕНТЫ ДЛЯ РЕГИСТРАЦИИ</h3>
            <p class="text join_text">Сразу после заполнения анкеты на странице регистрации, Вам должно прийти письмо со списком необходимых документов. Если этого не произошло, воспользуйтесь следующей информацией.</p>

            <p class="text_underline pb_10">Комплект документов для физических лиц:</p>
            <ul class="list">
              <li class="list_item text">Заявление о вступлении в РАКИБ (скачать шаблон в формате
                <a
                  href="/docs/zayavlenieFL.pdf"
                  class="link"
                  target="_blank"
                >
                  .pdf
                </a> )
              </li>
              <li class="list_item text">Копия паспорта (страница с именем, страница с пропиской)</li>
              <li class="list_item text">Согласие на обработку персональных данных (скачать шаблон в формате
                <a
                  href="/docs/racibSoglasie.pdf"
                  class="link"
                  target="_blank"
                >
                  .pdf
                </a>)
              </li>
              <li class="list_item text">Ваша фотография с паспортом в руках (в хорошо освещенном помещении)</li>
              <li class="list_item text">Документ об уплате членского взноса — платежное поручение с отметкой банка об исполнении платежа ( скачать пример в формате
                {/* не найден документ, запросить */}
                <a
                  // href=""
                  class="link"
                >
                  .pdf
                </a> )
              </li>
              <li class="list_item text">Фотография с паспортом необходима для полной удаленной верификации, мы дорожим репутацией наших участников и членов Ассоциации.</li>
            </ul>

            <p class="text_underline pb_10">Комплект документов для юридических лиц:</p>
            <ul class="list">
              <li class="list_item text">Заявление о вступлении в РАКИБ (скачать в формате
                <a
                  href="/docs/zayavlenieUL.pdf"
                  class="link"
                  target="_blank"
                >
                  .pdf
                </a>)
              </li>
              <li class="list_item text">Свидетельство (лист записи) о государственной регистрации юридического лица;</li>
              <li class="list_item text">Свидетельство о постановке на учет в налоговом органе;</li>
              <li class="list_item text">Протокол / решение уполномоченного органа управления об избрании (назначении) руководителя организации;</li>
              <li class="list_item text">Действующая редакция устава организации с изменениями (при наличии);</li>
              <li class="list_item text">Документ об уплате членского взноса;</li>
            </ul>

            <p class="text">Реквизиты уплате членского взноса (для российских контрагентов):</p>
            <p class="text">р/с 40703810838000007695 в ПАО Сбербанк</p>
            <p сlass="text join_text">к/с 30101810400000000225 БИК 044525225</p>

            <p class="text join_text">Пример. Назначение платежа: Ежегодный членский взнос (размер платежа: 50 000 (Пятьдесят тысяч) рублей)</p>

            <p class="text text join_text">Все документы нужно отправить по вашей электронной почте, с которой вы проходили регистрацию на нашу почту <span class="text_bold">members@racib.com</span>. Пожалуйста, прикрепите все необходимые документы одним письмом, ничего не забудьте.</p>

            <p class="text join_text">Как правило, скан-копию заполненных и подписанных необходимых документов нужно отправить не позднее 7 (семи) календарных дней на адрес электронной почты <span class="text_bold">members@racib.com</span> в формате PDF, одним письмом.</p>

            <p class="text join_text">Для юридических лиц необходимо отправить оригинал заявления и заверенные копии документов по адресу: 127051, г. Москва, ул. Неглинная д.17 стр.2. не позднее 30 (тридцати) календарных дней с даты направления документов в электронном виде.</p>

            <p class="text join_text">В случае неполучения Ассоциацией документов предварительная анкета будет считаться неподтвержденной. Публикация полной информации о заявителе в качестве члена Ассоциации будет осуществлена только после получения оригиналов документов (это касается юридических лиц).</p>

            <h3 class="join_title">3. ПОЛУЧИТЬ СВИДЕТЕЛЬСТВО О РЕГИСТРАЦИИ</h3>
            <p class="text join_text">Свидетельство в бумажном виде о статусе члена Ассоциации РАКИБ мы выдаем в офисе РАКИБ или на ближайшем официальном мероприятии. Скан свидетельства может быть отправлен на почту, указанную при регистрации.</p>

            <p class="text">При необходимости, свидетельство может быть отправлено почтовым отправлением в регион РФ.</p>

            <div class="join_footer">
              <p class="join_title">Шаблоны и образцы документов:</p>
              <ul>
                <li class="text">
                  <a href="/docs/zayavlenieFL.pdf" class="link" target="_blank">
                    Заявление на вступлление.pdf
                  </a>
                </li>
                <li class="text">
                  <a href="/docs/racibSoglasie.pdf" class="link" target="_blank">Согласие на обработку персональных данных.pdf</a>
                </li>
                <li class="text">
                  <a href="/docs/informatsionnoePismo.pdf" class="link" target="_blank">
                    Документ об уплате членского взноса.pdf</a>
                </li>
                <li class="text">
                  <a href="/docs/zayavlenieUL.pdf" class="link" target="_blank">Заявление о вступлении в РАКИБ (для юридических лиц).pdf</a>
                </li>
              </ul>

            </div>

          </section>
        </div>
      </main>
    </div>

  )
}