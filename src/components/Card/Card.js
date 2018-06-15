import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 49%;
	height: 300px;
	border-radius: 4px;
	background-color: ${props => props.colors.orangeHighlight};
	&:hover {
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
	}
`

const CardImg = styled.div`
	user-select: none;
	background-color: ${props => props.colors.orange};
	flex-basis: 67%;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
`

const Card = props => {
	return (
		<CardWrapper {...props}>
			<CardImg {...props} />
		</CardWrapper>
	)
}

export default Card
