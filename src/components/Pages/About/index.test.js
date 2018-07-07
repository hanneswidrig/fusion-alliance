import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import About from './index'

const match = {
	url: '/about',
}

it(' successfully loads index for About route', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<About match={match} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
