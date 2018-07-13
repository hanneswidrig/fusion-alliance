import React from 'react'
import styled from 'styled-components'
import HeroBanner from '../../Hero/HeroBanner/HeroBanner'
import VideoBanner from '../../Hero/VideoBanner/VideoBanner'
import Card from '../../Card/Card'
import MainContainer from '../../Layouts/Container/MainContainer/MainContainer'
import ContextContainer from '../../Layouts/Container/ContextContainer/ContextContainer'
import MCC from '../../Layouts/Container/MainCardContainer/MainCardContainer'
import Button from '../../Button/Button'
import theme from '../../../styles/theme'
import { categories, buttonText, descriptions, content } from '../../../content'

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

const Main = props => {
	const Insights = content
		.filter(entry => entry.category === 0)
		.map((entry, index) => (
			<Card
				{...theme}
				title={entry.title}
				date={entry.date}
				body={entry.body}
				image={entry.image}
				backgroundcolor={theme.colors.orange.light}
				iconcolor={theme.colors.orange.dark}
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
				backgroundcolor={theme.colors.green.light}
				iconcolor={theme.colors.green.dark}
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
				backgroundcolor={theme.colors.purple.light}
				iconcolor={theme.colors.purple.dark}
				key={index.toString()}
			/>
		))
	return (
		<main>
			<HeroBanner {...props} />
			<VideoBanner {...theme} />
			<MainContainer backgroundcolor={theme.colors.orange.light}>
				<Container>
					<ContextContainer
						{...theme}
						section={categories[0]}
						title={categories[0]}
						body={descriptions[0]}
					/>
					<ExpertiseContainer {...theme} extrapadding>
						<MCC {...theme}>{Insights}</MCC>
						<Button
							to={`/expertise/${categories[0]}`}
							themecolor={theme.colors.grey}
							textcolor={theme.colors.white}
						>
							{buttonText[0].toUpperCase()}
						</Button>
					</ExpertiseContainer>
				</Container>
			</MainContainer>
			<MainContainer backgroundcolor={theme.colors.green.light}>
				<Container reverse>
					<ExpertiseContainer {...theme}>
						<MCC {...theme}>{Foundations}</MCC>
						<Button
							to={`/expertise/${categories[1]}`}
							themecolor={theme.colors.grey}
							textcolor={theme.colors.white}
						>
							{buttonText[1].toUpperCase()}
						</Button>
					</ExpertiseContainer>
					<ContextContainer
						{...theme}
						section={categories[1]}
						title={categories[1]}
						body={descriptions[1]}
					/>
				</Container>
			</MainContainer>
			<MainContainer backgroundcolor={theme.colors.purple.light}>
				<Container>
					<ContextContainer
						{...theme}
						section={categories[2]}
						title={categories[2]}
						body={descriptions[2]}
					/>
					<ExpertiseContainer {...theme} extrapadding>
						<MCC {...theme}>{Experiences}</MCC>
						<Button
							to={`/expertise/${categories[2]}`}
							themecolor={theme.colors.grey}
							textcolor={theme.colors.white}
						>
							{buttonText[2].toUpperCase()}
						</Button>
					</ExpertiseContainer>
				</Container>
			</MainContainer>
		</main>
	)
}

export default Main
