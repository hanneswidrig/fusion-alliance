import React from 'react'
import styled from 'styled-components'
import insightsSVG from '../../../../images/insights.svg'

const Container = styled.div`
	display: flex;
	position: relative;
	width: 50%;
	justify-content: flex-end;
	align-items: center;
	max-width: calc(${props => props.sizes.maxWidth} / 2);
`

const SVGWrapper = styled.img`
	z-index: 0;
	position: absolute;
	top: 20px;
	left: 20px;
	width: 50%;
	height: 50%;
`

const TextContainer = styled.div`
	z-index: 1;
	color: ${props => props.colors.grey};
	display: flex;
	flex-direction: column;
	width: 60%;
	margin-right: 20px;
`

const Title = styled.h1`
	font-family: ${props => props.fonts.netto};
	font-weight: bold;
	font-size: 3rem;
	padding-bottom: 16px;
`
const Body = styled.p`
	font-family: ${props => props.fonts.metaWeb};
	line-height: 1.5;
`

const ContextContainer = props => {
	const title = props.title.toUpperCase() || ''
	return (
		<Container {...props}>
			<SVGWrapper src={insightsSVG} alt="insights contextual image" />
			<TextContainer {...props}>
				<Title {...props}>{title}</Title>
				<Body {...props}>{props.body}</Body>
			</TextContainer>
		</Container>
	)
}

export default ContextContainer
