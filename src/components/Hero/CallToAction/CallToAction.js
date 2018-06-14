import React from 'react'
import styled from 'styled-components'
import theme from '../../../styles/theme'

const Button = styled.a`
	color: ${theme.colors.blue};
	border: solid 2px ${theme.colors.blue};
	border-radius: 4px;
	font-size: 1.25rem;
	text-decoration: none;
	padding: 10px 80px 6px 80px;
	transition: 125ms ease-in;
	background-color: #fff;

	&:hover {
		transform: scale(1.1);
		color: ${theme.colors.blueLinkHover};
		background-color: ${theme.colors.blue};
	}

	@media screen and (max-width: ${theme.responsive.small}) {
		& {
			padding: 12px 40px 6px 40px;
		}
	}
`

const CallToAction = () => <Button href="/expertise">EXPLORE</Button>

export default CallToAction
