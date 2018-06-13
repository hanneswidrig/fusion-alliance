import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import MdMenu from 'react-icons/lib/md/menu'
import styledHeaderTheme from '../../styles/styledHeaderTheme'

const MobileMenuWrapper = styled(Link)`
  padding: 20px;
  svg {
    color: ${styledHeaderTheme.colors.black};
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    & {
      display: none;
    }
  }
`

const MobileMenuButton = () => (
  <MobileMenuWrapper
    to="#"
    activeStyle={{ color: styledHeaderTheme.colors.activeLinkStyle }}
  >
    <MdMenu />
  </MobileMenuWrapper>
)

export default MobileMenuButton
