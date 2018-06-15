import styled from 'styled-components'
import theme from '../../../../styles/theme'

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: 0 auto;
	max-width: ${theme.sizes.maxWidth};
`

export default MainContainer
