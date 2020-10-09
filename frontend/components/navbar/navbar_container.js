import { connect } from "react-redux";
// import { logout } from "../../actions/session_actions";
// import { fetchCurrentUser } from "../../actions/session_actions";
import Navbar from "./navbar";

const mapStateToProps = (state) => ({
	// loggedIn: Boolean(state.session.currentUser),
	// currentUser: state.session.currentUser || {},
	users: state.users,
});

const mapDispatchToProps = dispatch => ({
	// logout: () => dispatch(logout()),
	fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
