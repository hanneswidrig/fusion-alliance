import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 49%;
	border-radius: 4px;
	background-color: ${props => props.backgroundcolor};
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
	transition: 200ms ease-in-out;
	cursor: default;
	&:hover {
		box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
	}
`

const CardImg = styled.div`
	user-select: none;
	height: 200px;
	background: url(${props => props.image});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	@media (min-width: ${props => props.responsive.large}) {
		& {
			height: 300px;
		}
	}
`

const CardSection = styled.div`
	display: flex;
	color: ${props => props.colors.grey};
	font-size: 0.875rem;
	flex-direction: column;
	justify-content: flex-start;
	padding: 10px 10px 0 10px;
`

const CardHeader = styled.div`
	display: flex;
	flex-direction: column;
`

const CardTitle = styled.div`
	color: ${props => props.colors.darkBlue};
	font-weight: 600;
`

const CardDate = styled.div`
	margin-top: 6px;
	font-size: 0.75rem;
`

const CardBody = styled.div`
	margin-top: 12px;
	line-height: 1.125rem;
`

const CardButton = styled(Link)`
	display: flex;
	text-decoration: none;
	justify-content: center;
	align-items: center;
	margin: 0 10px 10px 10px;
	color: ${props => props.colors.blue};
	border-radius: 4px;
	font-weight: 600;
	padding: 12px 8px;
	transition: 200ms ease-in-out;
	&:hover {
		background-color: ${props => props.buttoncolor};
		text-decoration: underline;
	}
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
		<CardButton to="#" {...props}>
			LEARN MORE
		</CardButton>
	</CardWrapper>
)

export default Card
