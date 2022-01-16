import React from 'react'
import './styles/Chatcontent.scss'
interface chatContent {
	username?: string
	avata?: string
	content?: string
	date_time?: Date
	isUser?: Boolean
}
function Chatcontent(props: chatContent) {
	const {
		username = 'HuyBui',
		avata,
		content = 'Hôm nay vui ghê',
		date_time = new Date(Date.now()),
		isUser,
	} = props
	return (
		<div className="chat-content">
            <div className={`user ${isUser&&"isUser"}`}>
				{isUser ? (
					<>
						<div className="date-time">
							<p className="time">{`${date_time.getDate()}/${
								date_time.getMonth() + 1
							}/${date_time.getFullYear()}`}</p>
						</div>
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
						<div className="date-time">
							<p className="time">{`${date_time.getDate()}/${
								date_time.getMonth() + 1
							}/${date_time.getFullYear()}`}</p>
						</div>
					</>
				)}
			</div>
			<div className="content">
				<p className="text context-text">
					Generally the framework finds the SCSS file that matches the name of your TS file found in
					the same folder. You don't need to import this yourself. – Diodeus - James MacFarlane Jun
					12 '19 at 13:36 1 What framework? – Kay Jun 12 '19 at 13:37 3 If i have many .scss files i
					need to import them into react to use them. Sorry im misunderstanding your point? – Kay
					Jun 12 '19 at 13:37 1 Are you saying i don't need to import any scss files into my tsx
					files? What if the scss file is located in a sub directory and i wanted to use it in a tsx
					file located in another directory... or they were named differently? – Kay Jun 12 '19 at
					13:40 2 ye i did in the src of your react app add a global.d.ts file inside add declare
					module "*.scss"; – Kay Jul 25 '19 at 11:00
				</p>
			</div>
		</div>
	)
}

export default Chatcontent
