import React, { useContext } from 'react'
import { Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import Paper from '@mui/material/Paper'
import Grow from '@mui/material/Grow'
import FormControlLabel from '@mui/material/FormControlLabel'

import { AuthContext } from '../../Auth/AuthProvider'
import { formatRelative } from 'date-fns'
import './styles/Chatcontent.scss'
interface chatContent {
	username?: string
	avata?: string
	text?: string
	date_time?: number
	Userid?: string
	messages?: any
	index: number
}
const timestamp = (seconds?: number) => {
	let formatDate = ''
	if (seconds) {
		formatDate = formatRelative(new Date(seconds * 1000), new Date())
		formatDate = formatDate.charAt(0).toUpperCase() + formatDate.slice(1)
	}
	return formatDate
}

function Chatcontent(props: chatContent) {
	const { username, avata, text, date_time, Userid, messages, index } = props
	const { ...user } = useContext<any>(AuthContext)
	const icon = (
		<div className={`chat-content ${Userid === user?.uid && 'isUser'}`}>
			{messages[index - 1]?.uid !== Userid && (
				<div className={`user ${Userid === user?.uid && 'isUser'}`}>
					{Userid === user?.uid ? (
						<>
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
			)}
			<div className={`content ${Userid === user?.uid && 'isUser'}`}>
				<p className="time">{timestamp(date_time)}</p>
				<p className="text context-text">{text}</p>
			</div>
		</div>
	)
	return (
		<Box>
			<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
				{icon}
			</Grow>
		</Box>
	)
}

export default Chatcontent
