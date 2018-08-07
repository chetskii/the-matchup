import React from 'react'
import httpClient from '../httpClient'
import { Button, Icon, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

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
			<div className="login-form">
				<Grid textAlign="center" style={{ height: "100% " }} verticleAlign="middle" >
					<Grid.Column style={{ maxWidth: 450 }} >
						<Image centered size='medium' src='https://i.imgur.com/dVDZFMn.png' />
						<Header as="h2" color="teal" textAlign="center">Edit Account Info</Header>
						< Form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)} >
							<Segment stacked>
								<Form.Input type="text" placeholder="New Email" name="email" autoComplete="off" fluid icon="mail" iconPosition="left" />
								<Form.Input type="password" placeholder="New Password" name="password" autoComplete="off" fluid icon="lock" iconPosition="left" />
								<Button color="green" animated='fade'>
									<Button.Content hidden>
										<Icon name="save" />
									</Button.Content>
									<Button.Content visible>Save Changes</Button.Content>
								</Button>
								<Button color="red" animated="fade">
									<Button.Content hidden>
										<Icon name="trash" />
									</Button.Content>
									<Button.Content visible onClick={this.onButtonClick.bind(this)}>Delete Account</Button.Content>
								</Button>
							</Segment>
						</Form >
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

export default EditUser