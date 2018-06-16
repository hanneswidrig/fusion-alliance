import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import theme from '../../../styles/theme'

const Section = styled.section`
	display: ${props => (props.active ? 'flex' : 'none')};
	flex-direction: column;
	user-select: none;

	a {
		padding: 16px;
		text-decoration: none;
		text-align: center;
		color: ${theme.colors.blackHover};
	}
`

const NavSection = props => (
	<Section active={props.active}>
		<NavLink exact to="/" activeStyle={{ color: theme.colors.blueActive }}>
			HOME
		</NavLink>
		<NavLink to="/expertise" activeStyle={{ color: theme.colors.blueActive }}>
			EXPERTISE
		</NavLink>
		<NavLink to="/products" activeStyle={{ color: theme.colors.blueActive }}>
			PRODUCTS
		</NavLink>
		<NavLink to="/about" activeStyle={{ color: theme.colors.blueActive }}>
			ABOUT
		</NavLink>
		<NavLink to="/contact" activeStyle={{ color: theme.colors.blueActive }}>
			CONTACT
		</NavLink>
		<NavLink to="/careers" activeStyle={{ color: theme.colors.blueActive }}>
			CAREERS
		</NavLink>
	</Section>
)

export default NavSection
