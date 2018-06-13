import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from './../../images/header-logo.png'
import styledHeaderTheme from '../../styles/styledHeaderTheme'

const LSection = styled.section`
  height: 38px;

  a {
    padding: 0 0 6px 0;
    margin: 0;
    user-select: none;
  }

  a > img {
    width: auto;
    height: 32px;
  }

  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    & {
      height: 32px;
      padding: 0 10px;
    }
    a {
      padding: 0;
    }
  }
`

const LogoSection = () => (
  <LSection>
    <Link
      to="/"
      activeStyle={{ color: styledHeaderTheme.colors.activeLinkStyle }}
    >
      <img src={logo} alt="logo" />
    </Link>
  </LSection>
)

export default LogoSection
