import React from 'react'
import httpClient from '../httpClient'
import { Form, Button, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


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
			<div className="login-form">
				<Grid textAlign="center" style={{ height: "100%" }} verticleAlign="middle" >
					<Grid.Column style={{ maxWidth: 450 }} >
						<Image centered size='medium' src='https://i.imgur.com/dVDZFMn.png' />
						<Header as="h2" color="teal" textAlign="center">Sign Up</Header>
						< Form size="large" onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<Segment stacked>
								<Form.Input
									fluid icon="user"
									iconPosition="left"
									placeholder="Full name"
									type="text"
									name="name"
									autoComplete="off"
								/>
								<Form.Input
									fluid icon="mail"
									iconPosition="left"
									placeholder="E-mail address"
									type="text"
									name="email"
									autoComplete="off"
								/>
								<Form.Input
									fluid icon="lock"
									iconPosition="left"
									placeholder="Password"
									type="password"
									name="password"
									autoComplete="off"
								/>
								<Button color="green" fluid size="large" type='submit'>
									Sign Up
									</Button>
							</Segment>
						</Form >
						<Message>
							Already have an account? <Link to='/login'>Login</Link>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

export default SignUp