import React from 'react'

class ContactForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = { name: '' }

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({ name: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault()
		console.log(this.state)
	}

	isEnterKey(e) {
		if (e.which === 13) {
			e.preventDefault()
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="name">
					Name:
					<input
						name="name"
						type="text"
						value={this.state.name}
						onChange={e => this.setState({ name: e.target.value })}
						onKeyPress={this.isEnterKey}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default ContactForm
