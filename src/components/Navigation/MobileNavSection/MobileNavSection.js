import React from 'react'
import styled from 'styled-components'
import NavigationItems from '../NavigationItems'

const Mobile = styled.section`
	display: ${props => (props.active ? 'flex' : 'none')};
	flex-direction: column;
	user-select: none;

	a {
		padding: 16px;
		text-decoration: none;
		text-align: center;
		color: ${props => props.theme.colors.grey};
	}
`

const MobileNavSection = props => {
	return (
		<Mobile active={props.active}>
			<NavigationItems mobile />
		</Mobile>
	)
}

export default MobileNavSection
