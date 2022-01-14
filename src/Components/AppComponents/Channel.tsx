import React from 'react'
import '../styles/channel.scss'
interface ChannelProps{
    isActive?:string
}
function Channel(props: ChannelProps) {
    const { isActive } = props;
	return (
		<div className="channel">
			<img
				className="channel-img"
				src="https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ"
				alt=""
			/>
		</div>
	)
}

export default Channel
