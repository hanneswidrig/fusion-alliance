import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const naviEntries = ['expertise', 'products', 'about', 'contact', 'careers']

const Mobile = styled.section`
	display: ${props => (props.active ? 'flex' : 'none')};
	flex-direction: column;
	user-select: none;

	a {
		padding: 16px;
		text-decoration: none;
		text-align: center;
		color: ${props => props.colors.blackHover};
	}
`

const MobileNavSection = props => {
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
		<Mobile {...props} active={props.active}>
			<NavLink exact to="/" activeStyle={{ color: props.colors.blueActive }}>
				HOME
			</NavLink>
			{navigationItems}
		</Mobile>
	)
}

export default MobileNavSection
