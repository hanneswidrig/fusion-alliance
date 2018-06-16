import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Menu from './Header'
import theme from '../../styles/theme'

it(' successfully loads Header', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<Menu {...theme} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
