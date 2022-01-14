import { Suspense, useEffect } from 'react'
import './App.css'
import Login from './Page/Login'
import { Route, Routes } from 'react-router'
import Signup from './Page/SignUp'
import Landing from './Page/Landing'
import sound from './Sound/soundclick.mp3'
function App() {
	let audio = new Audio(sound)
	audio.volume = 0.01
	const startSound = () => {
		audio.play()
	}
	useEffect(() => {
		window.addEventListener('mousedown', function () {
			document.querySelectorAll('.sound').forEach((item) => {
				item.addEventListener('click', () => {
					startSound()
				})
			})
		})
	}, [])

	return (
		<Suspense fallback="loading">
			<div className="App">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</div>
		</Suspense>
	)
}

export default App
