import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import styledHeaderTheme from '../../styles/styledHeaderTheme'

const Section = styled.section`
  display: none;
  a {
    color: ${styledHeaderTheme.colors.grey};
    text-decoration: none;
    padding: 28.5px 8px;
    height: 100%;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: ${styledHeaderTheme.colors.blackLinkHover};
      text-decoration: underline;
    }
  }

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    & {
      display: flex;
    }
  }
`

const NavSection = () => (
  <Section>
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

export default NavSection
