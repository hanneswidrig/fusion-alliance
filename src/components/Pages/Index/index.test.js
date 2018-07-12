import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Main from './index'
import theme from '../../../styles/theme'

it(' successfully loads Main', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Main />
			</ThemeProvider>
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
