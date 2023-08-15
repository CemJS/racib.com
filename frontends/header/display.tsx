import { Cemjsx } from "cemjs-all"
import logo from '@images/logo.png'
import user from '@svg/icons/user.svg'
import chat from '@svg/icons/chat.svg'
import search from '@svg/sidebar/search.svg'
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
		link: '/',
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
		link: '/',
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
			<div class="header_inner" ref="header">
				<div
					class="header_burger"
					ref="burger"
					onclick={() => {
						this.Ref.burger.classList.toggle('header_burger_active');
						this.Ref.sidebar.classList.toggle('sidebar_close');
						this.Ref.header.classList.toggle('header_close');
						this.Static.openSidebar = !this.Static.openSidebar;
						console.log('=e06f61=', this.Static.openSidebar)
						// this.Ref.footer.classList.toggle('footer_close');
					}}
				>
					<span></span>
				</div>
				<div class="header_acc">
					<div>
						<img class="icon" src={chat} alt="Вход или регистрация" />
					</div>
					<div class="header_input">
						<span>Вход</span>
						<img class="icon" src={user} alt="Вход или регистрация" />
					</div>
				</div>
			</div>
			{/* sidebar */}
			<div class="sidebar" ref="sidebar">
				<div class="logo_details">
					<img src={logo} alt="РАКИБ" />
					<span class="logo_details_name">РАКИБ</span>
				</div>
				<nav class="sidebar_nav">
					<ul class="sidebar_list">
						{
							sidebarList.map((item, index) => {
								return (
									<li class="sidebar_list_item">
										<a href={item.link}>
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
			{/* sidebar */}
		</header>
	)

}