import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MainCardContainer from './MainCardContainer'
import theme from '../../../../styles/theme'

it(' successfully loads MainCardContainer', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<MainCardContainer {...theme} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
