import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import { NavigationEntries, PageNavigation } from '../PageStyles'
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
	@media screen and (max-width: ${props => props.responsive.medium}) {
		& {
			flex: 1 0 50%;
		}
	}
	@media screen and (max-width: ${props => props.responsive.small}) {
		& {
			flex: 1 0 100%;
		}
	}
`

const CardContainer = props => {
	return <Container {...props}>{props.children}</Container>
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

const NestedExpertise = ({ match }) => {
	return (
		<React.Fragment>
			<PageNavigation>
				{NavigationEntries(match, [
					{ name: 'latest articles', route: '' },
					{ name: 'insights', route: 'insights' },
					{ name: 'foundations', route: 'foundations' },
					{ name: 'experiences', route: 'experiences' },
				])}
			</PageNavigation>
			<Route exact path={match.url} component={SubView} />
			<Route path={`${match.url}/:sectionName`} component={SubView} />
		</React.Fragment>
	)
}

export default NestedExpertise
