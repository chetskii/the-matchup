import React from 'react'
import httpClient from '../httpClient'

class EditUser extends React.Component {

	state = {
		fields: { email: '', password: '' }
	}

	onInputChange(event) {
		this.setState({
			fields: {
				...this.state.fields, [event.target.name]: event.target.value
			}
		})
	}

	onFormSubmit(event) {
		event.preventDefault()
		httpClient.update(this.state.fields)
			.then((user) => {
				this.setState({ fields: { email: '', password: '' } })
				if(user) {
					this.props.onUpdateSuccess()
					this.props.history.push('/')
				}
			})
	}

	onButtonClick() {
		httpClient.delete()
		this.props.onDeleteSuccess()
		this.props.history.push('/')
	}

	render() {
		return (
			<div className="SignUp">
				<div className="row">
					<div className="column column-33 column-offset-33">
						<h2>Edit Account Info</h2>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<input type="text" placeholder="Email" name="email" autoComplete="off" />
							<input type="password" placeholder="Password" name="password" autoComplete="off" />
							<button>Save Changes</button>
							<button onClick={this.onButtonClick.bind(this)}>Delete Account</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default EditUser