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
		<MemoryRouter initialEntries={[match.url]}>
			<NestedExpertise match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' successfully loads insights filter', () => {
	const route = 'insights'
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[`${match.url}/${route}`]}>
			<NestedExpertise match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' successfully loads foundations filter', () => {
	const route = 'foundations'
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[`${match.url}/${route}`]}>
			<NestedExpertise match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' successfully loads experiences filter', () => {
	const route = 'experiences'
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[`${match.url}/${route}`]}>
			<NestedExpertise match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
