import { Cemjsx } from "cemjs-all"
import logo from '@svg/racib.svg'
import chat from '@svg/icons/chatHelper.svg'
import letter from '@svg/sidebar/letterDark.svg'
import phone from '@svg/sidebar/phoneDark.svg'
import sidebarArrow from '@svg/sidebar/sidebarArrow.svg'

import sidebarList from '@json/sidebar'
import socials from '@json/socials'

export const display = function () {
	return (
		<header class="header">
			<div
				class={["header_inner", this.Variable.openSidebar ? null : "header_close"]} >
				<div
					class={["header_burger", this.Variable.openSidebar ? null : "header_burger_active"]}
					ref="burger"
					onclick={(e) => {
						this.Variable.openSidebar = !this.Variable.openSidebar;
						this.Fn.initAll();
					}}
				>
					<img src={sidebarArrow} alt="Toggle sidebar" />
				</div>

				<div
					class="header_acc"
					onclick={() => {
						this.Fn.initOne({
							name: "modalSoon"
						})
					}}
				>
					<span>Чат помощник</span>
					<img class="icon" src={chat} alt="Вход или регистрация" />
				</div>
			</div>

			{/* sidebar start */}
			<div
				class={["sidebar", this.Variable.openSidebar ? null : "sidebar_close"]}
				ref="sidebar"
				ontouchstart={(e) => {
					this.Static.startTouch = e.targetTouches[0].clientX;
				}}

				ontouchmove={(e) => {
					this.Static.endTouch = e.targetTouches[0].clientX;
				}}

				ontouchend={(e) => {
					if (this.Static.startTouch - this.Static.endTouch > 45) {
						this.Variable.openSidebar = false;
						this.Fn.initAll();
					}
				}}
			>
				<a href="/" onclick={this.Fn.link} class="logo_details">
					<img src={logo} alt="РАКИБ" />
					<span class="logo_details_name">РАКИБ</span>
				</a>

				<div class="sidebar_inner">
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
					<div class="sidebar_info">
						<p>Актуальная информация о проектах и событиях цифрового сообщества в нашем телеграм-канале:</p>
						<a href="https://t.me/racibpro" onclick={this.Fn.link} class="btn_link btn_link_dark">Перейти в канал</a>
					</div>
					<nav class="sidebar_nav">
						<ul class="sidebar_list">
							<li class="sidebar_list_item">
								<a href="mailto:info@racib.com" onclick={this.Fn.link}>
									<div class="sidebar_list_icon">
										<img src={letter} alt="Email" />
									</div>
									<span class="sidebar_list_name">info@racib.com</span>
								</a>
								<ul class="sidebar_sublist">
									<li class="sidebar_sublist_item">
										<a href="mailto:info@racib.com">
											<span class="sidebar_sublist_name">info@racib.com</span>
										</a>
									</li>
								</ul>
							</li>
							<li class="sidebar_list_item">
								<a href="tel:+74992724888" onclick={this.Fn.link}>
									<div class="sidebar_list_icon">
										<img src={phone} alt="Отправить сообщение" />
									</div>
									<span class="sidebar_list_name">8 (499) 272-48-88</span>
								</a>
								<ul class="sidebar_sublist">
									<li class="sidebar_sublist_item">
										<a href="tel:+74992724888" onclick={this.Fn.link}>
											<span class="sidebar_sublist_name">8 (499) 272-48-88</span>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</nav>

					<ul class="sidebar_socials">
						{
							socials.map(item => {
								return (
									<li class="sidebar_socials_item">
										<a href={item.link} class="sidebar_socials_link" target="_blank">
											<img src={item.icon} alt={item.name} class="sidebar_socials_icon" />
										</a>
									</li>
								)
							})
						}
					</ul>
				</div>



			</div>
			{/* sidebar end */}

		</header>
	)

}