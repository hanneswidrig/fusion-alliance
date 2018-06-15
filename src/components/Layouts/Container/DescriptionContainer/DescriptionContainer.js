import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-basis: 100%;
	margin: 20px 0;
`

const Description = styled.p`
	color: ${props => props.colors.black || '#000000'};
	flex-basis: 67%;
	line-height: 1.5rem;
	font-family: ${props => props.fonts.netto || 'Helvetica'};
	font-size: ${props => props.fontSize.description || '1.125rem'};
`

const DescriptionContainer = props => {
	return (
		<Container {...props}>
			<Description {...props}>{props.description}</Description>
		</Container>
	)
}

export default DescriptionContainer
