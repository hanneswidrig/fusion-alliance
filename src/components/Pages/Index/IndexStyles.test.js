import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { ContextContainer } from './IndexStyles'

const match = {
	url: '/',
}

const props = {
	title: '',
	body: '',
}

it(' successfully loads ContextContainer without sectionName', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[match.url]}>
			<ContextContainer {...props} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
