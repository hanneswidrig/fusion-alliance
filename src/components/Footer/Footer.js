import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
	background-color: hsla(202, 100%, 37%, 1);
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 100%;
	height: 80px;
`

const Copyright = styled.div`
	display: flex;
	color: white;
	font-family: ${props => props.fonts.metaWeb};
`

const Footer = props => (
	<Wrapper {...props}>
		<Copyright {...props}>&#169; Fusion Alliance 2018</Copyright>
	</Wrapper>
)

export default Footer
