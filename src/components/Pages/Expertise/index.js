import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import VerticalCard from '../../Card/VerticalCard'
import PageHeader from '../PageHeader'
import theme from '../../../styles/theme'
import { content } from '../../../content'

const PageContainer = styled.main`
	width: 100%;
	padding: 0 10%;
`

const Container = styled.div`
	display: flex;
	flex-flow: row wrap;
`

const NavigationContainer = styled.div`
	display: flex;
	padding: 0 10%;
`

const VerticalCardWrapper = styled.div`
	flex: 1 0 33.3%;
	padding: 16px 16px;
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

const CardContainer = props => {
	return <Container {...props}>{props.children}</Container>
}

const CardNavigation = props => {
	return <NavigationContainer {...props}>{props.children}</NavigationContainer>
}

const Expertise = () => {
	const navItems = ['latest', 'insights', 'foundations', 'experiences'].map(
		(entry, index) => (
			<StyledLink {...theme} key={index.toString()} to={`/expertise/${entry}`}>
				{entry.toUpperCase()}
			</StyledLink>
		)
	)

	const insights = content.map((entry, index) => (
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
	return (
		<PageContainer>
			<PageHeader {...theme}>Expertise</PageHeader>
			<CardNavigation {...theme}>{navItems}</CardNavigation>
			<CardContainer {...theme}>{insights}</CardContainer>
		</PageContainer>
	)
}

export default Expertise
