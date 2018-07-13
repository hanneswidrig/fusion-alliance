import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import theme from '../../styles/theme'
import errorPage from '../../images/404.svg'

/**
 * PageContainer
 * - Wraps around main body of page. Ignoring Header / Footer.
 *
 */
export const PageContainer = styled.main`
	width: 100%;
	max-width: calc(${theme.sizes.maxWidth} + 5%);
	margin: auto;
	padding: 5% 0;
`

/**
 * PageHeader
 * - Goes at the top of a page above content or navigation.
 *
 */
export const PageHeader = styled.h1`
	color: ${theme.colors.grey};
	text-align: center;
	font-weight: 600;
	font-size: 2rem;
	height: 96px;
	margin-bottom: 1rem;
	@media screen and (max-width: ${theme.responsive.medium}) {
		& {
			margin-top: 1rem;
		}
	}
`

/**
 * PageNavigation
 * - Handles interal routing to page navigation
 *
 * Example:
 * <PageNavigation match={match} routes={[{name: 'index', route:'',}]} />
 *
 */
function NavigationEntries(match, navItems) {
	const nav = []
	const countOfNavItems = (1 / navItems.length) * 100
	const indexNavigationEntry = navItems.shift()
	nav.push(
		<StyledLink
			exact
			key="index"
			to={`${match.url}`}
			count={countOfNavItems}
			activeStyle={{
				borderBottomColor: theme.colors.blue.primary,
				color: theme.colors.grey,
			}}
		>
			<span>{indexNavigationEntry.name.toUpperCase()}</span>
		</StyledLink>
	)
	nav.push(
		navItems.map((entry, index) => (
			<StyledLink
				key={index.toString()}
				to={`${match.url}/${entry.route}`}
				count={countOfNavItems}
				activeStyle={{
					borderBottomColor: theme.colors.blue.primary,
					color: theme.colors.grey,
				}}
			>
				<span>{entry.name.toUpperCase()}</span>
			</StyledLink>
		))
	)
	return nav
}

export const PageNavigation = props => {
	return (
		<NavigationContainer {...props}>
			{NavigationEntries(props.match, props.routes)}
		</NavigationContainer>
	)
}

const NavigationContainer = styled.div`
	display: flex;
	@media screen and (max-width: ${theme.responsive.small}) {
		& {
			flex-direction: ${props => (props.vertical ? 'column' : 'row')};
		}
	}
`

const StyledLink = styled(NavLink)`
	flex: 1 0 ${props => props.count}%;
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
			padding: 16px 4px;
		}
	}
`

/**
 * Placeholder
 * - Useful for empty pages that haven't been constructed yet or 404s
 */
export const Placeholder = () => {
	return (
		<PlaceholderWrapper>
			<PlaceholderTitle>
				The requested page has not been completed yet.
			</PlaceholderTitle>
			<PlaceholderImg src={errorPage} />
		</PlaceholderWrapper>
	)
}

const PlaceholderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
`

const PlaceholderTitle = styled.div`
	font-size: 2rem;
	font-weight: 500;
	color: ${theme.colors.grey};
	@media screen and (max-width: ${theme.responsive.medium}) {
		& {
			font-size: 1.5rem;
		}
	}
`

const PlaceholderImg = styled.img`
	width: 50%;
	height: auto;
	padding: 1rem;
`
