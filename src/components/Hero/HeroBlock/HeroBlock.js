import React from 'react'
import styled from 'styled-components'
import theme from '../../../styles/theme'
import CallToAction from './../CallToAction/CallToAction'

const HeroWrapper = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	margin-top: calc(100px - 5vw);

	@media screen and (max-width: ${theme.responsive.small}) {
		margin: 0;
	}
`

const HeroTitle = styled.div`
	font-size: calc(16px + 2.75vw);
	color: ${theme.colors.blue};
	@media screen and (min-width: ${theme.responsive.large}) {
		& {
			font-size: 3rem;
		}
	}
`

const HeroTitleDetails = styled.div`
	padding: 8px 0 14px 0;
	line-height: 1.25rem;
	width: 50%;
`

const HeroBlock = () => (
	<HeroWrapper>
		<HeroTitle>IDEAS TO EXECUTION</HeroTitle>
		<HeroTitleDetails>
			Our experts dig deep into the latest marketing, data, and tech trends,
			providing insights for CIOs, CMOs, marketing directors, tech leaders, and
			more.
		</HeroTitleDetails>
		<CallToAction />
	</HeroWrapper>
)

export default HeroBlock
