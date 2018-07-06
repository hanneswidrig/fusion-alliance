import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MainButtonContainer from './MainButtonContainer'
import { buttonText } from '../../../../content'
import theme from '../../../../styles/theme'

it(' successfully loads MainButtonContainer', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<MainButtonContainer {...theme} text={buttonText[0]} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
