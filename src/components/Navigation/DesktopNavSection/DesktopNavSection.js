import React from 'react'
import styled from 'styled-components'
import NavigationItems from '../NavigationItems'

const Desktop = styled.section`
	display: none;
	height: 80px;
	a {
		color: ${props => props.colors.grey};
		text-decoration: none;
		padding: 28.5px 8px;
		height: 100%;
		transition: 200ms ease-in-out;
		&:hover {
			color: ${props => props.colors.greyHover};
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
