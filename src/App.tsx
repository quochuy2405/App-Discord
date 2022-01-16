import { Suspense, useContext, useEffect } from 'react'
import './App.css'
import Login from './Page/Login'
import { Route, Routes } from 'react-router'
import Signup from './Page/SignUp'
import Landing from './Page/Landing'
import { ctx } from './Context/contextFE'

function App() {
	const appContext = useContext(ctx)
	useEffect(() => {
		window.addEventListener('mouseup', function () {
			document.querySelectorAll('.sound').forEach((item) => {
				item.addEventListener('click', () => {
					appContext.startSound()
				})
			})
		})
	}, [])

	return (
		<Suspense fallback="loading">
			<div className="App">
				<Routes>
					<Route path="/home" element={<Landing />} />
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</div>
		</Suspense>
	)
}

export default App
