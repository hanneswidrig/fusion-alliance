import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import theme from '../../styles/theme'

export const PageContainer = styled.main`
	width: 100%;
	padding: 5% 10%;
	@media screen and (max-width: ${theme.responsive.medium}) {
		& {
			padding: 5% 0;
		}
	}
`

export const PageHeader = styled.h1`
	color: ${theme.colors.grey};
	text-align: center;
	font-weight: 600;
	font-size: 2rem;
	height: 96px;
`

export const StyledLink = styled(NavLink)`
	flex: 1 0 25%;
	text-align: center;
	text-decoration: none;
	font-weight: 500;
	padding: 16px 0;
	color: hsla(0, 0%, 50%, 1);
	border-bottom: 3px solid transparent;
	transition: 200ms ease-in-out;
	&:hover {
		border-bottom: 3px solid ${theme.colors.grey};
	}
	@media screen and (max-width: ${theme.responsive.small}) {
		& {
			flex: 1 0 100%;
			padding: 16px 4px;
		}
	}
`

export function NavigationEntries(match, navItems) {
	const nav = []
	nav.push(
		<StyledLink
			exact
			key="index"
			to={`${match.url}`}
			activeStyle={{
				borderBottomColor: theme.colors.blue,
				color: theme.colors.grey,
			}}
		>
			<span>LATEST ARTICLES</span>
		</StyledLink>
	)
	nav.push(
		navItems.map((entry, index) => (
			<StyledLink
				key={index.toString()}
				to={`${match.url}/${entry.route}`}
				activeStyle={{
					borderBottomColor: theme.colors.blue,
					color: theme.colors.grey,
				}}
			>
				<span>{entry.name.toUpperCase()}</span>
			</StyledLink>
		))
	)
	return nav
}
