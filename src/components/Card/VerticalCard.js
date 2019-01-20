import React from 'react'
import styled from 'styled-components'
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

const CardContainer = styled(CardWrapper)`
	flex-direction: column;
	min-height: 368px;
	position: relative;
`

const CardImg = styled(ImgWrapper)`
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
