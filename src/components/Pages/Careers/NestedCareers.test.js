import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import NestedCareers from './NestedCareers'

const match = {
	url: '/careers',
}

it(' successfully loads default route', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[match.url]}>
			<NestedCareers match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' successfully loads culture page', () => {
	const route = 'culture'
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[`${match.url}/${route}`]}>
			<NestedCareers match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' successfully loads benefits page', () => {
	const route = 'benefits'
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[`${match.url}/${route}`]}>
			<NestedCareers match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' successfully loads spotlight page', () => {
	const route = 'spotlight'
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[`${match.url}/${route}`]}>
			<NestedCareers match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
