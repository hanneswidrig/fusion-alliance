import React from 'react'
import ReactDOM from 'react-dom'
import VideoBanner from './VideoBanner'
import theme from '../../../styles/theme'

it(' successfully loads VideoBanner', () => {
	const div = document.createElement('div')
	ReactDOM.render(<VideoBanner {...theme} />, div)
	ReactDOM.unmountComponentAtNode(div)
})
