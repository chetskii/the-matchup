import React from 'react'
import axios from 'axios'
import CommentForm from './CommentForm'
import { Header, Table, Container } from 'semantic-ui-react'
import httpClient from '../httpClient'

const apiClient = axios.create()

class Match extends React.Component {

	state = {
		match: null
	}

	componentDidMount() {
		const id = this.props.match.params.id
		httpClient({ method: 'get', url: `/api/matches/${id}` })
			.then((apiResponse) => {
				this.setState({ match: apiResponse.data.payload })
			})
	}

	handleSubmit = (fields) => {
		const id = this.props.match.params.id
		httpClient({
				method: 'post',
				url: `/api/matches/${id}/posts`,
				data: fields
		})
				.then(response => {
					console.log(response)
					this.setState({ match: response.data.payload })
				})
}

	render() {
		const { match } = this.state
		if (!match) return <h1>Loading...</h1>
		return (
			<div>
				<h1>{match.team1.name} vs. {match.team2.name}</h1>
				<div className='single-match table'>
					<Container>
						<Table celled padded>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell textAlign='center'>Team</Table.HeaderCell>
									<Table.HeaderCell textAlign='center'>Record</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								<Table.Row>
									<Table.Cell>
										<Header as='h3' textAlign='center'>
											{match.team1.name}
										</Header>
									</Table.Cell>
									<Table.Cell singleLine textAlign='center'>{match.team1.wins} - {match.team1.draws} - {match.team1.losses}</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell>
										<Header as='h3' textAlign='center'>
											{match.team2.name}
										</Header>
									</Table.Cell>
									<Table.Cell singleLine textAlign='center'>{match.team2.wins} - {match.team2.draws} - {match.team2.losses}</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table>
						</Container>
						<ul>
							{match.predictions.map((p) => {
								return <li key={p._id}>{p.body}</li>
							})}
						</ul>
				</div>
						<br />
						<CommentForm onSubmit={this.handleSubmit} />
			</div>

					)
				}
			}
			
export default Match