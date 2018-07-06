import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import theme from '../../styles/theme'
import VerticalCard from './VerticalCard'

it(' successfully loads VerticalCard', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<VerticalCard {...theme} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
