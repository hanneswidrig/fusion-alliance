import React from 'react'
import { Route } from 'react-router-dom'
import { PageNavigation, Placeholder } from '../PageStyles'

const NestedProducts = ({ match }) => {
	return (
		<React.Fragment>
			<PageNavigation
				match={match}
				routes={[
					{ name: 'overview', route: '' },
					{ name: 'acuity', route: 'acuity' },
					{ name: 'comtrac', route: 'comtrac' },
					{ name: 'map', route: 'map' },
				]}
			/>
			<Route exact path={match.url} component={Placeholder} />
			<Route exact path={`${match.url}/:sectionName`} component={Placeholder} />
		</React.Fragment>
	)
}

export default NestedProducts
