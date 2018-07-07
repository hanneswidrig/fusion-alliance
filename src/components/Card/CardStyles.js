import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MdArrowForward from 'react-icons/lib/md/arrow-forward'

export const CardWrapper = styled(Link)`
	width: 100%;
	display: flex;
	cursor: pointer;
	border-radius: 8px;
	text-decoration: none;
	background-color: #fbfbfb;
	transition: 200ms ease-in-out;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
	&:hover {
		box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
	}
`

export const Icon = styled(MdArrowForward)`
	width: 48px;
	height: 48px;
	padding: 8px;
	color: ${props => (props.iconcolor ? props.iconcolor : props.colors.grey)};
`

export const ImgWrapper = styled.div`
	user-select: none;
	background: url(${props => props.image});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-top-left-radius: 8px;
	flex: 1;
`

export const CardSection = styled.div`
	display: flex;
	color: ${props => props.colors.grey};
	flex-direction: column;
	flex: ${props => (props.flex ? props.flex : 1)};
`

export const CardHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const CardTitle = styled.div`
	color: ${props => props.colors.grey};
	font-weight: 600;
	margin: 16px 16px 0 16px;
`

export const CardBody = styled.div`
	margin: 12px 16px 16px 16px;
	line-height: 1.25em;
`
