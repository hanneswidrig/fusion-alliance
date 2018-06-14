import React from 'react'
import ReactDOM from 'react-dom'
import HeroBlock from './HeroBlock'

it(' successfully loads HeroBlock', () => {
	const div = document.createElement('div')
	ReactDOM.render(<HeroBlock />, div)
	ReactDOM.unmountComponentAtNode(div)
})
