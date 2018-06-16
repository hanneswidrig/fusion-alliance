import React from 'react'
import styled from 'styled-components'
import theme from '../../../styles/theme'

const VideoSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #f6f8fa;
	width: 100%;
`

const Header = styled.h1`
	color: ${theme.colors.black};
	font-family: ${theme.fonts.netto};
	font-weight: 600;
	font-size: calc(16px + 1.5vw);
	margin-bottom: 20px;
	text-align: center;

	@media screen and (max-width: ${theme.responsive.small}) {
		& {
			margin-top: 20px;
		}
	}
`

const FloatingContainer = styled.div`
	margin-bottom: 20px;
	position: relative;
	width: 75vw;
	height: 45vh;
	max-width: 720px;
	max-height: 432px;

	iframe {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: ${theme.responsive.small}) {
		& {
			height: 25vh;
		}
	}
`

const VideoBanner = () => (
	<VideoSection>
		<Header>FUSION ALLIANCE TRANSFORMS BUSINESS</Header>
		<FloatingContainer>
			<iframe
				title="FUSION ALLIANCE TRANSFORMS BUSINESS"
				src="https://www.youtube.com/embed/wEwEVeiSCZQ?rel=0&amp;showinfo=0"
				frameBorder="0"
			/>
		</FloatingContainer>
	</VideoSection>
)

export default VideoBanner
