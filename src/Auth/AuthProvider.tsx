import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase'
interface Progress {
	children: ReactNode
}
export const AuthContext = createContext({})
function AuthProvider({ children }: Progress) {
	const navigate = useNavigate()
	const [user, setUser] = useState({})
	useEffect(() => {
		const unsubscibed = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				const { displayName, email, uid, photoURL } = userAuth
				setUser({ displayName, email, uid, photoURL })
				navigate({ pathname: '/home' }, { replace: true })
				return;
			}
			navigate({ pathname: '/' }, { replace: true })
		})
		return () => {
			unsubscibed()
		}
	}, [])

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export default AuthProvider
