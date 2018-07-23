import React from 'react'
import httpClient from '../httpClient'

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
			this.setState({ fields: { name: '', email: '', password: '' }})
			if(user) {
				this.props.onSignUpSuccess()
				this.props.history.push('/')
			}
		})
	}

	render() {
		return (
			<div className="SignUp">
				<h1>Sign Up</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" placeholder="Name" name="name" autoComplete="off" />
					<input type="text" placeholder="Email" name="email" autoComplete="off" />
					<input type="password" placeholder="Password" name="password" autoComplete="off" />
					<button>Sign Up</button>
				</form>
			</div>
		)
	}
}

export default SignUp