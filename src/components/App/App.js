import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

const App = props => {
	return (
		<React.Fragment>
			<Header {...props} />
			<Route exact path="/" component={Main} />
			<Footer {...props} />
		</React.Fragment>
	)
}

export default App
