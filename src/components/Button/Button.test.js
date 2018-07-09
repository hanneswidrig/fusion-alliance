import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Button from './Button'
import theme from '../../styles/theme'

it('successfully loads Button', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={['/']} initialIndex={0}>
			<Button
				to="#"
				themecolor={theme.colors.blue.primary}
				textcolor={theme.colors.white}
			/>
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it('successfully loads Button without props', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={['/']} initialIndex={0}>
			<ThemeProvider theme={theme}>
				<Button />
			</ThemeProvider>
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
