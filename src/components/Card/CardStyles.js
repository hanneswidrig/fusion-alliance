import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MdArrowForward from 'react-icons/lib/md/arrow-forward'
import theme from '../../styles/theme'

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
	color: ${props => props.iconcolor};
`

export const CardTag = styled.div`
	display: block;
	z-index: 1;
	position: absolute;
	top: 0;
	right: 0;
	font-size: 0.875rem;
	padding: 5px 10px;
	border-top-right-radius: 7px;
	border-bottom-left-radius: 7px;
	text-transform: capitalize;
	color: ${props => props.themecolor.font};
	background-color: ${props => props.themecolor.background};
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
	color: ${theme.colors.grey};
	flex-direction: column;
	flex: ${props => (props.flex ? props.flex : 1)};
`

export const CardHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const CardTitle = styled.div`
	color: ${theme.colors.grey};
	font-weight: 600;
	margin: 16px 16px 0 16px;
`

export const CardBody = styled.div`
	margin: 12px 16px 16px 16px;
	line-height: 1.25rem;
`

export function tagTheme(categoryid) {
	switch (categoryid) {
		case 0:
			return {
				font: theme.colors.orange.dark,
				background: theme.colors.orange.light,
			}
		case 1:
			return {
				font: theme.colors.green.dark,
				background: theme.colors.green.light,
			}
		case 2:
			return {
				font: theme.colors.purple.dark,
				background: theme.colors.purple.light,
			}
		default:
			break
	}
	return ''
}

CardTag.defaultProps = {
	themecolor: {
		font: theme.colors.blue.dark,
		background: theme.colors.blue.light,
	},
}
