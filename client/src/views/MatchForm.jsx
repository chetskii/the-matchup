import React from 'react'


const MatchForm = (props) => {
	let { handleChange, handleSubmit, match } = props
	return (
		<div>
			<form onSubmit={handleSubmit} >
				<input onChange={handleChange} type="text" name="date" placeholder="Match Date" value={match.date} />
				<input onChange={handleChange} type="text" name="time" placeholder="Time of Match" value={match.time} />
				<input onChange={handleChange} type="text" name="venue" placeholder="Match Location" value={match.venue} />
				<input onChange={handleChange} type="text" name="league" placeholder="League" value={match.league} />
				<input onChange={handleChange} type="text" name="team1[name]" placeholder="Team1 Name"  value={match.team1.name} />
				<input onChange={handleChange} type="text" name="team1[wins]" placeholder="Team 1 Wins" value={match.team1.wins} />
				<input onChange={handleChange} type="text" name="team1[draws]" placeholder="Team 1 Draws" value={match.team1.draws} />
				<input onChange={handleChange} type="text" name="team1[losses]" placeholder="Team 1 Losses" value={match.team1.losses} />
				<input onChange={handleChange} type="text" name="team2[name]" placeholder="Team 2 Name" value={match.team2.name} />
				<input onChange={handleChange} type="text" name="team2[wins]" placeholder="Team 2 Wins" value={match.team2.wins} />
				<input onChange={handleChange} type="text" name="team2[draws]" placeholder="Team 2 Draws" value={match.team2.draws} />
				<input onChange={handleChange} type="text" name="team2[losses]" placeholder="Team 2 Losses" value={match.team2.losses} />
				<button>Add Match</button>
			</form>
		</div>
	)
}

export default MatchForm