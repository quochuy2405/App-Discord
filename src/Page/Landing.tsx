import React, { useEffect } from 'react'
import Channel from '../Components/AppComponents/Channel'
import General from '../Components/AppComponents/General'
import '../Styles/Landing.scss'
function Landing() {
	useEffect(() => {
		const listChannel = document.querySelectorAll('.channel-switch')
		listChannel?.forEach((item) => {
			item.addEventListener('click', () => {
				const activeChannel = document.querySelector('.channel-switch.active')
				if (activeChannel !== item) {
					activeChannel?.classList.remove('active')
					item.classList.add('active')
				}
			})
		})
	}, [])
	return (
		<div className="layouts">
			<div className="header">
				<div className="nav-top">
					<p className="app-name">Rysass</p>
				</div>
				<div className="nav-left">
					<ul className="list-channel">
						<li className="channel-switch active">
							<Channel />
						</li>
						<li className="channel-switch">
							<Channel />
						</li>
						<li className="channel-switch">
							<Channel />
						</li>
						<li className="channel-switch">
							<Channel />
						</li>
					</ul>
				</div>
			</div>
			<div className="app-body">
				<General />
			</div>
		</div>
	)
}

export default Landing
