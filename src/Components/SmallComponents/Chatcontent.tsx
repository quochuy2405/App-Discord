import Box from '@mui/material/Box'
import Grow from '@mui/material/Grow'
import { formatRelative } from 'date-fns'
import React, { useContext } from 'react'
import { AuthContext } from '../../Auth/AuthProvider'
import useImage from '../../Sound/user.jpg'
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
					<div className="username">
						<p>{username}</p>
					</div>
					<img className="avata" src={avata || useImage} alt="" />
				</div>
			)}
			<div className={`content ${Userid === user?.uid && 'isUser'}`}>
				<p className="text context-text">{text}</p>
				<p className="time">{timestamp(date_time)}</p>
			</div>
		</div>
	)
	return (
		<Box>
			<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 500 } : {})}>
				{icon}
			</Grow>
		</Box>
	)
}

export default Chatcontent
