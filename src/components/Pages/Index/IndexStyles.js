import React from 'react'
import styled from 'styled-components'
import theme from '../../../styles/theme'
import { content } from '../../../content'
import Card from '../../Card/Card'

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
			max-width: calc(${props => props.sizes.maxWidth} / 2);
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
export function IndexSectionContent() {
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
