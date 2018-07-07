import React from 'react'
import styled from 'styled-components'
import insightsSVG from '../../../../images/insights.svg'
import foundationsSVG from '../../../../images/foundations.svg'
import experiencesSVG from '../../../../images/experiences.svg'

const InsightsContainer = styled.div`
	display: flex;
	position: relative;
	width: 50%;
	justify-content: flex-end;
	align-items: center;
	max-width: calc(${props => props.sizes.maxWidth} / 2);
	@media screen and (max-width: ${props => props.responsive.medium}) {
		& {
			width: 100%;
			padding: 20px 0;
		}
	}
`

const InsightsSVG = styled.img`
	z-index: 0;
	position: absolute;
	top: 20px;
	left: 20px;
	width: 50%;
	height: 50%;
`

const Insights = styled.div`
	z-index: 1;
	color: ${props => props.colors.grey};
	display: flex;
	flex-direction: column;
	width: 60%;
	margin-right: 20px;
`

const FoundationsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 50%;
	margin-left: 16px;
	max-width: calc(${props => props.sizes.maxWidth} / 2);
	@media screen and (max-width: ${props => props.responsive.medium}) {
		& {
			width: 100%;
			padding-bottom: 20px;
		}
	}
`

const FoundationsSVG = styled.img`
	width: 75%;
	padding-top: 16px;
	align-self: center;
`

const Foundations = styled.div`
	display: flex;
	flex-direction: column;
`

const ExperiencesContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50%;
	max-width: calc(${props => props.sizes.maxWidth} / 2);
	@media screen and (max-width: ${props => props.responsive.medium}) {
		& {
			width: 100%;
			padding-bottom: 20px;
		}
	}
`

const ExperiencesSVG = styled.img`
	width: 50%;
	height: 50%;
	padding-top: 16px;
`

const Experiences = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Title = styled.h1`
	font-family: ${props => props.fonts.renner};
	font-weight: 600;
	font-size: 3rem;
	padding-bottom: 16px;
	width: ${props => (props.width ? props.width : '100%')};
`

const Body = styled.p`
	font-family: ${props => props.fonts.renner};
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
					<Foundations {...props}>
						<Title {...props}>{title}</Title>
						<Body {...props} width="90%">
							{body}
						</Body>
					</Foundations>
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

const ContextContainer = props => contextChoice(props, props.section)

export default ContextContainer
