import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navigation from './Navigation'
import theme from '../../styles/theme'

Enzyme.configure({ adapter: new Adapter() })

it('successfully loads Navigation', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={['/']} initialIndex={0}>
			<ThemeProvider theme={theme}>
				<Navigation {...theme} />
			</ThemeProvider>
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it('toggles mobile navigation panel', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/']} initialIndex={0}>
			<ThemeProvider theme={theme}>
				<Navigation {...theme} />
			</ThemeProvider>
		</MemoryRouter>
	)
	const instance = wrapper.find(Navigation).instance()
	instance.toggle()
	expect(instance.state.toggleMenu).toEqual(true)
})
