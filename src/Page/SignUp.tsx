import React from 'react'
import { useTranslation } from 'react-i18next'
import '../Styles/Signup.scss'
import { Link } from 'react-router-dom'
function Signup() {
	const { t, i18n } = useTranslation()
	const OnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}
	return (
		<div className="background">
			<div className="signup">
				<div className="head-signup">
					<p className="title">{t('login.title')} </p>
					<p className="description">{t('login.description')} </p>
				</div>
				<div className="signup-form">
					<form onSubmit={OnSubmit}>
						<div className="signup-input">
							<p className="text-input">Username</p>
							<input type="text" />
						</div>
						<div className="signup-input">
							<p className="text-input">Password</p>
							<input type="password" />
						</div>
						<div className="signup-input">
							<p className="text-input">Email</p>
							<input type="text" />
						</div>

						<button className="btn-signup sound" type="submit">
							<p>Sign up</p>
						</button>
					</form>
				</div>
				<div className="signup-bottom">
					<Link to={'/login'}>
						<div className="btn-signup sound">
							<i className="fab fa-google"></i> Login with Google
						</div>
					</Link>

					<p className="text-rule">
						Click by sign up you agree to our <strong>Terms of service</strong> and{' '}
						<strong>Private policy</strong>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Signup
