import React from 'react'
import { Form, TextArea, Button, Icon, Container } from 'semantic-ui-react'
import axios from 'axios'

const apiClient = axios.create()

class CommentForm extends React.Component {
	state = {
		fields: {
			body: ''
		}
	}

	handleChange = (event) => {
		event.preventDefault()
		this.setState({
			fields: {
				...this.state.fields, [event.target.name]: event.target.value
			}
		})
	}

	handleFormSubmit = (event) => {
		event.preventDefault()
		this.props.onSubmit(this.state.fields)
		this.setState({
			fields: {
				body: ''
			}
		})
	}

	render() {
		return (
			<div>
				<h3>Add Prediction/Comment</h3>
				<Container>
					<Form onSubmit={this.handleFormSubmit}>
						<TextArea onChange={this.handleChange} type="textarea" name="body" placeholder="Add Your Prediction or Comments..." style={{ minHeight: 100 }} autofill="off" value={this.state.fields.body} />
						<Button animated='fade'>
							<Button.Content hidden>
								<Icon name='check' />
							</ Button.Content>
							<Button.Content visible>Add Comment</Button.Content>
						</Button>
					</Form>
				</Container>
			</div>
		)
	}
}

export default CommentForm