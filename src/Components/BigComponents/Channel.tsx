import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import './styles/channel.scss'
interface ChannelProps {
	isActive?: string
	item?: any
}
function Channel(props: ChannelProps) {
	const { isActive, item } = props
	return (
		<div className="channel">
			<Tooltip title={`${item?.name || 'Chưa có tên'}`} placement="right-start">
				<img
					className="channel-img"
					src="https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ"
					alt=""
				/>
			</Tooltip>
		</div>
	)
}

export default Channel
