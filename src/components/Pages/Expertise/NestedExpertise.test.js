import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import NestedExpertise from './NestedExpertise'

const match = {
	url: '/expertise',
}

it(' successfully loads default route', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={['/expertise']}>
			<NestedExpertise match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' successfully loads insights filter', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={['/expertise/insights']}>
			<NestedExpertise match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' successfully loads foundations filter', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={['/expertise/foundations']}>
			<NestedExpertise match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' successfully loads experiences filter', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={['/expertise/experiences']}>
			<NestedExpertise match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
