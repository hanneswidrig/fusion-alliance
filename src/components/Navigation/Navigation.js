import React from 'react'
import styled from 'styled-components'
import MdMenu from 'react-icons/lib/md/menu'

import LogoSection from './LogoSection/LogoSection'
import MobileNavSection from './MobileNavSection/MobileNavSection'
import DesktopNavSection from './DesktopNavSection/DesktopNavSection'
import theme from '../../styles/theme'

const NavSpacing = styled.div`
	padding: 32px;
	@media screen and (min-width: ${theme.responsive.medium}) {
		& {
			display: none;
		}
	}
`

const NavBar = styled.section`
	width: 100%;
	height: 80px;
	max-width: ${theme.sizes.maxWidth};
	margin: 0 auto;
	padding: 0 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: ${theme.responsive.medium}) {
		& {
			padding: 0 10px;
		}
	}
`

const MobileMenuWrapper = styled.div`
	padding: 20px;
	cursor: pointer;

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

const NavWrapper = styled.nav`
	height: ${props => (props.active ? '366px' : '80px')};
	transition: 250ms cubic-bezier(0.19, 1, 0.22, 1);
	box-shadow: ${props =>
		props.active ? '0px 1px 5px 0px rgba(50, 50, 50, 0.25)' : 'none'};
	margin-bottom: ${props => (props.active ? '10px' : '0')};
`

class Navigation extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			toggleMenu: false,
		}
		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState({ toggleMenu: !this.state.toggleMenu })
	}

	render() {
		return (
			<NavWrapper {...theme} active={this.state.toggleMenu}>
				<NavBar {...theme}>
					<MobileMenuWrapper {...theme} onClick={this.toggle}>
						<MdMenu />
					</MobileMenuWrapper>
					<LogoSection {...theme} />
					<DesktopNavSection
						{...theme}
						entries={['expertise', 'products', 'about', 'contact', 'careers']}
					/>
					<NavSpacing />
				</NavBar>
				<MobileNavSection
					{...theme}
					active={this.state.toggleMenu}
					entries={['expertise', 'products', 'about', 'contact', 'careers']}
				/>
			</NavWrapper>
		)
	}
}

export default Navigation
