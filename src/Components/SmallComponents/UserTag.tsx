import React from 'react'
import './styles/UserTag.scss'
interface User {
	avata?: string
	name?: string
	status?: number
}
function UserTag(user: User) {
	const { avata, name = 'HuyBui', status = 1 } = user
	return (
		<div className="user-tag">
			<div className="avata">
				<img
					src={
						avata ||
						'https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ'
					}
					alt=""
				/>
			</div>
			<div className="name">
				<p>{name}</p>
			</div>
			<div className={`status status-${status}`}></div>
		</div>
	)
}

export default UserTag
