import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ContextContainer from './ContextContainer'
import theme from '../../../styles/theme'

const props = {
	title: 'Insights',
	body:
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aperiam impedit quos amet. Excepturi saepe, exercitationem, reprehenderit expedita deserunt pariatur, ipsam rem minima possimus illum itaque ea qui impedit molestias.',
}

it(' successfully loads ContextContainer', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<ContextContainer {...props} {...theme} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' receives no props', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<ContextContainer {...theme} />
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
