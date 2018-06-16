import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import HeroBanner from './HeroBanner'

it(' successfully loads HeroBanner', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<HeroBanner />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
