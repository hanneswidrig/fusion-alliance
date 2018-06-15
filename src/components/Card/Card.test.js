import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import theme from '../../styles/theme'
import Card from './Card'

it(' successfully loads Card', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<Card {...theme} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
