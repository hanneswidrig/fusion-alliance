import React from 'react'
import styled from 'styled-components'
import Navigation from '../../components/Navigation/Navigation'

const Wrapper = styled.header`
	border-top: 6px solid ${props => props.theme.colors.blue.primary};
	font-weight: 500;
	width: 100%;
`

const Header = props => (
	<Wrapper {...props}>
		<Navigation {...props} />
	</Wrapper>
)

export default Header
