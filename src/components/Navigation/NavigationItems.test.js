import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import NavigationItems from './NavigationItems'
import theme from '../../styles/theme'

it('successfully loads NavigationItems', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={['/']} initialIndex={0}>
			<NavigationItems {...theme} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
