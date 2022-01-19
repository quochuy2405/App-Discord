import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import './styles/channel.scss'
import useImage from '../../Sound/icon.png'
interface ChannelProps {
	item?: any
}
function Channel(props: ChannelProps) {
	const {  item } = props
	return (
		<div className="channel">
			<Tooltip title={`${item?.name || 'Chưa có tên'}`} placement="right-start">
				<img className="channel-img" src={item.photoURL || useImage} alt="" />
			</Tooltip>
		</div>
	)
}

export default Channel
