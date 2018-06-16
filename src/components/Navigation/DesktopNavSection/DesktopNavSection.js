import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const naviEntries = ['expertise', 'products', 'about', 'contact', 'careers']

const Desktop = styled.section`
	display: none;
	a {
		color: ${props => props.colors.grey};
		text-decoration: none;
		padding: 28.5px 8px;
		height: 100%;
		font-weight: 600;
		transition: all 0.2s;
		&:hover {
			color: ${props => props.colors.blackHover};
			text-decoration: underline;
		}
	}

	@media screen and (min-width: ${props => props.responsive.medium}) {
		& {
			display: flex;
		}
	}
`

const NavigationSection = props => {
	const navigationItems = naviEntries.map((entry, index) => (
		<NavLink
			exact
			to={`/${entry}`}
			activeStyle={{ color: props.colors.blueActive }}
			key={index.toString()}
		>
			{entry.toUpperCase()}
		</NavLink>
	))
	return (
		<Desktop active={props.active} {...props}>
			{navigationItems}
		</Desktop>
	)
}

export default NavigationSection
