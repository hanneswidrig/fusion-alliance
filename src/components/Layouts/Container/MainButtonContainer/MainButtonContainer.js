import React from 'react'
import styled from 'styled-components'
import Button from '../../../Button/Button'
import theme from '../../../../styles/theme'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const MBC = props => {
	const buttonText = props.text.toUpperCase()
	return (
		<Container {...props}>
			<Button
				{...props}
				to={`/expertise/${props.route}`}
				themecolor={theme.colors.grey}
				textcolor={theme.colors.white}
			>
				{buttonText}
			</Button>
		</Container>
	)
}

export default MBC
