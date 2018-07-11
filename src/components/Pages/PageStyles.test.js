import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { PageNavigation } from './PageStyles'

const match = {
	url: '/expertise',
}

const routes = [
	{
		name: 'index',
		route: '',
	},
]

it(' successfully loads PageNavigationComponent', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[match.url]}>
			<PageNavigation match={match} routes={routes} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
