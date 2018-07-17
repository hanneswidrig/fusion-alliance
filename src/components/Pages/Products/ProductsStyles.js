import React from 'react'
import styled from 'styled-components'
import Button from '../../Button/Button'
import theme from '../../../styles/theme'

export const OverviewWrapper = styled.section`
	display: flex;
	flex-flow: row wrap;

	@media screen and (max-width: 806px) {
		& {
			flex-flow: column;
		}
	}
`

const InfoCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 32px 16px;
	flex: 1 0 50%;
`

const Header = styled.div`
	height: 3rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: ${theme.colors.blue.primary};
`

const HeaderHighlight = styled.span`
	color: ${props => theme.colors[props.themecolor].primary};
`

const HeadingIcon = styled.img`
	height: 3rem;
	width: auto;
`

const Heading = styled.div`
	font-size: 2rem;
	font-weight: 500;
	padding-left: 16px;
`

const Body = styled.div`
	margin-top: 8px;
	color: ${theme.colors.grey};
	line-height: 1.25rem;
`

const Description = styled.div`
	font-size: 1rem;
`

export const InfoCard = props => {
	return (
		<InfoCardWrapper {...props}>
			<Header>
				<HeadingIcon src={props.img} />
				<Heading>
					{props.header}{' '}
					<HeaderHighlight {...props}>{props.headerhighlight}</HeaderHighlight>
				</Heading>
			</Header>
			<Body>
				<Description>{props.description}</Description>
			</Body>
			<Button
				to="#"
				themecolor={theme.colors[props.themecolor].primary}
				textcolor={theme.colors.white}
				margin={{ top: '16px' }}
			>
				LEARN MORE
			</Button>
		</InfoCardWrapper>
	)
}

InfoCard.defaultProps = {
	header: '...',
	headerhightlight: 'grey',
	img: '',
	description: '...',
	themecolor: 'grey',
}
