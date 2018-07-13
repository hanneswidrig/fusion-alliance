import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import NestedProducts from './NestedProducts'

const match = {
	url: '/products',
}

it(' successfully loads default route', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[match.url]}>
			<NestedProducts match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' successfully loads acuity page', () => {
	const route = 'acuity'
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[`${match.url}/${route}`]}>
			<NestedProducts match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' successfully loads comtrac page', () => {
	const route = 'comtrac'
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[`${match.url}/${route}`]}>
			<NestedProducts match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

it(' successfully loads map page', () => {
	const route = 'map'
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[`${match.url}/${route}`]}>
			<NestedProducts match={match} />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
