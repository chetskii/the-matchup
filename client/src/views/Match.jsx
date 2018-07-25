import React from 'react'
import axios from 'axios'

const apiClient = axios.create()

class Match extends React.Component {

	state = {
		match: null
	}

	componentDidMount() {
		const id = this.props.match.params.id
		apiClient({ method: 'get', url: `/api/matches/${id}` })
			.then((apiResponse) => {
				console.log(apiResponse)
				this.setState({ match: apiResponse.data.payload })
			})
	}

	render() {
		const { match } = this.state
		if (!match) return <h1>Loading...</h1>
		return (
			<div>
				<h1>{match.team1.name} vs. {match.team2.name}</h1>
				<div className='single-match table'>
					<table>
						<thead>
							<tr>
								<th>Team</th>
								<th>Record</th>
								<th>Team</th>
								<th>Record</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{match.team1.name}</td>
								<td>{match.team1.wins} - {match.team1.draws} - {match.team1.losses}</td>
								<td>{match.team2.name}</td>
								<td>{match.team2.wins} - {match.team2.draws} - {match.team2.losses}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default Match