import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { addDocument } from '../../firebase/service'
import { AuthContext } from '../../Auth/AuthProvider'
import './styles/AddRoom.scss'
interface AddRoom {
	openAddRoom: boolean
	setOpenAddRoom: any
}
export default function AddRoom(props: AddRoom) {
	const { openAddRoom, setOpenAddRoom } = props
	const { ...user } = React.useContext<any>(AuthContext)
	const [data, setData] = React.useState<any>({
		name: '',
		photo: '',
	})
	const handleClose = () => {
		setOpenAddRoom(false)
	}
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (data.name) {
			addDocument('rooms', { ...data, members: [user?.uid] })
			setOpenAddRoom(false)
		}
	}
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}
	return (
		<div>
			<Dialog open={openAddRoom} onClose={handleClose}>
				<DialogTitle style={{ textAlign: 'center' }}>Tạo phòng mới</DialogTitle>
				<form onSubmit={handleSubmit} className="form-addRoom" autoComplete="off">
					<input
						type="text"
						required
						placeholder="Room name"
						name="name"
						onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
							e.target.setCustomValidity('Hãy nhập tên đăng nhập')
						}
						onInput={(e: React.ChangeEvent<HTMLInputElement>) => e.target.setCustomValidity('')}
						onChange={(e) => handleOnChange(e)}
					/>
					<input
						type="text"
						placeholder="Photo URL"
						name="photo"
						onChange={(e) => handleOnChange(e)}
					/>

					<DialogActions>
						<Button onClick={handleClose}>Hủy</Button>
						<Button type="submit">Tạo</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	)
}
