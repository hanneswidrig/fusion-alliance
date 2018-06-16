import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`

const MainCardContainer = props => {
	return <Container {...props}>{props.children}</Container>
}

export default MainCardContainer
