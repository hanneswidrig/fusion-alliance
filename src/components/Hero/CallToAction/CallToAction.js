import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '../../../styles/theme'

const Button = styled(Link)`
	color: ${theme.colors.blue};
	border: solid 2px ${theme.colors.blue};
	border-radius: 4px;
	font-size: 1.25rem;
	font-family: ${theme.fonts.metaWeb};
	font-weight: 400;
	text-decoration: none;
	padding: 10px 80px 6px 80px;
	transition: 125ms ease-in;
	background-color: #fff;

	&:hover {
		transform: scale(1.1);
		color: ${theme.colors.blueHover};
		background-color: ${theme.colors.blue};
	}

	@media screen and (max-width: ${theme.responsive.small}) {
		& {
			padding: 12px 40px 6px 40px;
		}
	}
`

const CallToAction = () => <Button to="/expertise">EXPLORE</Button>

export default CallToAction
