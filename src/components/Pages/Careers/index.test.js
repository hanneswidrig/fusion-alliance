import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Careers from './index'

const match = {
	url: '/careers',
}

it(' successfully loads index for Careers route', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<Careers match={match} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
