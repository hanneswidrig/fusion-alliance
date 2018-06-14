import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MobileNavSection from './MobileNavSection'

it(' successfully loads MobileNavSection', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<MobileNavSection />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
