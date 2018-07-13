import React from 'react'
import HeroBanner from '../../Hero/HeroBanner/HeroBanner'
import VideoBanner from '../../Hero/VideoBanner/VideoBanner'
import ContextContainer from '../../Layouts/ContextContainer/ContextContainer'
import {
	IndexFeatureContainer,
	InnerContainer,
	ExpertiseContainer,
	CardContainer,
	IndexSectionContent,
} from './IndexStyles'
import Button from '../../Button/Button'
import theme from '../../../styles/theme'
import { categories, buttonText, descriptions } from '../../../content'

const Main = props => {
	const content = IndexSectionContent()
	return (
		<main>
			<HeroBanner {...props} />
			<VideoBanner />
			<IndexFeatureContainer backgroundcolor={theme.colors.orange.light}>
				<InnerContainer>
					<ContextContainer
						{...theme}
						section={categories[0]}
						title={categories[0]}
						body={descriptions[0]}
					/>
					<ExpertiseContainer {...theme} extrapadding>
						<CardContainer {...theme}>{content.insights}</CardContainer>
						<Button
							to={`/expertise/${categories[0]}`}
							themecolor={theme.colors.grey}
							textcolor={theme.colors.white}
						>
							{buttonText[0].toUpperCase()}
						</Button>
					</ExpertiseContainer>
				</InnerContainer>
			</IndexFeatureContainer>
			<IndexFeatureContainer backgroundcolor={theme.colors.green.light}>
				<InnerContainer reverse="true">
					<ExpertiseContainer {...theme}>
						<CardContainer {...theme}>{content.foundations}</CardContainer>
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
				</InnerContainer>
			</IndexFeatureContainer>
			<IndexFeatureContainer backgroundcolor={theme.colors.purple.light}>
				<InnerContainer>
					<ContextContainer
						{...theme}
						section={categories[2]}
						title={categories[2]}
						body={descriptions[2]}
					/>
					<ExpertiseContainer {...theme} extrapadding>
						<CardContainer {...theme}>{content.experiences}</CardContainer>
						<Button
							to={`/expertise/${categories[2]}`}
							themecolor={theme.colors.grey}
							textcolor={theme.colors.white}
						>
							{buttonText[2].toUpperCase()}
						</Button>
					</ExpertiseContainer>
				</InnerContainer>
			</IndexFeatureContainer>
		</main>
	)
}

export default Main
