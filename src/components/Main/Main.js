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
} from '../../content'

const Main = () => (
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
			<MainCardContainer {...theme}>
				<Card {...theme} />
				<Card {...theme} />
			</MainCardContainer>
			<MainButtonContainer {...theme} text={insightsButtonText} />
		</MainContainer>
	</main>
)

export default Main
