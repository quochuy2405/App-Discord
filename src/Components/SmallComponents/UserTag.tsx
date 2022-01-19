import React from 'react'
import './styles/UserTag.scss'
import imgae from '../../Sound/user.jpg'
interface User {
	photoURL?: string
	displayName?: string
	status?: number
}
function UserTag(user: User) {
	const { photoURL, displayName, status = 1 } = user
	const handleEvent = (e: any) => {
		e.target.src = imgae
	}
	return (
		<div className="user-tag">
			<div className="avata">
				<img onError={handleEvent} src={photoURL || imgae} alt="" />
			</div>
			<div className="name">
				<p>{displayName}</p>
			</div>
			<div className={`status status-${status}`}></div>
		</div>
	)
}

export default UserTag
