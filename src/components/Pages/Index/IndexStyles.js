import React from 'react'
import styled from 'styled-components'
import Card from '../../Card/Card'
import Button from '../../Button/Button'
import ContextContainer from '../../Layouts/ContextContainer/ContextContainer'
import { categories, buttonText, descriptions } from '../../../content'
import theme from '../../../styles/theme'

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
export function IndexSectionContent(content) {
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
 */
export const FeatureContainer = props => {
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
									<CardContainer>{props.content[feature.name]}</CardContainer>
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
									<CardContainer>{props.content[feature.name]}</CardContainer>
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
