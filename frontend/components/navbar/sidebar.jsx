import React, { Fragment } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showExpandedSidebar: true
		}
		
	}

	toggleSidebar() {
		this.setState({
			showSidebar: !this.state.showExpandedSidebar
		})
	}

	render() {
		const openSidebar = (
			<div id="sidebar" className="expanded-sidebar">
				
				<div className="notes-btn sidebar-icon" activeClassName="nav-selected">
					<label htmlFor="notesIcon">
						<i class="fas fa-bolt fa-lg" style={{fontSize:"22px",width:"auto",height:"auto"}}></i>
					</label>
					{/* <button id="notesIcon"/> */}
					<a href="#" id="notesIcon" className="">Notes</a>
				</div>
				<div className="archive-btn sidebar-icon">
					<label htmlFor="archiveIcon">
						<i class="fas fa-archive fa-md"></i>
					</label>
					{/* <button id="archiveIcon" /> */}
					<a href="#" id="archiveIcon" className="" value="Archive">Archive</a>
				</div>
				<div
					className="trash-btn sidebar-icon">
					<label htmlFor="trashIcon">
						<i class="far fa-trash-alt fa-lg"></i>
					</label>
					<button id="trashIcon" value="Trash">Trash</button>
					{/* <a href="#" id="trashIcon" className=""></a> */}
				</div>

			</div>
		)

		const closedSidebar = (
			<div id="sidebar" className="mini-sidebar">
				<a href="#">
				</a>
				<a href="#">
				</a>
				<a href="#">
				</a>

			</div>
		)

		if (this.state.showExpandedSidebar) {
			return (
				<Fragment>{openSidebar}</Fragment>
			)
		} else {
			return (
				<Fragment>{closedSidebar}</Fragment>
			)
		}

	}
}

export default Sidebar;