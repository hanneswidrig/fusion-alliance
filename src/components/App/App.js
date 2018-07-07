import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Expertise from '../Pages/Expertise/index'
import Products from '../Pages/Products/index'
import About from '../Pages/About/index'
import Contact from '../Pages/Contact/index'
import Careers from '../Pages/Careers/index'
import Footer from '../Footer/Footer'

const App = props => {
	return (
		<React.Fragment>
			<Header {...props} />
			<Route exact path="/" component={Main} />
			<Route path="/expertise" component={Expertise} />
			<Route path="/products" component={Products} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Route path="/careers" component={Careers} />
			<Footer {...props} />
		</React.Fragment>
	)
}

export default App
