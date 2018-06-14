import React from 'react'
import ReactDOM from 'react-dom'
import HeroBanner from './HeroBanner'

it(' successfully loads HeroBanner', () => {
	const div = document.createElement('div')
	ReactDOM.render(<HeroBanner />, div)
	ReactDOM.unmountComponentAtNode(div)
})
