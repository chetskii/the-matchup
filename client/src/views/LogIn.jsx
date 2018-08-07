import React from 'react'
import httpClient from '../httpClient';
import { Form, Button, Container, Image, Grid, Header, Segment, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class LogIn extends React.Component {

	state = {
		fields: { email: '', password: '' }
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
		httpClient.logIn(this.state.fields).then((user) => {
			this.setState({ fields: { email: '', password: '' } })
			if (user) {
				this.props.onLogInSuccess()
				this.props.history.push('/')
			}
		})
	}

	render() {
		const { email, password } = this.state.fields
		return (
			<div className="login-form">
				<Grid textAlign="center" style={{ height: "100%" }} verticleAlign="middle">
					<Grid.Column style={{ maxWidth: 450 }}>
						<Image centered size='medium' src='https://i.imgur.com/dVDZFMn.png' />
						<Header as="h2" color="teal" textAlign="center">Log In</Header>
						<Container>
							< Form size="large" onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)} >
								<Segment stacked>
									<Form.Input fluid icon="mail" iconPosition="left" placeholder="E-mail address" name="email" autoComplete="off" value={email} />
									<Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password" name="password" autoComplete="off" value={password} />
									<Button fluid size="large" color="green" type='submit'>Login</Button>
								</Segment>
							</Form >
							<Message>
								New to us? <Link to='/signup'>Sign Up</Link>
							</Message>
						</Container>
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

export default LogIn