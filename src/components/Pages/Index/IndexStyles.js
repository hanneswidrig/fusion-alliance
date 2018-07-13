import React from 'react'
import styled from 'styled-components'
import Button from '../../Button/Button'
import Card from '../../Card/Card'
import theme from '../../../styles/theme'
import insightsSVG from '../../../images/insights.svg'
import foundationsSVG from '../../../images/foundations.svg'
import experiencesSVG from '../../../images/experiences.svg'
import { buttonText, categories, descriptions } from '../../../content'

/**
 * IndexFeatureContainer
 * - Designed to be the background for the custom built sections on the Index
 * page. Note the one required prop "backgroundcolor".
 */
export const IndexFeatureContainer = styled.div`
	width: 100%;
	background-color: ${props => props.backgroundcolor};
`

/**
 * InnerContainer
 * - Only purpose is to control content flow of the two internal sections.
 */
export const InnerContainer = styled.div`
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

/**
 * ExpertiseContainer
 * - Wraps around description of expertise
 */
export const ExpertiseContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-right: ${props => (props.extrapadding ? '16px' : '0')};
	width: 50%;
	@media screen and (max-width: ${theme.responsive.medium}) {
		& {
			width: 100%;
			padding-right: 0;
			max-width: calc(${theme.sizes.maxWidth} / 2);
		}
	}
`

/**
 * CardContainer
 * - Contains styling controlling placement of cards on Index page.
 */
export const CardContainer = props => {
	return <Wrapper>{props.children}</Wrapper>
}
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	padding: 16px;
`

/**
 * IndexSectionContent()
 * - Retrieves content from JS file and returns it in following format.
 * {
 * 	insights: Insights,
 * 	foundations: Foundations,
 * 	experiences: Experiences,
 * }
 */
function IndexSectionContent(content) {
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
	return {
		insights: Insights,
		foundations: Foundations,
		experiences: Experiences,
	}
}

/**
 * FeatureContainer
 * - Wrapper around Feature sections on Index page
 * Required Props:
 * content = {content}
 */
export const FeatureContainer = props => {
	const content = IndexSectionContent(props.content)
	return (
		<React.Fragment>
			{categories.map((feature, index) => (
				<IndexFeatureContainer
					backgroundcolor={theme.colors[feature.themecolor].light}
					key={index.toString()}
				>
					<InnerContainer reverse={feature.name === 'foundations'}>
						{feature.name === 'foundations' ? (
							<React.Fragment>
								<ExpertiseContainer>
									<CardContainer>{content[feature.name]}</CardContainer>
									<Button
										to={`/expertise/${categories[index].name}`}
										themecolor={theme.colors.grey}
										textcolor={theme.colors.white}
									>
										{buttonText[index].toUpperCase()}
									</Button>
								</ExpertiseContainer>
								<ContextContainer
									section={categories[index].name}
									title={categories[index].name}
									body={descriptions[index]}
								/>
							</React.Fragment>
						) : (
							<React.Fragment>
								<ContextContainer
									section={categories[index].name}
									title={categories[index].name}
									body={descriptions[index]}
								/>
								<ExpertiseContainer extrapadding>
									<CardContainer>{content[feature.name]}</CardContainer>
									<Button
										to={`/expertise/${categories[index].name}`}
										themecolor={theme.colors.grey}
										textcolor={theme.colors.white}
									>
										{buttonText[index].toUpperCase()}
									</Button>
								</ExpertiseContainer>
							</React.Fragment>
						)}
					</InnerContainer>
				</IndexFeatureContainer>
			))}
		</React.Fragment>
	)
}

FeatureContainer.defaultProps = {
	content: [],
}

/**
 * ContextContainer
 * - Sole Purpose is for the Heading Expertise portion of the FeatureContainer
 */
const ContextWrapper = styled.div`
	display: flex;
	width: 50%;
	color: ${theme.colors.grey};
	max-width: calc(${theme.sizes.maxWidth} / 2);
	@media screen and (max-width: ${theme.responsive.medium}) {
		& {
			width: 100%;
			padding-bottom: 20px;
		}
	}
`

const InnerContextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const InsightsContainer = ContextWrapper.extend`
	position: relative;
	justify-content: flex-end;
	align-items: center;
`

const InsightsSVG = styled.img`
	z-index: 0;
	position: absolute;
	top: 20px;
	left: 20px;
	width: 50%;
	height: 50%;
`

const Insights = InnerContextWrapper.extend`
	z-index: 1;
	color: ${theme.colors.grey};
	width: 60%;
	margin-right: 20px;
`

const FoundationsContainer = ContextWrapper.extend`
	flex-direction: column;
	justify-content: center;
	margin-left: 16px;
`

const FoundationsSVG = styled.img`
	width: 75%;
	padding-top: 16px;
	align-self: center;
`

const ExperiencesContainer = ContextWrapper.extend`
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const ExperiencesSVG = styled.img`
	width: 50%;
	height: 50%;
	padding-top: 16px;
`

const Experiences = InnerContextWrapper.extend`
	justify-content: center;
	align-items: center;
`

const Title = styled.h1`
	font-weight: 600;
	font-size: 3rem;
	padding-bottom: 16px;
	width: ${props => (props.width ? props.width : '100%')};
`

const Body = styled.p`
	line-height: 1.5;
	width: ${props => (props.width ? props.width : '100%')};
`

function contextChoice(props, sectionName) {
	const title = props.title ? props.title.toUpperCase() : ''
	const body = props.body || ''
	switch (sectionName) {
		case 'insights':
			return (
				<InsightsContainer {...props}>
					<InsightsSVG src={insightsSVG} alt="insights contextual image" />
					<Insights {...props}>
						<Title {...props}>{title}</Title>
						<Body {...props}>{body}</Body>
					</Insights>
				</InsightsContainer>
			)
		case 'foundations':
			return (
				<FoundationsContainer {...props}>
					<InnerContextWrapper {...props}>
						<Title {...props}>{title}</Title>
						<Body {...props} width="90%">
							{body}
						</Body>
					</InnerContextWrapper>
					<FoundationsSVG
						src={foundationsSVG}
						alt="foundations contextual image"
					/>
				</FoundationsContainer>
			)
		case 'experiences':
			return (
				<ExperiencesContainer {...props}>
					<Experiences {...props}>
						<Title {...props} width="90%">
							{title}
						</Title>
						<Body {...props} width="90%">
							{body}
						</Body>
					</Experiences>
					<ExperiencesSVG
						src={experiencesSVG}
						alt="experiences contextual image"
					/>
				</ExperiencesContainer>
			)
		default:
			return <React.Fragment />
	}
}

export const ContextContainer = props => contextChoice(props, props.section)
