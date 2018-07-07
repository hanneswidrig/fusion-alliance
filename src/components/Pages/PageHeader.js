import styled from 'styled-components'

const PageHeader = styled.h1`
	font-family: ${props => props.fonts.renner};
	color: ${props => props.colors.grey};
	text-align: center;
	font-weight: 600;
	font-size: 2rem;
	height: 96px;
`

export default PageHeader
