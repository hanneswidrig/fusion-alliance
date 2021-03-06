import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import NestedContact from './NestedContact'

const match = {
	url: '/contact',
}

it(' successfully loads default route', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[match.url]}>
			<NestedContact match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
