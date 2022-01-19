import Tooltip from '@mui/material/Tooltip'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { AuthContext } from '../Auth/AuthProvider'
import Channel from '../Components/BigComponents/Channel'
import General from '../Components/BigComponents/General'
import Home from '../Components/BigComponents/Home'
import AddRoom from '../Components/SmallComponents/AddRoom'
import { auth, db } from '../firebase/firebase'
import useFireStore from '../Hooks/useFireStore'
import './Styles/Landing.scss'
function Landing() {
	const [type, setType] = useState('-1')
	const [appBody, setAppBody] = useState(<></>)
	const [dataRoom, setDataRoom] = useState<any>()
	const [openAddRoom, setOpenAddRoom] = useState<any>(false)
	const { ...user } = useContext<any>(AuthContext)
	const roomCondition = useMemo(
		() => ({
			fieldName: 'members',
			operator: 'array-contains',
			value: user?.uid,
		}),
		[user?.uid]
	)
	const rooms = useFireStore('rooms', roomCondition)
	const setDataRooms = (data: any) => {
		setDataRoom(data)
	}
	useEffect(() => {
		const audio = document.querySelector('.audio-mouse')
		audio?.addEventListener('click', () => {
			const up = document.querySelector('.fad.fa-volume-up.show')
			if (up) {
				console.log(up.className)
				document.querySelector('.fad.fa-volume-slash')?.classList.add('show')
				document.querySelector('.fad.fa-volume-up')?.classList.remove('show')
			} else {
				document.querySelector('.fad.fa-volume-slash')?.classList.remove('show')
				document.querySelector('.fad.fa-volume-up')?.classList.add('show')
			}
		})
		db.collection('users').onSnapshot((snapshot) => {
			const data = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}))
			// console.log(data)
		})
	}, [])
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
	}, [rooms])
	useEffect(() => {
		switch (type.toString()) {
			case '-1': {
				setAppBody(<Home />)
				break
			}

			default: {
				setAppBody(<General dataRoom={dataRoom} />)
				break
			}
		}
	}, [type, dataRoom?.id])

	const HandleLogout = () => {
		auth.signOut()
	}
	return (
		<div className="layouts">
			<div className="header">
				<div className="nav-top-icon">
					<div className="nav-top">
						<p className="app-name">Rysass</p>
					</div>
					<div className="icon-top-2">
						<div className="logout" onClick={HandleLogout}>
							<p>
								<i className="fad fa-sign-out-alt"></i>
							</p>
						</div>
						<div className="audio-mouse sound">
							<i className="fad fa-volume-up show"></i>
							<i className="fad fa-volume-slash"></i>
						</div>
					</div>
				</div>

				<div className="nav-left">
					<ul className="list-channel">
						<li data-type="-1" className={`channel-switch sound active`}>
							<Channel item={{ name: 'Trang chủ' }} />
						</li>
						{rooms?.map(
							(item: any, index) =>
								item?.id && (
									<li
										key={index}
										data-type={`${index}`}
										onClick={() => setDataRooms(item)}
										className={`channel-switch sound`}
									>
										<Channel item={item} />
									</li>
								)
						)}
						<li className={`channel-switch sound`}>
							<div className="btn-addroom">
								<Tooltip title="Thêm phòng" placement="right-start">
									<i onClick={() => setOpenAddRoom(true)} className="far fa-plus-square"></i>
								</Tooltip>
							</div>
						</li>{' '}
						<AddRoom openAddRoom={openAddRoom} setOpenAddRoom={setOpenAddRoom} />
					</ul>
				</div>
			</div>
			<div className="app-body">{appBody}</div>
		</div>
	)
}

export default Landing
