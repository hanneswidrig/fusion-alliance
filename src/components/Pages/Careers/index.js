import React from 'react'
import { Route } from 'react-router-dom'
import { PageContainer, PageHeader } from '../PageStyles'
import NestedCareers from './NestedCareers'

const Careers = ({ match }) => {
	return (
		<PageContainer>
			<PageHeader>Careers</PageHeader>
			<Route path={`${match.url}`} component={NestedCareers} />
		</PageContainer>
	)
}

export default Careers
