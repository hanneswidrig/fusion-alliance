import React from 'react'
import {
	CardWrapper,
	ImgWrapper,
	CardSection,
	CardHeader,
	CardTitle,
	CardBody,
} from './CardStyles'

const CardContainer = CardWrapper.extend`
	flex-direction: column;
`

const CardImg = ImgWrapper.extend`
	display: flex;
	width: 100%;
	height: 192px;
	border-top-right-radius: 8px;
`

const VerticalCard = props => (
	<CardContainer {...props} to="#">
		<CardImg {...props} />
		<CardSection {...props}>
			<CardHeader {...props}>
				<CardTitle {...props}>{props.title}</CardTitle>
			</CardHeader>
			<CardBody {...props}>{props.body}</CardBody>
		</CardSection>
	</CardContainer>
)

export default VerticalCard
