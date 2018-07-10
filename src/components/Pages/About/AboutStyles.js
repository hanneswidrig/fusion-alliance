import React from 'react'
import styled from 'styled-components'
import theme from '../../../styles/theme'

export const AboutUsWrapper = styled.div`
	@media screen and (max-width: ${theme.responsive.medium}) {
		& {
			padding: 0 10%;
		}
	}
`

export const SectionWrapper = styled.section`
	margin-top: 3rem;
	color: ${theme.colors.grey};
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const SectionMain = styled.div`
	display: flex;
	padding-top: 1rem;
	@media screen and (max-width: ${theme.responsive.medium}) {
		& {
			flex-direction: column;
		}
	}
`

export const SectionImg = styled.img`
	width: 140px;
	height: 140px;
	border-radius: 140px;
	margin: 0 1rem 1rem 1rem;
	@media screen and (max-width: ${theme.responsive.medium}) {
		& {
			width: 96px;
			height: 96px;
			border-radius: 96px;
			margin-top: 0;
		}
	}
`

export const SectionBody = styled.p`
	line-height: 1.25rem;
	text-align: justify;
`

export const SectionHeader = styled.div`
	font-size: 1rem;
	display: flex;
	flex-direction: column;
	align-self: flex-start;
`

export const SectionHeading = styled.h1`
	font-size: 1.75rem;
	font-weight: 500;
	color: ${theme.colors.blue.primary};
`

export const SectionSubHeading = styled.span`
	color: ${theme.colors.grey.primary};
	font-weight: 500;
`

export const Section = (id, type, header, body, job, img) => (
	<SectionWrapper key={id.toString()}>
		<SectionHeader>
			<SectionHeading>{header}</SectionHeading>
			{type === 'image' ? <SectionSubHeading>{job}</SectionSubHeading> : ''}
		</SectionHeader>
		<SectionMain>
			{type === 'image' ? <SectionImg src={img} alt={header} /> : ''}
			<SectionBody>{body}</SectionBody>
		</SectionMain>
	</SectionWrapper>
)
