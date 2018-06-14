import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Menu from './components/Navigation/Menu'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './styles/global'
import theme from './styles/theme'

const App = () => {
	return (
		<React.Fragment>
			<Menu />
			<Main />
			<Footer />
		</React.Fragment>
	)
}

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
)
