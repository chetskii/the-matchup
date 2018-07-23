import React from 'react'
import httpClient from '../httpClient';

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
			<div className="LogIn">
				<h1>Log In</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" placeholder="Email" name="email" autoComplete="off" value={email} />
					<input type="password" placeholder="Password" name="password" autoComplete="off" value={password} />
					<button>Log In</button>
				</form>
			</div>
		)
	}
}

export default LogIn