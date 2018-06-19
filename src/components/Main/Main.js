import React from 'react'
import styled from 'styled-components'
import HeroBanner from '../Hero/HeroBanner/HeroBanner'
import VideoBanner from '../Hero/VideoBanner/VideoBanner'
import Card from '../Card/Card'
import MainContainer from '../Layouts/Container/MainContainer/MainContainer'
import ContextContainer from '../Layouts/Container/ContextContainer/ContextContainer'
import MCC from '../Layouts/Container/MainCardContainer/MainCardContainer'
import MBC from '../Layouts/Container/MainButtonContainer/MainButtonContainer'
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

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	max-width: 1440px;
	height: 540px;
	margin: 0 auto;
	padding: 40px 0;
	@media screen and (max-width: ${theme.responsive.medium}) {
		& {
			flex-direction: ${props => (props.reverse ? 'column-reverse' : 'column')};
			height: auto;
			align-items: center;
		}
	}
`

const ExpertiseContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-right: ${props => (props.extrapadding ? '16px' : '0')};
	width: 50%;
	@media screen and (max-width: ${theme.responsive.medium}) {
		& {
			width: 100%;
			max-width: calc(${props => props.sizes.maxWidth} / 2);
		}
	}
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
			<MainContainer backgroundcolor={theme.colors.orangeTheme.orangeGentle}>
				<Container>
					<ContextContainer
						{...theme}
						section="insights"
						title={insights}
						body={insightsDescription}
					/>
					<ExpertiseContainer {...theme} extrapadding>
						<MCC {...theme}>{Insights}</MCC>
						<MBC {...theme} text={insightsButtonText} />
					</ExpertiseContainer>
				</Container>
			</MainContainer>
			<MainContainer backgroundcolor={theme.colors.greenTheme.greenGentle}>
				<Container reverse>
					<ExpertiseContainer {...theme}>
						<MCC {...theme}>{Foundations}</MCC>
						<MBC {...theme} text={foundationsButtonText} />
					</ExpertiseContainer>
					<ContextContainer
						{...theme}
						section="foundations"
						title={foundations}
						body={foundationsDescription}
					/>
				</Container>
			</MainContainer>
			<MainContainer backgroundcolor={theme.colors.purpleTheme.purpleGentle}>
				<Container>
					<ContextContainer
						{...theme}
						section="experiences"
						title={experiences}
						body={experiencesDescription}
					/>
					<ExpertiseContainer {...theme} extrapadding>
						<MCC {...theme}>{Experiences}</MCC>
						<MBC {...theme} text={experiencesButtonText} />
					</ExpertiseContainer>
				</Container>
			</MainContainer>
		</MainWrapper>
	)
}

export default Main
