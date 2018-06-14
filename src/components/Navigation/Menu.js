import React from 'react'
import styled from 'styled-components'

import theme from '../../styles/theme'
import Navigation from './Navigation'

const Header = styled.header`
	border-top: 6px solid ${theme.colors.blue};
	background: ${theme.colors.white};
	width: 100%;
	font-family: ${theme.fonts.nettoBold};
`

const Menu = () => (
	<Header>
		<Navigation />
	</Header>
)

export default Menu
