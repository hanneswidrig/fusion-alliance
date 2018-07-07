import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import NestedExpertise from '../Expertise/NestedExpertise'
import PageHeader from '../PageHeader'
import theme from '../../../styles/theme'

const PageContainer = styled.main`
	width: 100%;
	padding: 5% 10%;
	@media screen and (max-width: ${props => props.responsive.medium}) {
		& {
			padding: 5% 0;
		}
	}
`

const Expertise = ({ match }) => {
	return (
		<PageContainer {...theme}>
			<PageHeader {...theme}>Expertise</PageHeader>
			<Route path={`${match.url}`} component={NestedExpertise} />
		</PageContainer>
	)
}

export default Expertise
