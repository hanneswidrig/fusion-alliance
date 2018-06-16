import React from 'react'
import styled from 'styled-components'
import HeroBlock from './../HeroBlock/HeroBlock'
import heroSVG from './../../../images/hero.svg'
import videoBackground from './../../../images/waves.png'
import theme from './../../../styles/theme'

const HeroSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 0 20px;

	@media screen and (max-width: ${theme.responsive.small}) {
		& {
			min-height: 250px;
			height: calc(100vw - 200px);
		}
		img {
			display: none;
		}
	}
`

const HeroImg = styled.img`
	z-index: -1;
	max-width: ${theme.sizes.maxWidth};
`

const VideoBackground = styled.img`
	z-index: -1;
	margin-top: -40px;
	width: 100vw;
`

const HeroBanner = () => (
	<HeroSection>
		<HeroImg src={heroSVG} alt="Call to Action image" />
		<HeroBlock />
		<VideoBackground src={videoBackground} alt="background image" />
	</HeroSection>
)

export default HeroBanner
