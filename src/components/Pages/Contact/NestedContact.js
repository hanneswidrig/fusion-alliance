import React from 'react'
import { Route } from 'react-router-dom'
import { Placeholder } from '../PageStyles'

const NestedContact = ({ match }) => {
	return (
		<React.Fragment>
			<Route exact path={match.url} component={() => <div />} />
			<Placeholder />
		</React.Fragment>
	)
}

export default NestedContact
