import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import HeroBlock from './HeroBlock'

it(' successfully loads HeroBlock', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<HeroBlock />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
