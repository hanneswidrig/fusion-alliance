import React from 'react'
import styled from 'styled-components'
import insightsSVG from '../../../../images/insights.svg'
import foundationsSVG from '../../../../images/foundations.svg'
import experiencesSVG from '../../../../images/experiences.svg'

const ContextWrapper = styled.div`
	display: flex;
	width: 50%;
	color: ${props => props.colors.grey};
	max-width: calc(${props => props.sizes.maxWidth} / 2);
	@media screen and (max-width: ${props => props.responsive.medium}) {
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
	color: ${props => props.colors.grey};
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

const ContextContainer = props => contextChoice(props, props.section)

export default ContextContainer
