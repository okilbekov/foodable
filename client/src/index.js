import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'
import './styles/style.css'
import './styles/media.css'


import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	// </React.StrictMode>
)