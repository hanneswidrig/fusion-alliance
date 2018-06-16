import React from 'react'
import styled from 'styled-components'
import NavigationItems from '../NavigationItems'

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

const DesktopNavSection = props => {
	return (
		<Desktop {...props} active={props.active}>
			<NavigationItems {...props} />
		</Desktop>
	)
}

export default DesktopNavSection