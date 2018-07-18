import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { Label, Input } from 'reakit'

const InputWrapper = styled(Label)`
	width: 100%;
	margin: 0 0 16px 0;
	font-weight: 500;
`

const Field = styled(Input)`
	margin: 4px 0;
`

const ContactUs = () => (
	<ContactForm name="form" method="POST" netlify>
		<InputWrapper>
			{`Name `}
			<Field name="name" />
		</InputWrapper>
		<InputWrapper>
			{`Email Address `}
			<Field name="email" />
		</InputWrapper>
		<InputWrapper>
			{`Company `}
			<Field name="company" />
		</InputWrapper>
		<InputWrapper>
			{`I'd like to discuss:`}
			<Field as="select" name="reason">
				<option>Please select one of the following:</option>
				<option>Cloud solutions</option>
				<option>Data solutions</option>
				<option>Digital solutions</option>
				<option>Technology solutions</option>
				<option>Fusion Acuity</option>
				<option>Fusion ComTrac</option>
				<option>Fusion MAP</option>
				<option>Fusion Innovation</option>
				<option>Careers at Fusion</option>
			</Field>
		</InputWrapper>
		<InputWrapper>
			{`Have a burning question? Ask us here.`}
			<Field as="textarea" name="question" />
		</InputWrapper>
		<input type="submit" value="SUBMIT INQUIRY" />
	</ContactForm>
)

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const NestedContact = ({ match }) => {
	return (
		<React.Fragment>
			<Route exact path={match.url} component={ContactUs} />
		</React.Fragment>
	)
}

export default NestedContact
