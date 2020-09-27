import { connect } from 'react-redux';
import React from 'react';
import loginForm from './login_form';

const mapStateToProps = ({ errors }) => {
	return {
		formType: 'login',
	};
};

const mapDispatchToProps = dispatch => {
	return {
		processForm: (user) => dispatch(login(user)),
		otherForm: (
			<button onClick={() => dispatch(openModal('signup'))}>
				Signup
      </button>
		)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
