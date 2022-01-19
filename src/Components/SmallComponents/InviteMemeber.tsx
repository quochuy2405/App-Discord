import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import { useSnackbar } from 'notistack'
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

	const snack = useSnackbar()
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
		try {
			if (userInvite[0].uid) {
				const { uid } = userInvite[0]
				console.log(uid)
				const roomRef = db.collection('rooms').doc(roomId)
				member.push(uid)
				roomRef
					.update({
						members: member,
					})
					.then((res) => {
						snack.enqueueSnackbar('Thêm thành công', { variant: 'success', autoHideDuration: 2000 })
					})
					.catch(() => {
						snack.enqueueSnackbar('Email chưa đăng ký', {
							variant: 'error',
							autoHideDuration: 2000,
						})
					})
			}
		} catch (error) {
			snack.enqueueSnackbar('Email chưa đăng ký', {
				variant: 'error',
				autoHideDuration: 2000,
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
