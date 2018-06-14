import React from 'react'
import ReactDOM from 'react-dom'
import VideoBanner from './VideoBanner'

it(' successfully loads VideoBanner', () => {
	const div = document.createElement('div')
	ReactDOM.render(<VideoBanner />, div)
	ReactDOM.unmountComponentAtNode(div)
})
