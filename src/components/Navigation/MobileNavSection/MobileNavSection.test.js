import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import MobileNavSection from './MobileNavSection'
import theme from '../../../styles/theme'

it(' successfully loads MobileNavSection', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<MobileNavSection {...theme} />
			</ThemeProvider>
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
