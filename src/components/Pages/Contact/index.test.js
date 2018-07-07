import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Contact from './index'

const match = {
	url: '/contact',
}

it(' successfully loads index for Contact route', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<Contact match={match} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
