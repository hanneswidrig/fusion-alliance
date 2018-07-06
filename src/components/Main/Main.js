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
import { categories, buttonText, descriptions, content } from '../../content'

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
			padding-right: 0;
			max-width: calc(${props => props.sizes.maxWidth} / 2);
		}
	}
`

const Main = () => {
	const Insights = content
		.filter(entry => entry.category === 0)
		.map((entry, index) => (
			<Card
				{...theme}
				title={entry.title}
				date={entry.date}
				body={entry.body}
				image={entry.image}
				backgroundcolor={theme.colors.orangeTheme.orangeGentle}
				iconcolor={theme.colors.orangeTheme.orangeIcon}
				key={index.toString()}
			/>
		))
	const Foundations = content
		.filter(entry => entry.category === 1)
		.map((entry, index) => (
			<Card
				{...theme}
				title={entry.title}
				date={entry.date}
				body={entry.body}
				image={entry.image}
				backgroundcolor={theme.colors.greenTheme.greenGentle}
				iconcolor={theme.colors.greenTheme.greenIcon}
				key={index.toString()}
			/>
		))
	const Experiences = content
		.filter(entry => entry.category === 2)
		.map((entry, index) => (
			<Card
				{...theme}
				title={entry.title}
				date={entry.date}
				body={entry.body}
				image={entry.image}
				backgroundcolor={theme.colors.purpleTheme.purpleGentle}
				iconcolor={theme.colors.purpleTheme.purpleIcon}
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
						section={categories[0]}
						title={categories[0]}
						body={descriptions[0]}
					/>
					<ExpertiseContainer {...theme} extrapadding>
						<MCC {...theme}>{Insights}</MCC>
						<MBC {...theme} text={buttonText[0]} />
					</ExpertiseContainer>
				</Container>
			</MainContainer>
			<MainContainer backgroundcolor={theme.colors.greenTheme.greenGentle}>
				<Container reverse>
					<ExpertiseContainer {...theme}>
						<MCC {...theme}>{Foundations}</MCC>
						<MBC {...theme} text={buttonText[1]} />
					</ExpertiseContainer>
					<ContextContainer
						{...theme}
						section={categories[1]}
						title={categories[1]}
						body={descriptions[1]}
					/>
				</Container>
			</MainContainer>
			<MainContainer backgroundcolor={theme.colors.purpleTheme.purpleGentle}>
				<Container>
					<ContextContainer
						{...theme}
						section={categories[2]}
						title={categories[2]}
						body={descriptions[2]}
					/>
					<ExpertiseContainer {...theme} extrapadding>
						<MCC {...theme}>{Experiences}</MCC>
						<MBC {...theme} text={buttonText[2]} />
					</ExpertiseContainer>
				</Container>
			</MainContainer>
		</MainWrapper>
	)
}

export default Main
