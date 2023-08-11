import { Cemjsx } from "cemjs-all"
import user from '@svg/icons/user.svg'
import chat from '@svg/icons/chat.svg'

export const display = function () {
	return (
		<header class="header">
			<div>
				<img class="icon" src={chat} alt="Вход или регистрация" />
			</div>
			<div>
				<span>Вход</span>
				<img class="icon" src={user} alt="Вход или регистрация" />
			</div>
		</header>
	)

}