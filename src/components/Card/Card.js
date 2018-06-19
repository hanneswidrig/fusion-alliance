import React from 'react'
import styled from 'styled-components'
import MdArrowForward from 'react-icons/lib/md/arrow-forward'
import { Link } from 'react-router-dom'

const CardWrapper = styled(Link)`
	display: flex;
	width: 100%;
	flex-direction: row;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
	transition: 200ms ease-in-out;
	cursor: pointer;
	margin: 4px;
	text-decoration: none;
	&:hover {
		box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
	}
`

const Icon = styled(MdArrowForward)`
	width: 48px;
	height: 48px;
	padding: 8px;
`

const CardImg = styled.div`
	display: none;
	user-select: none;
	height: 180px;
	width: 180px;
	flex: 1;
	background-color: red;
	background: url(${props => props.image});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	@media screen and (min-width: ${props => props.responsive.large}) {
		& {
			display: flex;
		}
	}
`

const CardSection = styled.div`
	display: flex;
	color: ${props => props.colors.grey};
	flex-direction: column;
	flex: 2;
`

const CardHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const CardTitle = styled.div`
	color: ${props => props.colors.grey};
	font-weight: 600;
	margin: 16px 16px 0 16px;
	width: calc(100% - 48px);
`

const CardBody = styled.div`
	margin: 12px 16px 16px 16px;
	line-height: 1.25em;
`

const Card = props => (
	<CardWrapper {...props} to="#">
		<CardImg {...props} />
		<CardSection {...props}>
			<CardHeader {...props}>
				<CardTitle {...props}>{props.title}</CardTitle>
				<Icon />
			</CardHeader>
			<CardBody {...props}>{props.body}</CardBody>
		</CardSection>
	</CardWrapper>
)

export default Card
