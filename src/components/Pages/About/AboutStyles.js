import React from 'react'
import styled from 'styled-components'
import theme from '../../../styles/theme'

export const AboutUsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: ${theme.responsive.medium}) {
		& {
			padding: 0 10%;
		}
	}

	@media screen and (min-width: ${theme.responsive.medium}) {
		& {
			flex-flow: row wrap;
			padding: 0 5%;
		}
	}
`

export const SectionWrapper = styled.section`
	margin-top: 2rem;
	color: ${theme.colors.grey};
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (min-width: ${theme.responsive.medium}) {
		& {
			flex: 1 0 50%;
			padding: 0 1rem 1rem 1rem;
		}
	}
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
	width: 96px;
	height: 96px;
	border-radius: 96px;
	margin: 1rem;
`

export const SectionBody = styled.p`
	line-height: 1.25rem;
`

export const SectionHeader = styled.div`
	width: 100%;
	display: flex;
	font-size: 1rem;
	flex-direction: column;
	justify-content: space-between;
	@media screen and (max-width: ${theme.responsive.small}) {
		& {
			flex-direction: row;
		}
	}
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
			<div>
				<SectionHeading>{header}</SectionHeading>
				{type === 'image' ? <SectionSubHeading>{job}</SectionSubHeading> : ''}
			</div>
			{type === 'image' ? <SectionImg src={img} alt={header} /> : ''}
		</SectionHeader>
		<SectionMain>
			<SectionBody>{body}</SectionBody>
		</SectionMain>
	</SectionWrapper>
)
