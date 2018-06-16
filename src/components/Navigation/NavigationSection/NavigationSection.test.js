import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NavigationSection from './NavigationSection'
import theme from '../../../styles/theme'

it(' successfully loads NavigationSection', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<NavigationSection {...theme} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
