import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		}
	}

	render() {
		return (
			<div className="signup-container">
				<div className="signup-header">
					keepster logo
					<p className="">Create your Keepster Account</p>
				</div>
				<form className="signup-form">
					<div className="signup-row">
						<div className="signup-input">
							<input type="text" className="signup" placeholder="First name" />
							<label>First name</label>
						</div>
						<div className="signup-input">
							<input type="text" className="signup" placeholder="Last name" />
							<label>Last name</label>
						</div>
					</div>
					<div className="signup-input signup-row">
						<input
							id="email"
							type="email"
							className="signup"
							placeholder="Email"
							name="email"
						/>
						<label>Email</label>
					</div>
					<p className="signup-text">You can use letters, numbers & periods</p>
					<div className="signup-row">
						<div className="signup-input">
							<input
								type="text"
								className="signup password"
								placeholder="Password"
							/>
							<label>Password</label>
						</div>
						<div className="signup-input">
							<input
								type="text"
								className="signup password"
								placeholder="Confirm"
							/>
							<label>Confirm</label>
						</div>
					</div>
					<p className="signup-text">Use 8 or more characters with a mix of letters, numbers & symbols</p>
					<div className="signup-footer signup-row">
						<p className="session-link"><Link to="login">Sign in instead</Link></p>
						<input type="submit" value="Next" className="signup-submit" />
					</div>
				</form>
			</div>
		)
	}
}

export default withRouter(SignupForm);
