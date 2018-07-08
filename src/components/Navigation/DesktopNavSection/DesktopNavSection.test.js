import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import DesktopNavSection from './DesktopNavSection'
import theme from '../../../styles/theme'

it(' successfully loads DesktopNavSection', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<DesktopNavSection {...theme} />
			</ThemeProvider>
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
