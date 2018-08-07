import React from 'react'
import { Grid, Button, Icon, Form, Header, Segment } from 'semantic-ui-react'


const MatchForm = (props) => {
	let { handleChange, handleSubmit, match } = props
	return (
		<div>
			<form onSubmit={handleSubmit} >
				<Grid divided="vertically">
					<Grid.Row columns={3}>
						<Grid.Column>
							<Header as="h2" color="teal" textAlign="center">Match Info</Header>
								<Segment stacked>
									<Form.Input onChange={handleChange} type="text" name="date" placeholder="Match Date" value={match.date} autocomplete="off" fluid icon="calendar alternate" iconPosition="left" />
									<Form.Input onChange={handleChange} type="text" name="time" placeholder="Time of Match" value={match.time} autocomplete="off" fluid icon="time" iconPosition="left" />
									<Form.Input onChange={handleChange} type="text" name="venue" placeholder="Match Location" value={match.venue} autocomplete="off" fluid icon="location arrow" iconPosition="left" />
									<Form.Input onChange={handleChange} type="text" name="league" placeholder="League" value={match.league} autocomplete="off" fluid icon="shield" iconPosition="left" />
								</Segment>
						</Grid.Column>
						<Grid.Column>
							<Header as="h2" color="teal" textAlign="center">Team 1</Header>
								<Segment>
									<Form.Input onChange={handleChange} type="text" name="team1[name]" placeholder="Team1 Name" value={match.team1.name} autocomplete="off" fluid icon="group" iconPosition="left" />
									<Form.Input onChange={handleChange} type="text" name="team1[wins]" placeholder="Team 1 Wins" value={match.team1.wins} autocomplete="off" fluid icon="plus" iconPosition="left" />
									<Form.Input onChange={handleChange} type="text" name="team1[draws]" placeholder="Team 1 Draws" value={match.team1.draws} autocomplete="off" fluid icon="black tie" iconPosition="left" />
									<Form.Input onChange={handleChange} type="text" name="team1[losses]" placeholder="Team 1 Losses" value={match.team1.losses} autocomplete="off" fluid icon="minus" iconPosition="left" />
								</Segment>
						</Grid.Column>
						<Grid.Column>
							<Header as="h2" color="teal" textAlign="center">Team 2</Header>
								<Segment>
									<Form.Input onChange={handleChange} type="text" name="team2[name]" placeholder="Team 2 Name" value={match.team2.name} autocomplete="off" fluid icon="group" iconPosition="left" />
									<Form.Input onChange={handleChange} type="text" name="team2[wins]" placeholder="Team 2 Wins" value={match.team2.wins} autocomplete="off" fluid icon="plus" iconPosition="left" />
									<Form.Input onChange={handleChange} type="text" name="team2[draws]" placeholder="Team 2 Draws" value={match.team2.draws} autocomplete="off" fluid icon="black tie" iconPosition="left" />
									<Form.Input onChange={handleChange} type="text" name="team2[losses]" placeholder="Team 2 Losses" value={match.team2.losses} autocomplete="off" fluid icon="minus" iconPosition="left" />
								</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Button animated='fade'>
					<Button.Content hidden>
						<Icon name="check" />
					</Button.Content>
					<Button.Content visible>Add Match</Button.Content>
				</Button>
			</form>
		</div>
	)
}

export default MatchForm