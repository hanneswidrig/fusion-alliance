import React from 'react'
import { Route } from 'react-router-dom'
import { PageNavigation } from '../PageStyles'
import { Container, BlockContainer, Section, Block } from './AboutStyles'
import { pages } from '../../../content'

const AboutUs = () => {
	return (
		<Container>
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
		</Container>
	)
}

const Partnership = () => {
	return (
		<BlockContainer>
			{pages.partnerships.map((block, id) =>
				Block(id, block.header, block.img)
			)}
		</BlockContainer>
	)
}

const NestedAbout = ({ match }) => {
	return (
		<React.Fragment>
			<PageNavigation
				match={match}
				routes={[
					{ name: 'about us', route: '' },
					{ name: 'partnerships', route: 'partnerships' },
				]}
			/>
			<Route exact path={match.url} component={AboutUs} />
			<Route path={`${match.url}/:sectionName`} component={Partnership} />
		</React.Fragment>
	)
}

export default NestedAbout
