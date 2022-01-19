import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import firebase, { auth, db } from '../firebase/firebase'
import { addDocument } from '../firebase/service'
import logo from '../Sound/logo.png'
import './Styles/Login.scss'
function Login() {
	const { t, i18n } = useTranslation()
	const ggProvider = new firebase.auth.GoogleAuthProvider()
	const OnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { additionalUserInfo, user } = await auth.signInWithPopup(ggProvider)
		if (additionalUserInfo?.isNewUser) {
			const data = {
				displayName: user?.displayName,
				photoURL: user?.photoURL,
				email: user?.email,
				uid: user?.uid,
				providerId: user?.providerId,
			}
			addDocument('users', data)
		}
	}

	return (
		<div className="background">
			<div className="login">
				<div className="head-login">
					<p className="title">{t('login.title')} </p>
					<p className="description">{t('login.description')} </p>
				</div>
				<div className="login-form">
					<form onSubmit={OnSubmit}>
						<button className="login-now sound" type="submit">
							<div className="img">
								<img src={logo} alt="" />
							</div>
						</button>
					</form>
				</div>

				<div className="login-bottom">
					<p className="text-rule">
						Click by button you agree to our <strong>Terms of service</strong> and{' '}
						<strong>Private policy</strong>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Login
