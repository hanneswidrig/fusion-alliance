import React from 'react'
import { Route } from 'react-router-dom'
import { PageContainer, PageHeader } from '../PageStyles'
import NestedProducts from './NestedProducts'

const Products = ({ match }) => {
	return (
		<PageContainer>
			<PageHeader>Products</PageHeader>
			<Route path={`${match.url}`} component={NestedProducts} />
		</PageContainer>
	)
}

export default Products
