import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './components/App/App'
import './styles/global'
import theme from './styles/theme'

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<App {...theme} />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
)
