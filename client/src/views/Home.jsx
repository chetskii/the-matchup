import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const apiClient = axios.create()

class Home extends React.Component {

	state = {
		matches: []
	}

	componentDidMount() {
		apiClient({ method: 'get', url: '/api/matches' })
			.then((apiResponse) => {
				this.setState({ matches: apiResponse.data.payload })
			})
	}

	handleMatchClick(id) {
		apiClient({ method: 'get', url: `/api/matches/${id}`})
			.then((apiResponse) => {
				alert(apiResponse.data.payload.body)
			})
	}

	render() {
		return (
			<div className="Home">
				<h1>The MatchUp</h1>
				<h1>Upcoming Matches</h1>
				<ul>
					{this.state.matches.map((m) => {
						return (
							<li key={m._id}>
								<Link to={`/matches/${m._id}`}>{m.team1.name} vs. {m.team2.name} - {m.date}</Link>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default Home