import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { Placeholder } from '../PageStyles'

const ContactUs = () => <ContactForm netlify />

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const NestedContact = ({ match }) => {
	return (
		<React.Fragment>
			<Route exact path={match.url} component={ContactUs} />
			<Placeholder />
		</React.Fragment>
	)
}

export default NestedContact
