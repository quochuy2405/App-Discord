import React, { useContext } from 'react'
import { AuthContext } from '../../Auth/AuthProvider'
import { formatRelative } from 'date-fns'
import './styles/Chatcontent.scss'
interface chatContent {
	username?: string
	avata?: string
	text?: string
	date_time?: number
	Userid?: string
}
const timestamp = (seconds: number) => {
	let formatDate = ''
	if (seconds) {
		formatDate = formatRelative(new Date(seconds * 1000), new Date())
		formatDate = formatDate.charAt(0).toUpperCase() + formatDate.slice(1)
	}
	return formatDate
}
function Chatcontent(props: chatContent) {
	const { username, avata, text, date_time, Userid } = props
	const { ...user } = useContext<any>(AuthContext)

	return (
		<div className="chat-content">
			<div className={`user ${Userid === user?.uid && 'isUser'}`}>
				{Userid === user?.uid ? (
					<>
						<div className="date-time"></div>
						<div className="username">
							<p>{username}</p>
						</div>
						<img
							className="avata"
							src={
								avata ||
								'https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ'
							}
							alt=""
						/>
					</>
				) : (
					<>
						<img
							className="avata"
							src={
								avata ||
								'https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ'
							}
							alt=""
						/>
						<div className="username">
							<p>{username}</p>
						</div>
					</>
				)}
			</div>
			<div className={`content ${Userid === user?.uid && 'isUser'}`}>
				<p className="time">{date_time && timestamp(date_time)}</p>
				<p className="text context-text">{text}</p>
			</div>
		</div>
	)
}

export default Chatcontent
