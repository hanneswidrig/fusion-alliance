import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import LogoSection from './LogoSection'

it(' successfully loads LogoSection', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<LogoSection />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
