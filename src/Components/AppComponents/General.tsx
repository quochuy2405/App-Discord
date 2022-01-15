import React from 'react'
import '../styles/General.scss'

interface General {
	channelChat?: Array<string>
}
function General(props: General) {
	const { channelChat } = props
	return (
		<div className="general">
			<div className="nav-general">
				<div className="general-channel-name">
					<p>Động lười</p>
				</div>
				<div className="body-switch">
					<p className="title-channel">
						<a data-toggle="collapse" href="#listGeneral" aria-expanded="false">
							Kênh chung <i className="fad fa-chevron-right"></i>
						</a>
					</p>

					<ul className="collapse listGeneraltag" id="listGeneral">
						<li>#Kênh học tập</li>
						<li>#Kênh giải trí</li>
						<li>#Kênh tào lao</li>
						<li>#Kênh đánh bạc</li>
					</ul>
				</div>
				<div className="body-switch">
					<p className="title-channel">
						<a data-toggle="collapse" href="#listGeneral1" aria-expanded="false">
							Kênh chung <i className="fad fa-chevron-right"></i>
						</a>
					</p>

					<ul className="collapse listGeneraltag" id="listGeneral1">
						<li>#Kênh học tập</li>
						<li>#Kênh giải trí</li>
						<li>#Kênh tào lao</li>
						<li>#Kênh đánh bạc</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default General
