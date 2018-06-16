import React from 'react'
import styled from 'styled-components'
import Navigation from '../../components/Navigation/Navigation'

const Wrapper = styled.header`
	border-top: 6px solid ${props => props.colors.blue};
	background: ${props => props.colors.white};
	width: 100%;
	font-family: ${props => props.fonts.netto};
	font-weight: 600;
`

const Header = props => {
	return (
		<Wrapper {...props}>
			<Navigation {...props} />
		</Wrapper>
	)
}

export default Header
