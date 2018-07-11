import React from 'react'
import { Route } from 'react-router-dom'
import { PageNavigation, Placeholder } from '../PageStyles'

const NestedCareers = ({ match }) => {
	return (
		<React.Fragment>
			<PageNavigation
				match={match}
				routes={[
					{ name: 'fusion experience', route: '' },
					{ name: 'culture', route: 'culture' },
					{ name: 'what we offer', route: 'benefits' },
					{ name: 'employee spotlight', route: 'spotlight' },
				]}
			/>
			<Route exact path={match.url} component={Placeholder} />
			<Route exact path={`${match.url}/:sectionName`} component={Placeholder} />
		</React.Fragment>
	)
}

export default NestedCareers
