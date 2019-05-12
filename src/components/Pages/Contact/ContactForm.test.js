import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import ContactForm from './ContactForm'

const match = {
	url: '/contact',
}

it('successfully loads index for ContactForm', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<MemoryRouter initialEntries={[match.url]}>
			<ContactForm />
		</MemoryRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
