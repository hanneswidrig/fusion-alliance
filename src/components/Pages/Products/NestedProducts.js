import React from 'react'
import { Route } from 'react-router-dom'
import { InfoCard, OverviewWrapper } from './ProductsStyles'
import { pages } from '../../../content'

const Overview = () => (
	<OverviewWrapper>
		{pages.products.map((product, index) => (
			<InfoCard
				key={index.toString()}
				header={product.header}
				headerhighlight={product.headerhighlight}
				img={product.img}
				description={product.description}
				themecolor={product.themecolor}
			/>
		))}
	</OverviewWrapper>
)

const NestedProducts = ({ match }) => {
	return (
		<React.Fragment>
			<Route exact path={match.url} component={Overview} />
		</React.Fragment>
	)
}

export default NestedProducts
