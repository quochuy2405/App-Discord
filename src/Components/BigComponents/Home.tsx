import React, { useEffect } from 'react'
import './styles/Home.scss'

interface Home {
	channelChat?: Array<string>
}
function Home(props: Home) {
	const { channelChat } = props

	useEffect(() => {
		const homeTag = document.querySelectorAll('.home-tag')
		homeTag?.forEach((item) => {
			item.addEventListener('click', (e) => {
				const homeTagActive = document.querySelector('.home-tag.active')
				if (homeTagActive !== item) {
					homeTagActive?.classList.remove('active')
					item.classList.add('active')
				}
			})
		})
	}, [])
	return (
		<div className="home">
			<div className="nav-home">
				<div className="home-search sound">
					<p>Tìm hoặc bắt đầu trò chuyện</p>
				</div>
				<div className="body-switch">
					<p className="title-channel sound">
						<a data-toggle="collapse" href="#listhome" aria-expanded="true">
							Kênh chung <i className="fad fa-chevron-right"></i>
						</a>
					</p>

					<ul className="collapse listhometag show" id="listhome">
						<li className="tag-channel sound">#Kênh học tập</li>
						<li className="tag-channel sound">#Kênh giải trí</li>
						<li className="tag-channel sound">#Kênh tán chuyện</li>
						<li className="tag-channel sound">#Kênh làm việc</li>
					</ul>
				</div>
			</div>
			<div className="body-home">
				<div className="nav-body-home">
					<ul className="nav-home--tag">
						<li className="home-tag sound active">
							<p>Bạn bè</p>
						</li>
						<li className="home-tag sound">
							<p>Trực tuyến</p>
						</li>
						<li className="home-tag sound">
							<p>Tất cả</p>
						</li>
						<li className="home-tag sound">
							<p>Đã chặn</p>
						</li>
					</ul>
				</div>
				<div className="body-content">
					<p>Bản thử nghiệm - Vui lòng tạo phòng</p>
				</div>
			</div>
		</div>
	)
}

export default Home
