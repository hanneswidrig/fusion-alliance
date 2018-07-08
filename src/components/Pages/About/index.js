import React from 'react'
import { Route } from 'react-router-dom'
import { PageContainer, PageHeader } from '../PageStyles'
import NestedAbout from './NestedAbout'

const About = ({ match }) => {
	return (
		<PageContainer>
			<PageHeader>Our Company</PageHeader>
			<Route path={`${match.url}`} component={NestedAbout} />
		</PageContainer>
	)
}

export default About
