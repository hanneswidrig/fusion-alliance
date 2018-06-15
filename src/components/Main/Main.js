import React from 'react'
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
} from '../../content'

const Main = () => {
	const Insights = insightsContent.map((content, index) => (
		<Card
			{...theme}
			title={content.title}
			date={content.date}
			body={content.body}
			key={index.toString()}
		/>
	))
	return (
		<main>
			<HeroBanner />
			<VideoBanner />
			<MainContainer>
				<TitleContainer
					{...theme}
					height="72px"
					header={insights}
					themeColor={theme.colors.orange}
				/>
				<DescriptionContainer {...theme} description={insightsDescription} />
				<MainCardContainer {...theme}>{Insights}</MainCardContainer>
				<MainButtonContainer {...theme} text={insightsButtonText} />
			</MainContainer>
		</main>
	)
}

export default Main
