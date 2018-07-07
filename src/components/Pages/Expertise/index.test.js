import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Expertise from './index'

const match = {
	url: '/expertise',
}

it(' successfully loads index for Expertise route', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<Expertise match={match} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
