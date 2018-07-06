import styled from 'styled-components'

const PageHeader = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	font-family: ${props => props.fonts.metaWeb};
	color: ${props => props.colors.grey};
	text-align: center;
	height: 96px;
`

export default PageHeader
