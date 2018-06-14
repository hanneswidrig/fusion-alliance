import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MobileMenuButton from './MobileMenuButton'

it(' successfully loads MobileMenuButton', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<MobileMenuButton />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
