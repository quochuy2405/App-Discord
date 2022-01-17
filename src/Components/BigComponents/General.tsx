import React from 'react'
import './styles/General.scss'
import UserTag from './../SmallComponents/UserTag'
import Chatcontent from './../SmallComponents/Chatcontent';


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
					<p className="title-channel sound">
						<a data-toggle="collapse" href="#listGeneral" aria-expanded="true">
							Kênh chung <i className="fad fa-chevron-right"></i>
						</a>
					</p>

					<ul className="collapse listGeneraltag show" id="listGeneral">
						<li className="tag-channel sound">#Kênh học tập</li>
						<li className="tag-channel sound">#Kênh giải trí</li>
						<li className="tag-channel sound">#Kênh tào lao</li>
						<li className="tag-channel sound">#Kênh đánh bạc</li>
					</ul>
				</div>
				<div className="body-switch">
					<p className="title-channel sound">
						<a data-toggle="collapse" href="#listGeneral1" aria-expanded="true">
							Kênh học tập <i className="fad fa-chevron-right"></i>
						</a>
					</p>

					<ul className="collapse listGeneraltag show" id="listGeneral1">
						<li className="tag-channel sound">#Kênh học tập</li>
						<li className="tag-channel sound">#Kênh giải trí</li>
						<li className="tag-channel sound">#Kênh tào lao</li>
						<li className="tag-channel sound">#Kênh đánh bạc</li>
					</ul>
				</div>
			</div>
			<div className="body-general">
				<div className="nav-body-general">
					<p>#Chung</p>
				</div>
				<div className="body-chat">
					<div className="body-chat-render">
						<Chatcontent isUser={true} />
						<Chatcontent />
						<Chatcontent />
						<Chatcontent isUser={true} />
						<Chatcontent />
						<Chatcontent isUser={true} />
						<Chatcontent />
						<div className="chat-form">
							<form action="" className="form-chat">
								<input type="text" className="input-chat" />
								<button type='submit'> gửi </button>
							</form>
						</div>
					</div>
					<div className="nav-body-chat">
						<p>Trực tuyến - 1</p>
						<ul>
							<UserTag />
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default General
