import React from 'react'
import httpClient from '../httpClient'
import { Form, Button, Container } from 'semantic-ui-react'


class SignUp extends React.Component {

	state = {
		fields: { name: '', email: '', password: '' }
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		console.log("SIGNING UP")
		httpClient.signUp(this.state.fields).then((user) => {
			this.setState({ fields: { name: '', email: '', password: '' } })
			if (user) {
				this.props.onSignUpSuccess()
				this.props.history.push('/')
			}
		})
	}

	render() {
		return (
			<div className="SignUp">
				<div className="row">
					<div className="column column-33 column-offset-33">
						<h1>Sign Up</h1>
						<Container>
							< Form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
								<Form.Field >
									<label>Name</label>
									<input type="text" placeholder="Name" name="name" autoComplete="off" />
								</Form.Field>
								<Form.Field>
									<label>E-Mail</label>
									<input type="text" placeholder="Email" name="email" autoComplete="off" />
								</Form.Field>
								<Form.Field>
									<label>Password</label>
									<input type="password" placeholder="Password" name="password" autoComplete="off" />
								</Form.Field>
								<Button type='submit'>Sign Up</Button>
							</Form >
						</Container >
					</div>
				</div>
			</div>
		)
	}
}

export default SignUp