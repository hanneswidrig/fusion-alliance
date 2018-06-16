import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 49%;
	border-radius: 4px;
	background-color: ${props => props.colors.orangeHighlight};
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
	transition: 200ms ease-in;
	cursor: default;
	&:hover {
		box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
	}
`

const CardImg = styled.div`
	user-select: none;
	height: 200px;
	background: url(${props => props.image});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	flex-basis: 67%;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
`

const CardSection = styled.div`
	display: flex;
	flex-basis: 33%;
	color: ${props => props.colors.grey};
	font-size: 0.875rem;
	flex-direction: column;
	justify-content: space-between;
	padding: 8px;
`
const CardHeader = styled.div`
	display: flex;
	flex-direction: row;
`
const CardTitle = styled.div`
	flex-basis: 75%;
	color: ${props => props.colors.blue};
`
const CardDate = styled.div`
	flex-basis: 25%;
	text-align: end;
`
const CardBody = styled.div`
	margin-top: 10px;
`

const Card = props => (
	<CardWrapper {...props}>
		<CardImg {...props} />
		<CardSection {...props}>
			<CardHeader {...props}>
				<CardTitle {...props}>{props.title}</CardTitle>
				<CardDate {...props}>{props.date}</CardDate>
			</CardHeader>
			<CardBody {...props}>{props.body}</CardBody>
		</CardSection>
	</CardWrapper>
)

export default Card
