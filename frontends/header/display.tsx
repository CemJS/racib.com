import { Cemjsx } from "cemjs-all"
import logo from '@svg/racib.svg'
import chat from '@svg/icons/chat.svg'
import info from '@svg/sidebar/info.svg'
import community from '@svg/sidebar/community.svg'
import catalog from '@svg/sidebar/catalog.svg'
import events from '@svg/sidebar/calendar.svg'
import news from '@svg/sidebar/news.svg'
import lenta from '@svg/sidebar/lenta.svg'
import videoBlog from '@svg/sidebar/video.svg'

const sidebarList = [
	{
		img: info,
		name: 'О РАКИБ',
		link: '/about',
	},
	{
		img: community,
		name: 'Сообщества',
		link: '/',
	},
	{
		img: catalog,
		name: 'Каталог',
		link: '/',
	},
	{
		img: events,
		name: 'Мероприятия',
		link: '/',
	},
	{
		img: news,
		name: 'Новости',
		link: '/news',
	},
	{
		img: lenta,
		name: 'Лента',
		link: '/',
	},
	{
		img: videoBlog,
		name: 'Видеоблог',
		link: '/',
	}
]

export const display = function () {
	return (
		<header class="header">
			<div
				class={["header_inner", this.Variable.openSidebar ? null : "header_close"]} >

				<div class="header_burger_wrap">
					<div
						class={["header_burger", this.Variable.openSidebar ? null : "header_burger_active"]}
						onclick={() => {
							this.Variable.openSidebar = !this.Variable.openSidebar;
							this.Fn.initAll();
						}}
					>
						<span></span>
					</div>
				</div>

				<div
					class="header_acc"
					onclick={() => {
						this.Ref.reg.classList.toggle('reg_window_active');
					}}
				>
					<span>Чат помощник</span>
					<img class="icon" src={chat} alt="Вход или регистрация" />
				</div>
			</div>
			{/* sidebar start */}
			<div
				class={["sidebar", this.Variable.openSidebar ? null : "sidebar_close"]}
			>
				<a href="/" onclick={this.Fn.link} class="logo_details">
					<img src={logo} alt="РАКИБ" />
					<span class="logo_details_name">РАКИБ</span>
				</a>
				<nav class="sidebar_nav">
					<ul class="sidebar_list">
						{
							sidebarList.map((item, index) => {
								return (
									<li class="sidebar_list_item">
										<a href={item.link} onclick={this.Fn.link}>
											<div class="sidebar_list_icon">
												<img src={item.img} alt={item.name} />
											</div>
											<span class="sidebar_list_name">{item.name}</span>
										</a>
										<ul class="sidebar_sublist">
											<li class="sidebar_sublist_item">
												<a href={item.link}>
													<span class="sidebar_sublist_name">{item.name}</span>
												</a>
											</li>
										</ul>
									</li>
								)
							})
						}
					</ul>
				</nav>
			</div>
			{/* sidebar end */}

			{/* registration start */}
			<div class="reg">
				<div class="reg_window" ref="reg">
					<div class="reg_content">
						<header class="reg_header">
							<div class="reg_tabs">
								<div class="reg_tabs_item reg_tabs_item_active">
									Вход
								</div>
								<div class="reg_tabs_item">
									Регистрация
								</div>
							</div>
						</header>
						<main class="reg_main">
							<div class="reg_main_content">
								<h2>Введите Ваш телефон для входа</h2>

								<div class="reg_main_fields">
									<div class="input-box">
										<div class="input_icon"></div>
										<input type="tel" />
										<label for="">Номер телефона</label>
									</div>
									<div class="input-box">
										<div class="input_icon"></div>
										<input type="password" />
										<label for="">Пароль</label>
									</div>
								</div>

								<p>Если во время регистрации вы не указали пароль, Выберите вариант  Вы можете задать его позднее в своей учетной записи</p>
							</div>

						</main>
						<footer class="reg_footer">
							<a href="" class="reg_footer_link">Обратиться в службу поддержки</a>
						</footer>
					</div>
				</div>
			</div>
			{/* registration end */}
		</header>
	)

}