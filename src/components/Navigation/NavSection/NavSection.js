import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import theme from '../../../styles/theme'

const Section = styled.section`
	display: none;
	a {
		color: ${theme.colors.grey};
		text-decoration: none;
		padding: 28.5px 8px;
		height: 100%;
		font-weight: 600;
		transition: all 0.2s;
		&:hover {
			color: ${theme.colors.blackHover};
			text-decoration: underline;
		}
	}

	@media screen and (min-width: ${theme.responsive.medium}) {
		& {
			display: flex;
		}
	}
`

const NavSection = props => (
	<Section active={props.active}>
		<NavLink
			exact
			to="/expertise"
			activeStyle={{ color: theme.colors.blueActive }}
		>
			EXPERTISE
		</NavLink>
		<NavLink
			exact
			to="/products"
			activeStyle={{ color: theme.colors.blueActive }}
		>
			PRODUCTS
		</NavLink>
		<NavLink exact to="/about" activeStyle={{ color: theme.colors.blueActive }}>
			ABOUT
		</NavLink>
		<NavLink
			exact
			to="/contact"
			activeStyle={{ color: theme.colors.blueActive }}
		>
			CONTACT
		</NavLink>
		<NavLink
			exact
			to="/careers"
			activeStyle={{ color: theme.colors.blueActive }}
		>
			CAREERS
		</NavLink>
	</Section>
)

export default NavSection
