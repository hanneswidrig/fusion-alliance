import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import MdMenu from 'react-icons/lib/md/menu'
import theme from '../../../styles/theme'

const MobileMenuWrapper = styled(NavLink)`
	padding: 20px;
	svg {
		color: ${theme.colors.black};
		width: 24px;
		height: 24px;
	}

	@media screen and (min-width: ${theme.responsive.medium}) {
		& {
			display: none;
		}
	}
`

const MobileMenuButton = () => (
	<MobileMenuWrapper
		to="#"
		activeStyle={{ color: theme.colors.activeLinkStyle }}
	>
		<MdMenu />
	</MobileMenuWrapper>
)

export default MobileMenuButton
