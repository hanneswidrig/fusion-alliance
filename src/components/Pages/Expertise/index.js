import React from 'react'
import { Route } from 'react-router-dom'
import { PageContainer, PageHeader } from '../PageStyles'
import NestedExpertise from '../Expertise/NestedExpertise'

const Expertise = ({ match }) => {
	return (
		<PageContainer>
			<PageHeader>Expertise</PageHeader>
			<Route path={`${match.url}`} component={NestedExpertise} />
		</PageContainer>
	)
}

export default Expertise
