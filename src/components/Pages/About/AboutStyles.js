import React from 'react'
import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.div`
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
		}
	}
`

export const BlockContainer = Container.extend`
	flex-flow: row wrap;
`

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
`

export const SectionWrapper = Wrapper.extend`
	color: ${theme.colors.grey};
	align-items: center;
	@media screen and (min-width: ${theme.responsive.medium}) {
		& {
			flex: 1 0 50%;
			padding: 0 1rem 1rem 1rem;
		}
	}
`

export const BlockWrapper = Wrapper.extend`
	flex: 1 0 33.3%;
	max-width: 33.3%;
	@media screen and (max-width: ${theme.responsive.medium}) {
		& {
			flex: 1 0 50%;
			max-width: 50%;
		}
	}
	@media screen and (max-width: ${theme.responsive.small}) {
		& {
			flex: 1 0 100%;
			max-width: 100%;
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

export const BlockMain = styled.div`
	flex-direction: column;
	margin: auto;
	width: 75%;
`

export const SectionImg = styled.img`
	width: 96px;
	height: 96px;
	border-radius: 96px;
`

export const BlockImg = styled.img`
	padding: 1rem;
`

export const SectionBody = styled.p`
	line-height: 1.25rem;
`

export const Header = styled.div`
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

export const BlockHeader = styled.div`
	text-align: center;
`

export const Heading = styled.h1`
	font-size: 1.75rem;
	font-weight: 500;
	color: ${theme.colors.blue.primary};
`

export const SubHeading = styled.span`
	color: ${theme.colors.grey.primary};
	font-weight: 500;
`

export const Section = (id, type, header, body, job, img) => (
	<SectionWrapper key={id.toString()}>
		<Header>
			<div>
				<Heading>{header}</Heading>
				{type === 'image' ? <SubHeading>{job}</SubHeading> : ''}
			</div>
			{type === 'image' ? <SectionImg src={img} alt={header} /> : ''}
		</Header>
		<SectionMain>
			<SectionBody>{body}</SectionBody>
		</SectionMain>
	</SectionWrapper>
)

export const Block = (id, header, img) => (
	<BlockWrapper key={id.toString()}>
		<BlockHeader>
			<Heading>{header}</Heading>
		</BlockHeader>
		<BlockMain>
			<BlockImg src={img} alt={header} />
		</BlockMain>
	</BlockWrapper>
)
