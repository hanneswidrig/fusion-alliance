import Navigation from './Navigation'

import React from 'react'
import styled from 'styled-components'
import styledHeaderTheme from '../../styles/styledHeaderTheme'

const Header = styled.header`
  border-top: 6px solid ${styledHeaderTheme.colors.blue};
  background: ${styledHeaderTheme.colors.white};
  width: 100%;
  font-family: ${props => props.theme.fonts.nettoBold};
`

const Menu = () => (
  <Header>
    <Navigation />
  </Header>
)

export default Menu
