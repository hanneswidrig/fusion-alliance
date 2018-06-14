import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import CallToAction from './CallToAction'

it(' successfully loads CallToAction button', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<CallToAction />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
