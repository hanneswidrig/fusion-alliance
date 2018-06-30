import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Expertise from '../Pages/Expertise/index'
import Footer from '../Footer/Footer'

const App = props => {
	return (
		<React.Fragment>
			<Header {...props} />
			<Route exact path="/" component={Main} />
			<Route exact path="/expertise" component={Expertise} />
			<Footer {...props} />
		</React.Fragment>
	)
}

export default App
