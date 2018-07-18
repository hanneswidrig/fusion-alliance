import React from 'react'
import { Route } from 'react-router-dom'
import ContactForm from './ContactForm'

const NestedContact = ({ match }) => {
	return (
		<React.Fragment>
			<Route exact path={match.url} component={() => <ContactForm />} />
		</React.Fragment>
	)
}

export default NestedContact
