import React, { Component } from 'react'
import axios from 'axios'
import MatchForm from './MatchForm'

const apiClient = axios.create()

class Create extends Component {

	state = {
		match: {
			date: '', time: '', venue: '', league: '',
			team1: { name: '', wins: '', losses: '', draws: '' },
			team2: { name: '', wins: '', losses: '', draws: '' }
		},

	}

	handleChange = (event) => {
		event.preventDefault()
		if (event.target.name.includes('[')) {
			const fieldNames = event.target.name.replace(']', '').split('[')
			const [team, field] = fieldNames
			this.setState({
				match: {
					...this.state.match,
					[team]: { ...this.state.match[team], [field]: event.target.value }
				}
			})
		} else {
			this.setState({ match: { ...this.state.match, [event.target.name]: event.target.value } })
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		let { date, time, venue, league } = this.state.match
		let { team1 } = this.state.match
		let { team2 } = this.state.match
		apiClient({
			method: 'post',
			url: '/api/matches',
			data: { team1, team2, date, time, venue, league }
		})
			.then(response => {
				let id = response.data.payload._id
				this.props.history.push(`/matches/${id}`)
			})
	}

	render() {
		return (
			<div>
				<h1>Add a Match</h1>
				<MatchForm
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					match={this.state.match}
				/>
			</div>
		)
	}

}

export default Create