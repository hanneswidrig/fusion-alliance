import React from 'react'
import ReactDOM from 'react-dom'
import CallToAction from './CallToAction'

it(' successfully loads CallToAction button', () => {
	const div = document.createElement('div')
	ReactDOM.render(<CallToAction />, div)
	ReactDOM.unmountComponentAtNode(div)
})
