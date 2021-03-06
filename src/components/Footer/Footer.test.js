import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import theme from '../../styles/theme'

it(' successfully loads Footer', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<Footer {...theme} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
