import React from 'react'
import {
	CardWrapper,
	ImgWrapper,
	CardTag,
	CardSection,
	CardHeader,
	CardTitle,
	CardBody,
	tagTheme,
} from './CardStyles'

const CardContainer = CardWrapper.extend`
	flex-direction: column;
	min-height: 368px;
	position: relative;
`

const CardImg = ImgWrapper.extend`
	display: flex;
	width: 100%;
	height: 192px;
	border-top-right-radius: 8px;
`

const VerticalCard = props => {
	const tag = tagTheme(props.categoryid)
	return (
		<CardContainer {...props} to="#">
			<CardImg {...props} />
			<CardTag {...props} themecolor={tag}>
				{props.category}
			</CardTag>
			<CardSection {...props}>
				<CardHeader {...props}>
					<CardTitle {...props}>{props.title}</CardTitle>
				</CardHeader>
				<CardBody {...props}>{props.body}</CardBody>
			</CardSection>
		</CardContainer>
	)
}

export default VerticalCard
