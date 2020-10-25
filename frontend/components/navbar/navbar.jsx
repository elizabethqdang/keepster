import React, { Fragment } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: ""
		}
		this.navLeft = this.navLeft.bind(this);
		this.navSearch = this.navSearch.bind(this);
		this.navUserLinks = this.navUserLinks.bind(this);
		this.logoutUser = this.logoutUser.bind(this);
	}

	updateInput(searchInput) {
		return (e) => {
			e.preventDefault();
			this.setState({ [searchInput]: e.target.value });
		};
	}


	logoutUser(e) {
		e.preventDefault();
		this.props.logout().then(
			this.props.history.push("/login")
		);
	}

	navLeft() {
		return (
			<Fragment>
				<button className="nav-menu">
					<svg focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
				</button>
				<button className="nav-logo">
					<img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" />
				</button>
				<button className="nav-logo-text">
					keepster
				</button>
			</Fragment>
		)
	}

	navSearch() {
		return (
			<Fragment>
			<form className="nav-search" style={{fontSize:"24px"}}>
				<button type="submit">
					{/* <i class="fas fa-search fa-lg" style={{ height: "24px", width: "24px", color: "black" }}></i> */}
					<svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
						<path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path><path d="M0,0h24v24H0V0z" fill="none"></path>
					</svg>
					<path d="M0,0h24v24H0V0z" fill="none"></path>
				</button>
				<input
					className="nav-search-input"
					placeholder="Search"
					type="search"
					value={this.state.searchInput}
					onChange={this.updateInput('searchInput')}
				/>
				<button>
					<i class="fas fa-times fa-1x" style={{fontsize:"24px",visibility:"hidden"}}></i>
				</button>
			</form>
			</Fragment>
		)
	}

	navUserLinks(currentUser, logout) {
		return (
			<Fragment>
				<button className="nav-refresh" activeClassName="nav-selected" exact to="/home">
				</button>
				<button className="nav-view" activeClassName="nav-selected">
				</button>
				<button className="nav-user-menu" activeClassName="selected">

					<li className="dropdown">
						<div className="nav-user-button dropbtn">
							<div className="nav-user-username truncate dropbtn">
								{/* {currentUser ? currentUser.email || } */}
								username
							</div>
							<div className="nav-user-image dropbtn">
								{/* <span><img src={currentUser.profileImgUrl || ""} /></span> */}
								<span><img /></span>
							</div>
						</div>

						<div className="dropdown-content">
							<div onClick={logout} className="nav-sign-out"> Sign Out
								</div>
						</div>
					</li>

				</button>
				{/* <div onClick={logout} className="nav-sign-out">
					Sign Out
				</div> */}
				{/* <div className="nav-sign-out nav-menu">
					<Dropdown currentUser={currentUser} logout={logout} >
				</div> */}
			</Fragment>
		)
	}

	render() {
		const { currentUser, logout } = this.props;
		let navLeft = this.navLeft();
		let navSearch = this.navSearch();
		let navRight = this.navUserLinks(currentUser, logout);

		return (
			<Fragment>
				<nav id="navbar">
					<nav id="nav-container">
						<nav id="nav-btns-container">
							<section className="nav-left">
								{navLeft}
							</section>
							<section className="nav-middle">
								{navSearch}
							</section>
							<section className="nav-right">
								{navRight}
							</section>
						</nav>
					</nav>
				</nav>
			</Fragment>
		)
	}
}

export default (Navbar);