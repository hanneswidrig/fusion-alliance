import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Menu from './components/Navigation/Menu/Menu'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './styles/global'
import theme from './styles/theme'

const App = () => {
	return (
		<React.Fragment>
			<Menu />
			<Route exact path="/" component={Main} />
			{/* <Route exact path="/expertise" component={Expertise} />
			<Route exact path="/products" component={Products} />
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/careers" component={Careers} /> */}
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
