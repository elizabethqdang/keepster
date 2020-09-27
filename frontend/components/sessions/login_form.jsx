import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		}
	}

	render() {

		return (
			<div className="login-container">
				<div className="login-header">
					keepster logo
					<p className="login">Sign in</p>
					<p className="login-text">Use your Keepster Account</p>
				</div>
				<form className="login-form">
					<div className="session-row session-input">
						<input
							type="email"
							className="login"
							placeholder="Email"
						/>
						<label>Email</label>
					</div>
					<div className="session-row session-input">
						<input
							type="text"
							className="login"
							placeholder="Enter your password"
						/>
						<label>Enter your password</label>
					</div>

					<div className="session-footer">
						<p className="session-link"><Link to="/signup" className="create-account-link">Create account</Link></p>
						<input type="submit" className="login-submit" value="Next" />
					</div>
				</form>
			</div>
		)
	}
}

export default withRouter(LoginForm);
