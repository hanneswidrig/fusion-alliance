import React from 'react'
import styled from 'styled-components'
import theme from './../../styles/theme'

const Wrapper = styled.footer`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: flex-start;
	margin: 0 auto;
	max-width: ${theme.sizes.maxWidth};
`

const List = styled.ul`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	border-top: 1px solid ${theme.colors.secondary};
	padding: 1em 0 2em;
	margin: 0 1.5em;
`

const Item = styled.li`
	display: inline-block;
	padding: 0.25em 0;
	width: 100%;
	@media screen and (min-width: ${theme.responsive.small}) {
		width: auto;
	}
	a {
		font-weight: 600;
		transition: all 0.2s;
		color: ${theme.colors.base};
		&:hover {
			color: ${theme.colors.highlight};
		}
		&:visited {
			color: ${theme.colors.base};
		}
	}
`

const Footer = () => (
	<Wrapper>
		<List>
			<Item>Hannes Widrig 2018</Item>
		</List>
	</Wrapper>
)

export default Footer
