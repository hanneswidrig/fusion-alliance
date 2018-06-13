import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import styledHeaderTheme from '../../styles/styledHeaderTheme'

const Section = styled.section`
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  user-select: none;

  a {
    padding: 16px;
    text-decoration: none;
    text-align: center;
    color: ${styledHeaderTheme.colors.blackLinkHover};
  }
`

const NavSection = props => {
  return (
    <Section active={props.active}>
      <Link
        exact
        to="/"
        activeStyle={{ color: styledHeaderTheme.colors.activeLinkStyle }}
      >
        HOME
      </Link>
      <Link
        to="/expertise/"
        activeStyle={{ color: styledHeaderTheme.colors.activeLinkStyle }}
      >
        EXPERTISE
      </Link>
      <Link
        to="/products/"
        activeStyle={{ color: styledHeaderTheme.colors.activeLinkStyle }}
      >
        PRODUCTS
      </Link>
      <Link
        to="/about/"
        activeStyle={{ color: styledHeaderTheme.colors.activeLinkStyle }}
      >
        ABOUT
      </Link>
      <Link
        to="/contact/"
        activeStyle={{ color: styledHeaderTheme.colors.activeLinkStyle }}
      >
        CONTACT
      </Link>
      <Link
        to="/careers/"
        activeStyle={{ color: styledHeaderTheme.colors.activeLinkStyle }}
      >
        CAREERS
      </Link>
    </Section>
  )
}

export default NavSection
