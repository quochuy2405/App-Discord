import React, { useEffect, useState } from 'react'
import Channel from '../Components/BigComponents/Channel'
import General from '../Components/BigComponents/General'
import Home from '../Components/BigComponents/Home'
import './Styles/Landing.scss'
function Landing() {
	const [type, setType] = useState('0')
	const [appBody, setAppBody] = useState(<></>)
	useEffect(() => {
		const tagChannel = document.querySelectorAll('.channel-switch')
		if (tagChannel) {
			tagChannel?.forEach((item) => {
				item.addEventListener('click', () => {
					const dataType = item.getAttribute('data-type')
					if (dataType) setType(dataType)
				})
			})
		}
	}, [])
	useEffect(() => {
		switch (type) {
			case '0': {
				setAppBody(<Home />)
				break
			}

			default: {
				setAppBody(<General />)
				break
			}
		}
	}, [type])
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
		const audio = document.querySelector('.audio-mouse')
		audio?.addEventListener('click', () => {
			const up = document.querySelector('.fa-volume-up.show')
			if (up) {
				document.querySelector('.fa-volume-up')?.classList.remove('show')
				document.querySelector('.fa-volume-slash')?.classList.add('show')
			} else {
				document.querySelector('.fa-volume-slash')?.classList.remove('show')
				document.querySelector('.fa-volume-up')?.classList.add('show')
			}
		})
	}, [])
	return (
		<div className="layouts">
			<div className="header">
				<div className="audio-mouse sound">
					<i className="fad fa-volume-up show"></i>
					<i className="fad fa-volume-slash"></i>
				</div>
				<div className="nav-top">
					<p className="app-name">Rysass</p>
				</div>
				<div className="nav-left">
					<ul className="list-channel">
						<li data-type="0" className="channel-switch sound active">
							<Channel />
						</li>
						<li data-type="1" className="channel-switch sound">
							<Channel />
						</li>
						<li data-type="2" className="channel-switch sound">
							<Channel />
						</li>
						<li data-type="3" className="channel-switch sound">
							<Channel />
						</li>
					</ul>
				</div>
			</div>
			<div className="app-body">{appBody}</div>
		</div>
	)
}

export default Landing
