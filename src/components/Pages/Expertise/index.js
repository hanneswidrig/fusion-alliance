import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import NestedExpertise from '../Expertise/NestedExpertise'
import PageHeader from '../PageHeader'
import theme from '../../../styles/theme'

const PageContainer = styled.main`
	width: 100%;
	padding: 0 10%;
`

const Expertise = ({ match }) => {
	return (
		<PageContainer>
			<PageHeader {...theme}>Expertise</PageHeader>
			<Route path={`${match.url}`} component={NestedExpertise} />
		</PageContainer>
	)
}

export default Expertise
