import React from 'react'
import styled from 'styled-components'
import PageHeader from '../PageHeader'
import theme from '../../../styles/theme'

const PageContainer = styled.main`
	width: 100%;
	padding: 5% 10%;
	@media screen and (max-width: ${props => props.responsive.small}) {
		& {
			padding: 0;
		}
	}
`

const Products = () => {
	return (
		<PageContainer {...theme}>
			<PageHeader {...theme}>Products</PageHeader>
		</PageContainer>
	)
}

export default Products
