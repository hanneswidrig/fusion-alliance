import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import NestedExpertise from './NestedExpertise'

it(' successfully loads NestedExpertise', () => {
	const div = document.createElement('div')
	const match = {
		url: '/expertise',
	}
	ReactDOM.render(
		<MemoryRouter initialEntries={['/expertise']}>
			<NestedExpertise match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
