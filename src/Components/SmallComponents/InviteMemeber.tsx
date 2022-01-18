import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import * as React from 'react'
import { AuthContext } from '../../Auth/AuthProvider'
import { db } from '../../firebase/firebase'
import useFireStore from './../../Hooks/useFireStore'
import './styles/AddRoom.scss'
interface InviteMemember {
	openInviteMemember: boolean
	setOpenInviteMemember: any
	roomId: string
	member: Array<string>
}
export default function InviteMemember(props: InviteMemember) {
	const { openInviteMemember, setOpenInviteMemember, roomId, member } = props
	const [data, setData] = React.useState<any>()
	const userCondition = React.useMemo(() => {
		return {
			fieldName: 'email',
			operator: '==',
			value: data,
		}
	}, [data])
	const handleClose = () => {
		setOpenInviteMemember(false)
	}
	const userInvite: any = useFireStore('users', userCondition)
	React.useEffect(() => {
		if (userInvite[0].uid) {
			const { uid } = userInvite[0]
			console.log(uid)
			const roomRef = db.collection('rooms').doc(roomId)
			member.push(uid)
			console.log(member)
			roomRef.update({
				members: member,
			})
		}
	}, [userInvite])
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		let email = (document.getElementById('email') as HTMLInputElement).value
		setData(email)

		setOpenInviteMemember(false)
	}

	return (
		<div>
			<Dialog open={openInviteMemember} onClose={handleClose}>
				<DialogTitle style={{ textAlign: 'center' }}>Mời thành viên</DialogTitle>
				<form onSubmit={handleSubmit} className="form-addRoom">
					<input
						type="text"
						required
						placeholder="Email người dùng"
						id="email"
						onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
							e.target.setCustomValidity('Hãy nhập tên đăng nhập')
						}
						onInput={(e: React.ChangeEvent<HTMLInputElement>) => e.target.setCustomValidity('')}
					/>
					<DialogActions>
						<Button onClick={handleClose}>Hủy</Button>
						<Button type="submit">Mời</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	)
}
