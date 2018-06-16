import React from 'react'
import styled from 'styled-components'
import { colors } from './../../../../styles/theme'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	height: ${props => (props.height ? props.height : '72px')};
`

const Title = styled.h2`
	color: ${props => (props.colors ? props.colors.white : '#ffffff')};
	width: 100%;
	line-height: ${props => (props.height ? props.height : '72px')};
	text-align: center;
	font-size: ${props => (props.fontSize ? props.fontSize.h2 : '2.5rem')};
	background-color: ${props =>
		props.themecolor ? props.themecolor : colors.blue};
`

const TitleContainer = props => {
	const header = props.header ? props.header.toUpperCase() : ''
	return (
		<Container {...props}>
			<Title {...props}>{header}</Title>
		</Container>
	)
}

export default TitleContainer
