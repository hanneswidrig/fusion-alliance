import React from 'react'
import HeroBanner from '../Hero/HeroBanner/HeroBanner'
import VideoBanner from '../Hero/VideoBanner/VideoBanner'
import MainContainer from '../Layouts/Container/MainContainer/MainContainer'
import TitleContainer from '../Layouts/Container/TitleContainer/TitleContainer'
import DescriptionContainer from '../Layouts/Container/DescriptionContainer/DescriptionContainer'
import theme from '../../styles/theme'
import { insights, insightsDescription } from '../../content'

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
		</MainContainer>
	</main>
)

export default Main
