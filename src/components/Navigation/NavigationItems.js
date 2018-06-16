import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationItems = props => {
	const entries = props.entries || [
		'expertise',
		'products',
		'about',
		'contact',
		'careers',
	]
	const items = []
	if (props.mobile) {
		items.push(
			<NavLink
				exact
				to="/"
				activeStyle={{ color: props.colors.blueActive }}
				key="home"
			>
				HOME
			</NavLink>
		)
	}
	items.push(
		entries.map(entry => (
			<NavLink
				exact
				to={`/${entry}`}
				activeStyle={{ color: props.colors.blueActive }}
				key={`${entry}`}
			>
				{entry.toUpperCase()}
			</NavLink>
		))
	)
	return <React.Fragment>{items}</React.Fragment>
}

export default NavigationItems
