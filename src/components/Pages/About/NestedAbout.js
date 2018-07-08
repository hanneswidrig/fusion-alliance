import React from 'react'
import { Route } from 'react-router-dom'
import { PageNavigation, NavigationEntries } from '../PageStyles'

const NestedAbout = ({ match }) => {
	return (
		<React.Fragment>
			<PageNavigation>
				{NavigationEntries(match, [
					{ name: 'about us', route: '' },
					{ name: 'partnerships', route: 'partnerships' },
				])}
			</PageNavigation>
			<Route exact path={match.url} component={() => <div />} />
			<Route path={`${match.url}/:sectionName`} component={() => <div />} />
		</React.Fragment>
	)
}

export default NestedAbout
