import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import DescriptionContainer from './DescriptionContainer'
import { insightsDescription } from '../../../../content'
import theme from '../../../../styles/theme'

it(' successfully loads DescriptionContainer', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<DescriptionContainer {...theme} description={insightsDescription} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' has no props passed to DescriptionContainer', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<DescriptionContainer description={insightsDescription} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
