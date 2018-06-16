import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import DesktopNavSection from './DesktopNavSection'
import theme from '../../../styles/theme'

it(' successfully loads DesktopNavSection', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<DesktopNavSection {...theme} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
