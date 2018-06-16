import React from 'react'
import styled from 'styled-components'
import HeroBanner from '../Hero/HeroBanner/HeroBanner'
import VideoBanner from '../Hero/VideoBanner/VideoBanner'
import MainContainer from '../Layouts/Container/MainContainer/MainContainer'
import TitleContainer from '../Layouts/Container/TitleContainer/TitleContainer'
import DescriptionContainer from '../Layouts/Container/DescriptionContainer/DescriptionContainer'
import Card from '../Card/Card'
import MainCardContainer from '../Layouts/Container/MainCardContainer/MainCardContainer'
import MainButtonContainer from '../Layouts/Container/MainButtonContainer/MainButtonContainer'
import theme from '../../styles/theme'
import {
	insights,
	insightsDescription,
	insightsButtonText,
	insightsContent,
	foundations,
	foundationsDescription,
	foundationsButtonText,
	foundationsContent,
	experiences,
	experiencesDescription,
	experiencesButtonText,
	experiencesContent,
} from '../../content'

const MainWrapper = styled.main`
	font-family: ${theme.fonts.metaWeb};
	font-weight: 400;
`

const Main = () => {
	const Insights = insightsContent.map((content, index) => (
		<Card
			{...theme}
			title={content.title}
			date={content.date}
			body={content.body}
			image={content.image}
			backgroundcolor={theme.colors.orangeTheme.orangeGentle}
			buttoncolor={theme.colors.orangeTheme.orangeButton}
			key={index.toString()}
		/>
	))
	const Foundations = foundationsContent.map((content, index) => (
		<Card
			{...theme}
			title={content.title}
			date={content.date}
			body={content.body}
			image={content.image}
			backgroundcolor={theme.colors.greenTheme.greenGentle}
			buttoncolor={theme.colors.greenTheme.greenButton}
			key={index.toString()}
		/>
	))
	const Experiences = experiencesContent.map((content, index) => (
		<Card
			{...theme}
			title={content.title}
			date={content.date}
			body={content.body}
			image={content.image}
			backgroundcolor={theme.colors.purpleTheme.purpleGentle}
			buttoncolor={theme.colors.purpleTheme.purpleButton}
			key={index.toString()}
		/>
	))
	return (
		<MainWrapper>
			<HeroBanner />
			<VideoBanner {...theme} />
			<MainContainer>
				<TitleContainer
					{...theme}
					height="72px"
					header={insights}
					themecolor={theme.colors.orangeTheme.orange}
				/>
				<DescriptionContainer {...theme} description={insightsDescription} />
				<MainCardContainer {...theme}>{Insights}</MainCardContainer>
				<MainButtonContainer
					{...theme}
					color={theme.colors.orangeTheme.orange}
					text={insightsButtonText}
				/>
			</MainContainer>
			<MainContainer>
				<TitleContainer
					{...theme}
					height="72px"
					header={foundations}
					themecolor={theme.colors.greenTheme.green}
				/>
				<DescriptionContainer {...theme} description={foundationsDescription} />
				<MainCardContainer {...theme}>{Foundations}</MainCardContainer>
				<MainButtonContainer
					{...theme}
					color={theme.colors.greenTheme.green}
					text={foundationsButtonText}
				/>
			</MainContainer>
			<MainContainer>
				<TitleContainer
					{...theme}
					height="72px"
					header={experiences}
					themecolor={theme.colors.purpleTheme.purple}
				/>
				<DescriptionContainer {...theme} description={experiencesDescription} />
				<MainCardContainer {...theme}>{Experiences}</MainCardContainer>
				<MainButtonContainer
					{...theme}
					color={theme.colors.purpleTheme.purple}
					text={experiencesButtonText}
				/>
			</MainContainer>
		</MainWrapper>
	)
}

export default Main
