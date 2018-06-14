import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import logo from '../../../images/header-logo.png'
import theme from '../../../styles/theme'

const LSection = styled.section`
	height: 38px;

	a {
		padding: 0 0 6px 0;
		margin: 0;
		user-select: none;
	}

	a > img {
		width: auto;
		height: 32px;
	}

	@media screen and (max-width: ${theme.responsive.medium}) {
		& {
			height: 32px;
			padding: 0 10px;
		}
		a {
			padding: 0;
		}
	}
`

const LogoSection = () => (
	<LSection>
		<NavLink to="/" activeStyle={{ color: theme.colors.activeLinkStyle }}>
			<img src={logo} alt="logo" />
		</NavLink>
	</LSection>
)

export default LogoSection
