import { Cemjsx } from "cemjs-all"
import footerLogo from '@images/footerLogo.png'
import telegram from '@svg/socials/telegram.svg'
import vk from '@svg/socials/vk.svg'
import youtube from '@svg/socials/youtube.svg'
import twitter from '@svg/socials/twitter.svg'
import logoCem from '@svg/logoCem.svg'

const links = [
	{
		name: "Дирекция РАКИБ",
		link: '/'
	},
	{
		name: "Как продлить?",
		link: '/'
	},
	{
		name: "Экспертный совет",
		link: '/'
	},
	{
		name: "Правление РАКИБ",
		link: '/'
	},
	{
		name: "О нас пишут",
		link: '/'
	},
	{
		name: "Как вступить?",
		link: '/'
	},
	{
		name: "Пользовательское соглашение",
		link: '/'
	},
	{
		name: "Политика обработки персональных данных",
		link: '/'
	},
	{
		name: "Реклама на сайте",
		link: '/'
	},
]

const socials = [
	{
		name: 'Vkontakte',
		icon: vk,
		link: '/',
	},
	{
		name: 'Telegram',
		icon: telegram,
		link: '/',
	},
	{
		name: 'Youtube',
		icon: youtube,
		link: '/',
	},
	{
		name: 'Twitter',
		icon: twitter,
		link: '/',
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
							<img src={footerLogo} alt="РАКИБ" />
							<p>Ассоциация разработчиков и пользователей технологии блокчейн и систем искусственного интеллекта и продуктов, созданных на их основе, в интересах развития цифровой экономики.</p>
							<div class="footer_mailing">
								<div class="input-box">
									<div class="input_icon"></div>
									<input type="email" />
									<label for="">Номер телефона</label>
								</div>
							</div>
							<p>Подписываясь на рассылку новостей вы соглашаетесь с политикой обработки персональных данных</p>
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
							<h6 class="footer_title">Социальные сети</h6>
							<ul class="footer_socials_wrap">
								{
									socials.map(item => {
										return (
											<li class="footer_socials_item">
												<a href={item.link} class="footer_socials_link">
													<img src={item.icon} alt={item.name} />
												</a>
											</li>
										)
									})
								}
							</ul>
							<h6 class="footer_title">По вопросам рекламы</h6>
							<a href="mailto:info@muvis.media" class="footer_socials_email">info@muvis.media</a>
						</div>
					</div>
					<div class="footer_powered">
						<span>РАКИБ © 2021 - 2023, Все права защищены.</span>
						<span class="cem">
							<img class="footer_icon" src={logoCem} alt="Powered by Crypto Emergency" />
							Powered by Crypto Emergency
						</span>
					</div>
				</div>
			</footer>
		</div>

	)
}