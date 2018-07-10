import React from 'react'
import { Route } from 'react-router-dom'
import { PageNavigation, NavigationEntries } from '../PageStyles'
import { AboutUsWrapper, Section } from './AboutStyles'
import { pages } from '../../../content'

const AboutUs = () => {
	return (
		<AboutUsWrapper>
			{pages.aboutus.map((section, id) =>
				Section(
					id,
					section.type,
					section.header,
					section.body,
					section.job,
					section.img
				)
			)}
		</AboutUsWrapper>
	)
}

const NestedAbout = ({ match }) => {
	return (
		<React.Fragment>
			<PageNavigation>
				{NavigationEntries(match, [
					{ name: 'about us', route: '' },
					{ name: 'partnerships', route: 'partnerships' },
				])}
			</PageNavigation>
			<Route exact path={match.url} component={AboutUs} />
			<Route path={`${match.url}/:sectionName`} component={() => <div />} />
		</React.Fragment>
	)
}

export default NestedAbout
