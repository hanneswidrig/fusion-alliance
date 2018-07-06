import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import PageHeader from './PageHeader'
import theme from '../../styles/theme'

it(' successfully loads PageHeader', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<PageHeader {...theme} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
