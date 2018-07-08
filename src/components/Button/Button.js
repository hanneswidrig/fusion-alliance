import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '../../styles/theme'

const StyledButton = styled(Link)`
	color: ${props => props.themecolor};
	background-color: transparent;
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
		color: ${props => props.textcolor};
		background-color: ${props => props.themecolor};
	}
`

const Button = props => <StyledButton {...props}>{props.children}</StyledButton>

Button.defaultProps = {
	to: '#',
	themecolor: theme.colors.blue,
	textcolor: theme.colors.white,
}

export default Button
