import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NavSection from './NavSection'

it(' successfully loads NavSection', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<NavSection />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
