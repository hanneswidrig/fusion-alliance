import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import theme from '../../styles/theme'

it('successfully loads App', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={['/']} initialIndex={0}>
			<ThemeProvider theme={theme}>
				<App {...theme} />
			</ThemeProvider>
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
