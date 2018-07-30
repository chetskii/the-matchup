import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header, Image, List } from 'semantic-ui-react'
import _ from 'lodash'

const apiClient = axios.create()

class Home extends React.Component {

	state = {
		matches: [],
		filter: []
	}

	componentDidMount() {
		apiClient({ method: 'get', url: '/api/matches' })
			.then((apiResponse) => {
				this.setState({ matches: apiResponse.data.payload })
			})
	}

	handleMatchClick(id) {
		apiClient({ method: 'get', url: `/api/matches/${id}` })
			.then((apiResponse) => {
				alert(apiResponse.data.payload.body)
			})
	}

	handleFilterButtonClick(leagueName) {
		let { filter, matches } = this.state

		this.setState({ filter: leagueName })
		console.log(filter)
		const result = matches.filter(match => match.league === filter)
		return result
		// when someone clicks a filter button:
		// record the leagueName in your state as "filter"
		// only render those matches who's leagueName is equal to the leagueName stored in this.state.filter
	}

	render() {
		const { matches } = this.state
		const leagueNames = _.uniq(matches.map(m => m.league))
		return (
			<div className="Home">
				<div>
					<Image centered size='medium' src='https://i.imgur.com/dVDZFMn.png' />
					<Header as='h1' icon textAlign='center'>
						{/* <Icon name='users' circular /> */}
						<Header.Content>Upcoming Matches</Header.Content>
					</Header>

				</div>

				{leagueNames.map((ln, index) => {
					return <button key={index} onClick={this.handleFilterButtonClick.bind(this, ln)}>{ln}</button>
				})}

				<List>
					{this.state.matches.map((m) => {
						return (
							<li key={m._id}>
								<Link to={`/matches/${m._id}`}><List.Item>{m.team1.name} vs. {m.team2.name} - {m.date}</List.Item></Link>
							</li>
						)
					})}
				</List>

			</div>
		)
	}
}

export default Home