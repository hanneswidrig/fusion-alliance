import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-basis: 100%;
`

const MainCardContainer = props => {
	return <Container {...props}>{props.children}</Container>
}

export default MainCardContainer
