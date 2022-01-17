import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './Auth/AuthProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import './I18n/i18n.js'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<App />{' '}
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
