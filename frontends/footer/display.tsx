import { Cemjsx } from "cemjs-all"
import footerLogo from '@images/footerLogo.png'
import telegram from '@svg/socials/telegram.svg'
import vk from '@svg/socials/vk.svg'
import youtube from '@svg/socials/youtube.svg'
import twitter from '@svg/socials/twitter.svg'
import logoCem from '@svg/logoCem.svg'
import phone from '@svg/icons/light/phoneLight.svg'

const links = [
	// {
	// 	name: "Дирекция РАКИБ",
	// 	link: '/'
	// },
	// {
	// 	name: "Как продлить?",
	// 	link: '/'
	// },
	// {
	// 	name: "Экспертный совет",
	// 	link: '/'
	// },
	// {
	// 	name: "Правление РАКИБ",
	// 	link: '/'
	// },
	{
		name: "О РАКИБ",
		link: '/about'
	},
	{
		name: "Как вступить?",
		link: '/join'
	},
	{
		name: "Пользовательское соглашение",
		link: '/userAgreement'
	},
	{
		name: "Политика обработки персональных данных",
		link: '/privacy'
	},
	// {
	// 	name: "Реклама на сайте",
	// 	link: '/'
	// },
]

const socials = [
	{
		name: 'Vkontakte',
		icon: vk,
		link: 'https://vk.com/racib2021',
	},
	{
		name: 'Telegram',
		icon: telegram,
		link: 'https://t.me/racibpro',
	},
	{
		name: 'Youtube',
		icon: youtube,
		link: 'https://www.youtube.com/channel/UCWIPNURlkElInBjiqIpRWYg',
	},
	{
		name: 'Twitter',
		icon: twitter,
		link: 'https://twitter.com/RACIBcom',
	},
]

export const display = function () {
	return (

		<div class="footer_wrap">
			<footer class={["footer",
				this.Variable.openSidebar ? null : "footer_close"]}>

				<div class="wrapper">
					<div class="footer_inner">
						<div class="footer_info">
							<div class="footer_logo">
								<img src={footerLogo} alt="РАКИБ" />
							</div>
							<p class="footer_text">Ассоциация разработчиков и пользователей технологии блокчейн и систем искусственного интеллекта и продуктов, созданных на их основе, в интересах развития цифровой экономики.</p>
							<div class="footer_mailing">
								<div class="input">
									<span class="input_icon">
										<img src={phone} alt="Номер телефона" />
									</span>
									<input
										class="input_field"
										onchange={() => {
											if (this.Ref.footerInput.value.length > 0) {
												this.Ref.footerLabel.classList.add('input_label_valid');
											}
											if (this.Ref.footerInput.value.length === 0) {
												this.Ref.footerLabel.classList.remove('input_label_valid');
											}
										}}
										type="tel"
										id="phone"
										ref="footerInput" />
									<label for="phone" class="input_label" ref="footerLabel">Номер телефона</label>
								</div>
								<button class="btn_link">Подписаться</button>
							</div>
							<p class="footer_text_mailing">Подписываясь на рассылку новостей вы соглашаетесь с политикой обработки персональных данных</p>
						</div>
						<div class="footer_links">
							<h6 class="footer_title">Полезные ссылки</h6>
							<ul class="footer_useful_links">
								{
									links.map(item => {
										return (
											<li class="footer_useful_links_item">
												<a href={item.link}>{item.name}</a>
											</li>
										)
									})
								}
							</ul>
						</div>
						<div class="footer_socials">
							<div>
								<h6 class="footer_title">Социальные сети</h6>
								<ul class="footer_socials_wrap">
									{
										socials.map(item => {
											return (
												<li class="footer_socials_item">
													<a href={item.link} class="footer_socials_link" onclick={this.Fn.link}>
														<img src={item.icon} alt={item.name} />
													</a>
												</li>
											)
										})
									}
								</ul>
							</div>
							{/* <div>
								<h6 class="footer_title">По вопросам рекламы</h6>
								<a href="mailto:info@muvis.media" class="footer_socials_email">info@muvis.media</a>
							</div> */}





						</div>
						<span class="footer_racib">РАКИБ © 2021 - 2023, Все права защищены.</span>
						<span class="footer_powered">
							<img class="footer_icon" src={logoCem} alt="Powered by Crypto Emergency" />
							Powered by Crypto Emergency
						</span>
					</div>
				</div>
			</footer>
		</div>

	)
}