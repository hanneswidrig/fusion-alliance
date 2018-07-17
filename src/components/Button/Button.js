import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '../../styles/theme'

/**
 * Component: Button
 * Props:
 * - to: Route that is followed when button is clicked.
 * - themecolor: Color of button and text color before hover
 * - textcolor: Color of text when hover or focus is triggered.
 * - margin: Apply side margins to Button.
 */
const StyledButton = styled(Link)`
	color: ${props => props.themecolor};
	background-color: transparent;
	margin-top: ${props => props.margin.top};
	margin-right: ${props => props.margin.right};
	margin-bottom: ${props => props.margin.bottom};
	margin-left: ${props => props.margin.left};
	text-align: center;
	border: solid 2px ${props => props.themecolor};
	border-radius: 4px;
	letter-spacing: 1px;
	font-size: 1.25rem;
	text-decoration: none;
	padding: 10px 40px 10px 40px;
	transition: 100ms ease-in-out;

	&:hover {
		transform: scale(1.1);
		background-color: ${props => props.themecolor};
		color: ${props => props.textcolor};
	}
`

const Button = props => <StyledButton {...props}>{props.children}</StyledButton>

Button.defaultProps = {
	to: '#',
	themecolor: theme.colors.blue.primary,
	textcolor: theme.colors.white,
	margin: { top: '0', right: '0', bottom: '0', left: '0' },
}

export default Button
