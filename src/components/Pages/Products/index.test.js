import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Products from './index'

const match = {
	url: '/products',
}

it(' successfully loads index for Products route', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<Products match={match} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
