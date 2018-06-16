import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Main from './Main'

it(' successfully loads Main', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<Main />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
