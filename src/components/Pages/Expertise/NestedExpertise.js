import React from 'react'
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components'
import VerticalCard from '../../Card/VerticalCard'
import { content } from '../../../content'
import theme from '../../../styles/theme'

const Container = styled.div`
	display: flex;
	flex-flow: row wrap;
`

const VerticalCardWrapper = styled.div`
	flex: 1 0 33.3%;
	padding: 16px 16px;
`

const CardContainer = props => {
	return <Container {...props}>{props.children}</Container>
}

const NavigationContainer = styled.div`
	display: flex;
	padding: 0 10%;
`

const StyledLink = styled(Link)`
	flex: 1 0 25%;
	text-align: center;
	text-decoration: none;
	font-size: 1.125rem;
	font-weight: bold;
	letter-spacing: 1px;
	font-family: ${props => props.fonts.metaWeb};
	padding: 16px 0;
	color: ${props => props.colors.grey};
	border-bottom: 2px solid #fbfbfb;
	transition: 200ms ease-in-out;
	&:hover {
		border-bottom: 2px solid ${props => props.colors.grey};
	}
`

const CardNavigation = props => {
	return <NavigationContainer {...props}>{props.children}</NavigationContainer>
}

const SubView = ({ match }) => {
	const all = content.map((entry, index) => (
		<VerticalCardWrapper {...theme} key={index.toString()}>
			<VerticalCard
				{...theme}
				title={entry.title}
				date={entry.date}
				body={entry.body}
				image={entry.image}
				backgroundcolor={theme.colors.orangeTheme.orangeGentle}
				iconcolor={theme.colors.orangeTheme.orangeIcon}
			/>
		</VerticalCardWrapper>
	))

	const insights = content
		.filter(entry => entry.category === 0)
		.map((entry, index) => (
			<VerticalCardWrapper {...theme} key={index.toString()}>
				<VerticalCard
					{...theme}
					title={entry.title}
					date={entry.date}
					body={entry.body}
					image={entry.image}
					backgroundcolor={theme.colors.orangeTheme.orangeGentle}
					iconcolor={theme.colors.orangeTheme.orangeIcon}
				/>
			</VerticalCardWrapper>
		))

	const foundations = content
		.filter(entry => entry.category === 1)
		.map((entry, index) => (
			<VerticalCardWrapper {...theme} key={index.toString()}>
				<VerticalCard
					{...theme}
					title={entry.title}
					date={entry.date}
					body={entry.body}
					image={entry.image}
					backgroundcolor={theme.colors.greenTheme.greenGentle}
					iconcolor={theme.colors.greenTheme.greenIcon}
				/>
			</VerticalCardWrapper>
		))

	const experiences = content
		.filter(entry => entry.category === 2)
		.map((entry, index) => (
			<VerticalCardWrapper {...theme} key={index.toString()}>
				<VerticalCard
					{...theme}
					title={entry.title}
					date={entry.date}
					body={entry.body}
					image={entry.image}
					backgroundcolor={theme.colors.purpleTheme.purpleGentle}
					iconcolor={theme.colors.purpleTheme.purpleIcon}
				/>
			</VerticalCardWrapper>
		))

	switch (match.params.sectionName) {
		case 'insights':
			return <CardContainer>{insights}</CardContainer>
		case 'foundations':
			return <CardContainer>{foundations}</CardContainer>
		case 'experiences':
			return <CardContainer>{experiences}</CardContainer>
		default:
			return <CardContainer>{all}</CardContainer>
	}
}

function NavigationEntries(match) {
	const nav = []
	const navItems = [
		{ name: 'insights', route: 'insights' },
		{ name: 'foundations', route: 'foundations' },
		{ name: 'experiences', route: 'experiences' },
	]
	nav.push(
		<StyledLink {...theme} key="index" to={`${match.url}`}>
			LATEST ARTICLES
		</StyledLink>
	)
	nav.push(
		navItems.map((entry, index) => (
			<StyledLink
				{...theme}
				key={index.toString()}
				to={`${match.url}/${entry.route}`}
			>
				{entry.name.toUpperCase()}
			</StyledLink>
		))
	)
	return nav
}

const NestedExpertise = ({ match }) => {
	return (
		<React.Fragment>
			<CardNavigation {...theme}>{NavigationEntries(match)}</CardNavigation>
			<Route exact path={match.url} component={SubView} />
			<Route path={`${match.url}/:sectionName`} component={SubView} />
		</React.Fragment>
	)
}

export default NestedExpertise
