import React from 'react'
import {
	CardWrapper,
	Icon,
	ImgWrapper,
	CardSection,
	CardHeader,
	CardTitle,
	CardBody,
} from './CardStyles'

const CardContainer = CardWrapper.extend`
	flex-direction: row;
	margin: 4px;
`

const CardImg = ImgWrapper.extend`
	display: none;
	height: 180px;
	width: 180px;
	border-bottom-left-radius: 8px;
	@media screen and (min-width: ${props => props.responsive.large}) {
		& {
			display: flex;
		}
	}
`

const Title = CardTitle.extend`
	width: calc(100% - 48px);
`

const Card = props => (
	<CardContainer {...props} to="#">
		<CardImg {...props} />
		<CardSection {...props} flex="2">
			<CardHeader {...props}>
				<Title {...props}>{props.title}</Title>
				<Icon {...props} iconcolor={props.iconcolor} />
			</CardHeader>
			<CardBody {...props}>{props.body}</CardBody>
		</CardSection>
	</CardContainer>
)

export default Card
