import React from 'react'
import styled from 'styled-components'

const VideoSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: hsla(202, 16%, 96%, 1);
	width: 100%;
`

const Header = styled.h1`
	color: ${props => props.colors.darkBlue};
	font-family: ${props => props.fonts.netto};
	font-weight: 600;
	font-size: calc(16px + 1.5vw);
	margin-bottom: 20px;
	text-align: center;

	@media screen and (max-width: ${props => props.responsive.small}) {
		& {
			margin-top: 20px;
		}
	}
`

const VideoContainer = styled.div`
	width: 80%;
	margin-bottom: 20px;
	max-width: ${props => props.sizes.maxWidth};
`

const FloatingContainer = styled.div`
	position: relative;
	padding-bottom: 56.25%;
	height: 0;
	width: 100%;

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`

const VideoBanner = props => (
	<VideoSection {...props}>
		<Header {...props}>FUSION ALLIANCE TRANSFORMS BUSINESS</Header>
		<VideoContainer {...props}>
			<FloatingContainer>
				<iframe
					title="FUSION ALLIANCE TRANSFORMS BUSINESS"
					src="https://www.youtube.com/embed/wEwEVeiSCZQ"
					frameBorder="0"
				/>
			</FloatingContainer>
		</VideoContainer>
	</VideoSection>
)

export default VideoBanner
