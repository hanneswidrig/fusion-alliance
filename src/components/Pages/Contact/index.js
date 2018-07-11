import React from 'react'
import { Route } from 'react-router-dom'
import { PageContainer, PageHeader } from '../PageStyles'
import NestedContact from './NestedContact'

const Contact = ({ match }) => {
	return (
		<PageContainer>
			{/* <PageHeader>Contact</PageHeader> */}
			<Route path={`${match.url}`} component={NestedContact} />
		</PageContainer>
	)
}

export default Contact
