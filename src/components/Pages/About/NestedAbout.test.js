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
		<MemoryRouter initialEntries={[match.url]}>
			<NestedAbout match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' successfully loads partnerships page', () => {
	const route = 'partnerships'
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[`${match.url}/${route}`]}>
			<NestedAbout match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
