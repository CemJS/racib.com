import { Cemjsx } from "cemjs-all"
import arrowR from '@svg/icons/arrowR.svg'
import calendar from '@svg/icons/date.svg'

export const display = function () {
	return (

		<div class="wrapper">
			<div
				// class="wrapper banner_wrap"
				class={["banner_wrap",
					this.Variable.openSidebar ? null : "banner_wrap_close"]}
			>
				<section class="home_link link_block">
					<a href="/" onclick={this.Fn.link}>
						<img src={arrowR} class="link_block_icon" />
						<span>III ЕЖЕГОДНЫЙ САММИТ ПО КРИПТОВАЛЮТАМ И БЛОКЧЕЙН - ТЕХНОЛОГИЯМ</span>
					</a>
				</section>
				<section class="home_banner">
					<div class="home_banner_info">
						<span class="home_banner_info_date">
							<img src={calendar} alt="Дата мероприятия" />
							26 сентября 2023
						</span>
						<h5 class="home_banner_info_title">Развитие и регулирование экосистем в России: на пути к цифровому равенству</h5>
						<span class="btn_link">Форум</span>
						<p class="home_banner_info_desc">Национальный форум</p>
					</div>
				</section>
			</div>
		</div>

	)
}