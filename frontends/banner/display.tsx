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
							24 августа 2023, 10:00
						</span>
						<h5 class="home_banner_info_title">Противодействие использованию виртуальных активов в совершении преступлений и финансировании терроризма</h5>
						<span class="btn_link">Семинар</span>
						<p class="home_banner_info_desc">На базе МГИМО состоится  международный семинар Организации Объединенных Наций по противодействию использованию виртуальных активов в совершении преступлений, в том числе для финансировании терроризма.</p>
					</div>
				</section>
			</div>
		</div>

	)
}