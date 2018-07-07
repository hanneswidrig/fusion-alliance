import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '../../../styles/theme'

const Button = styled(Link)`
	color: ${theme.colors.blue};
	background-color: transparent;
	border: solid 2px ${theme.colors.blue};
	border-radius: 4px;
	letter-spacing: 1px;
	font-size: 1.25rem;
	text-decoration: none;
	padding: 10px 80px 10px 80px;
	transition: 100ms ease-in-out;

	&:hover {
		transform: scale(1.1);
		color: ${theme.colors.white};
		background-color: ${theme.colors.blue};
	}
`

const CallToAction = () => <Button to="/expertise">EXPLORE</Button>

export default CallToAction
