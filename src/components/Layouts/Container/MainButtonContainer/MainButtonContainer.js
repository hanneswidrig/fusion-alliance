import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Button = styled(Link)`
	color: ${props => props.colors.grey};
	background-color: transparent;
	text-align: center;
	text-decoration: none;
	font-size: ${props => props.fontSize.button};
	border: 2px solid ${props => props.color};
	border-radius: 4px;
	padding: 10px 40px 10px 40px;
	transition: 100ms ease-in-out;
	&:hover {
		transform: scale(1.1);
		color: ${props => props.colors.white};
		background-color: ${props => props.colors.grey};
	}
`

const MBC = props => {
	const buttonText = props.text.toUpperCase()
	return (
		<Container {...props}>
			<Button {...props} to={`/expertise/${props.route}`}>
				{buttonText}
			</Button>
		</Container>
	)
}

export default MBC
