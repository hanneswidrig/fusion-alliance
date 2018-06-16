import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 20px 0 20px;
	height: ${props => props.height || '72px'};
`

const Title = styled.h2`
	color: ${props => props.colors.white || '#ffffff'};
	width: 100%;
	line-height: ${props => props.height || '72px'};
	text-align: center;
	font-size: ${props => props.fontSize.h2 || '2.5rem'};
	background-color: ${props => props.themeColor || props.colors.black};
`

const TitleContainer = props => {
	const header = props.header.toUpperCase()
	return (
		<Container {...props}>
			<Title {...props}>{header}</Title>
		</Container>
	)
}

export default TitleContainer
