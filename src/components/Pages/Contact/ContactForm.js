import React from 'react'
import styled from 'styled-components'

const Confirmation = styled.h3`
	font-weight: bold;
	margin-bottom: 25px;
`

const Label = styled.label`
	display: flex;
	justify-content: flex-start;
	margin-bottom: 10px;
`

const LabelText = styled.span`
	margin-right: 5px;
	width: 100px;
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

class ContactForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = { name: '', email: '', question: '', confirm: '' }
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
		console.log(this.state)
		this.setState({
			name: '',
			email: '',
			question: '',
			confirm: `We've received your request! :)`,
		})
	}

	isEnterKey(e) {
		if (e.which === 13) {
			e.preventDefault()
		}
	}

	render() {
		const { name, email, question, confirm } = this.state
		return (
			<Wrapper>
				<Confirmation>{confirm}</Confirmation>
				<form onSubmit={this.handleSubmit}>
					<Label htmlFor="name">
						<LabelText>Name</LabelText>
						<input
							name="name"
							type="text"
							value={name}
							onChange={e => this.setState({ name: e.target.value })}
							onKeyPress={this.isEnterKey}
						/>
					</Label>
					<Label htmlFor="email">
						<LabelText>Email</LabelText>
						<input
							name="email"
							type="text"
							value={email}
							onChange={e => this.setState({ email: e.target.value })}
							onKeyPress={this.isEnterKey}
						/>
					</Label>
					<Label>
						<LabelText>Your Question</LabelText>
						<textarea
							name="question"
							id="question"
							cols="27"
							rows="10"
							value={question}
							onChange={e => this.setState({ question: e.target.value })}
						/>
					</Label>
					<input type="submit" value="Submit" />
				</form>
			</Wrapper>
		)
	}
}

export default ContactForm
