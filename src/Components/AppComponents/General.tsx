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
				<p>
					<a data-toggle="collapse" href="#listGeneral" aria-expanded="false">
						Kênh chung
					</a>
				</p>

				<ul className="collapse" id="listGeneral">
					<li>ok</li>
					<li>ok</li>
					<li>ok</li>
					<li>ok</li>
				</ul>
			</div>
		</div>
	)
}

export default General
