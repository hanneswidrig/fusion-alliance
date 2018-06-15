import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MainContainer from './MainContainer'

it(' successfully loads MainContainer', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<MainContainer />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
