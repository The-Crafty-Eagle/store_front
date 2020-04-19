import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProductsContextProvider } from './utils/contexts/context'

ReactDOM.render(
	<ProductsContextProvider>
		<Router>
			<App />
		</Router>
	</ProductsContextProvider>,
	document.getElementById('root'),
)
