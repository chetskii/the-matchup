import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	return (
		<div className='NavBar'>
			<Link to='/'>Home</Link>
			{props.currentUser
				? (
					<Fragment>
						<Link to='/logout'>Log Out</Link>
					</Fragment>
				)
				: (
					<Fragment>
						<Link to='/signup'>Sign Up</Link>
						<Link to='/login'>Log In</Link>
					</Fragment>
				)
			}
		</div>
	)
}

export default NavBar