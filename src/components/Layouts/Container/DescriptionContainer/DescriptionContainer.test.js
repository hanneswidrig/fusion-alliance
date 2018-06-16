import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import DescriptionContainer from './DescriptionContainer'
import theme from '../../../../styles/theme'
import { insightsDescription } from '../../../../content'

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
