import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 30px 0 30px;
`

const Description = styled.p`
	color: ${props => (props.colors ? props.colors.black : '#000000')};
	line-height: 1.5rem;
	font-size: ${props => (props.fontSize ? props.fontSize.description : '1rem')};
`

const DescriptionContainer = props => {
	return (
		<Container {...props}>
			<Description {...props}>{props.description}</Description>
		</Container>
	)
}

export default DescriptionContainer
