import React from 'react'
import styled from 'styled-components'
import VerticalCard from '../../Card/VerticalCard'
import PageHeader from '../PageHeader'
import theme from '../../../styles/theme'
import { insightsContent } from '../../../content'

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	padding: 16px;
`

const CardContainer = props => {
	return <Container {...props}>{props.children}</Container>
}

const Expertise = () => {
	const Insights = insightsContent.map((content, index) => (
		<VerticalCard
			{...theme}
			title={content.title}
			date={content.date}
			body={content.body}
			image={content.image}
			backgroundcolor={theme.colors.orangeTheme.orangeGentle}
			iconcolor={theme.colors.orangeTheme.orangeIcon}
			key={index.toString()}
		/>
	))
	return (
		<div>
			<PageHeader {...theme}>Expertise</PageHeader>
			<CardContainer {...theme}>{Insights}</CardContainer>
		</div>
	)
}

export default Expertise
