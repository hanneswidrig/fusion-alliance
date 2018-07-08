import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import NestedAbout from './NestedAbout'

const match = {
	url: '/about',
}

it(' successfully loads default route', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={['/about']}>
			<NestedAbout match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' successfully loads partnerships page', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={['/about/partnerships']}>
			<NestedAbout match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
