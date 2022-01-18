import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import firebase, { auth, db } from '../firebase/firebase'
import { addDocument } from '../firebase/service'
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
						{/* <div className="login-input">
							<p className="text-input">Username</p>
							<input type="text" required />
						</div>
						<div className="login-input">
							<p className="text-input">Password</p>
							<input type="password" required />
						</div> */}
						<button className="btn-login sound" type="submit">
							<p>Login width Google</p>
						</button>
						<div className="register-forgot">
							<p className="register sound"> Register Account </p>
							<p className="forgot sound"> Forgot Account? </p>
						</div>
					</form>
				</div>

				<div className="login-bottom">
					<Link to={'/signup'}>
						<div className="btn-signup sound">
							<i className="fab fa-google"></i> Sign up with Google
						</div>
					</Link>

					<p className="text-rule">
						Click by login you agree to our <strong>Terms of service</strong> and{' '}
						<strong>Private policy</strong>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Login
