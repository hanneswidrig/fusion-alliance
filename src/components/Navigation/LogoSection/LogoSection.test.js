import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import LogoSection from './LogoSection'
import theme from '../../../styles/theme'

it(' successfully loads LogoSection', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<LogoSection {...theme} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
