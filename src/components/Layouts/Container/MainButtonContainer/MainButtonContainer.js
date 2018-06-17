import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-basis: 100%;
`

const Button = styled(Link)`
	color: ${props => props.color};
	text-align: center;
	text-decoration: none;
	font-size: ${props => props.fontSize.button};
	background-color: ${props => props.colors.white};
	border: 2px solid ${props => props.color};
	border-radius: 4px;
	padding: 12px 40px 8px 40px;
	transition: 100ms ease-in-out;
	&:hover {
		transform: scale(1.1);
		color: ${props => props.colors.white};
		background-color: ${props => props.color};
	}
`

const MainButtonContainer = props => {
	const buttonText = props.text.toUpperCase()
	return (
		<Container {...props}>
			<Button {...props} to="/expertise">
				{buttonText}
			</Button>
		</Container>
	)
}

export default MainButtonContainer
