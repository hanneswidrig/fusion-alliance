import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import logo from '../../../images/logo.svg'

const Section = styled.section`
	height: 48px;

	a {
		padding: 0 0 6px 0;
		margin: 0;
		user-select: none;
	}

	a > img {
		width: auto;
		height: 40px;
	}

	@media screen and (max-width: ${props => props.responsive.medium}) {
		& {
			height: 32px;
			padding: 0 10px;
		}
		a {
			padding: 0;
		}
	}
`

const LogoSection = props => (
	<Section {...props}>
		<NavLink to="/" activeStyle={{ color: props.colors.blueActive }}>
			<img src={logo} alt="logo" />
		</NavLink>
	</Section>
)

export default LogoSection
