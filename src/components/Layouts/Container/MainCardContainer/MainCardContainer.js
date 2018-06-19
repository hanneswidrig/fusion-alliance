import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	padding: 16px;
`

const MCC = props => {
	return <Container {...props}>{props.children}</Container>
}

export default MCC
