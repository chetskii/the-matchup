import React from 'react'
import httpClient from '../httpClient'
import { Button, Icon } from 'semantic-ui-react'

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
				if (user) {
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
							<Button animated='fade'>
								<Button.Content hidden>
									<Icon name="save" />
								</Button.Content>
								<Button.Content visible>Save Changes</Button.Content>
							</Button>
							<Button animated="fade">
								<Button.Content hidden>
									<Icon name="trash" />
								</Button.Content>
								<Button.Content visible onClick={this.onButtonClick.bind(this)}>Delete Account</Button.Content>
							</Button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default EditUser