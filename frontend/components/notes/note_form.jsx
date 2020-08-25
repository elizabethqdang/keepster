import React, { Fragment } from 'react';

class NoteForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: "",
			color: "#fffff",
			image: null,
			pinned: false,
			created_at: "",
			updated_at: "",
			owner: this.props.currentUser,
			defaultForm: true,
			clicked: false,
		};
		this.handleClickOnDefaultForm = this.handleClickOnDefaultForm.bind(this);
		this.toggleClicked = this.toggleClicked.bind(this);
		this.handleOuterClick = this.handleOuterClick.bind(this);
		this.isClassDefaultForm = this.isClassDefaultForm.bind(this);
		this.isClassExpandedForm = this.isClassExpandedForm.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.colorPalette = this.colorPalette.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	handleClickOnDefaultForm(e) {
		e.stopPropagation();
		// const defaultClassName =(element) => {
		// 	element.className === 'noteDefaultForm';
		// }

		// if click on default form => form expands and event listeners added for keydowns in form input and clicks made outside of form
		// if (this.state.defaultForm && e.path.some(defaultClassName)) {
			this.toggleForm();
			document.addEventListener('keydown', this.handleKeyDown);
			document.addEventListener('mousedown', this.handleOuterClick);
	}

	toggleClicked() {
		this.setState({ clicked: !this.state.clicked });
	}

	toggleForm() {
			this.setState({ defaultForm: !this.state.defaultForm });
	}

	isClassDefaultForm(element) {
		return element.className === 'noteDefaultForm';
	}

	isClassExpandedForm(element) {
		return element.className === 'noteExpandedForm';
	}

	// if escape key pressed => stop listening for events outside of the form, disable form input, and 
	handleKeyDown(e) {
		if (e.key === 'Escape') {
			document.removeEventListener('mousedown', this.handleOuterClick);
			document.removeEventListener('keydown', this.handleKeyDown);
			
			this.toggleForm();
			}
		}

	handleOuterClick(e) {
		const expandedClassName = (element) => {
			return element.className === "noteExpandedForm";
		}

		// if click on expanded form => stop event from bubbling up to parent handlers
		if (!this.state.defaultForm && e.path.some(this.isClassExpandedForm)) {
			e.stopPropagation();
		} else {
			document.removeEventListener('mousedown', this.handleOuterClick);
			document.removeEventListener('keydown', this.handleKeyDown);

			this.submitForm();
		}
	}

	update(property) {
		return e => this.setState({ [property]: e.target.value });
	}

	toggleForm() {
		// e.preventDefault();
		this.setState({ defaultForm: !this.state.defaultForm })
	}

	submitForm() {
		if ((this.state.title !== "") || (this.state.body !== "")) {
			this.props.receiveNote({
				// id: this.props.currentUser,
				title: this.state.title,
				body: this.state.body,
				created_at: Date (new Date().getTime()),
				updated_at: "",
				pinned: this.state.pinned,
				color: this.state.color,
				image: null,
				owner: this.props.currentUser
			});
		}
		this.toggleForm();
		this.setState({ title: "", body: "", pinned: "false", created_at: "", updated: "", color: "white", image: "null", owner: "",  });
	}

	handleSubmit(e) {
		e.preventDefault();
		e.stopPropagation();

		document.removeEventListener('mousedown', this.handleOuterClick);
		document.removeEventListener('keydown', this.handleKeyDown);
		
		this.submitForm();
	}

	colorPalette() {
		const colors = ["#ffffff", "#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb", "#fdcfe8", "#e6c9a8", "#e8eaed"];

		colors.map(color, idx => {
			return (
				<div id={idx} className="" style={{ backgroundColor: color, width: "18px", height: "18px", borderRadius: "50%" }}>
				</div>
			)
		});
	}

	render() {
		const expandedForm = (
			<form className="noteExpandedForm"
				id='newForm'
				onSubmit={(e) => this.handleSubmit(e)}
				style={{backgroundColor:this.state.color}}>
				<div>{this.state.image ? this.state.image : ""}</div>
				<div className='titleDiv'>
					<textarea
						type="text"
						id="titleForm"
						aria-multiline="true"
						value={this.state.title || ''}
						placeholder="Title"
						onChange={this.update('title')}
						col="50"
						rows="1"
						style={{width:"600px"}}
						autoFocus />
					<div className='pinIcon'>
						<div className="undone"></div>
					</div>
				</div>
				<div className='bodyDiv'>
					<div 
						id="bodyForm"
						form='newForm'
						contentEditable="true"
						aria-multiline="true"
						role="textbox"
						tabIndex="0"
						spellCheck="true"
						dir="ltr"
						autoFocus
						aria-label="Take a note..."
						value={this.state.body || ''}
						placeholder="Take a note..."
						onChange={this.update('body')}
						translate="no"
						accessKey="character"
						>
						<textarea 
							type="text"
							autoFocus
							value={this.state.body || ''}
							placeholder="Take a note..."
							onChange={this.update('body')}
							size="50"
							rows="5"
							maxLength="19999"
							style={{width:"600px",height:"100%"}} 
							accessKey="character"
							resize="none" />
					</div>
				</div>

				<div className='formFooter'>
					<div className='toolbarBtns'>
						<div className="color-palette noteIcon">
							<label for="colorIcon">
								<i class="fas fa-palette"></i>
							</label>
						</div>
						<div className="img-upload noteIcon">
							<label for="uploadImgIcon">
								<i class="fa fa-picture-o"></i>
							</label>
							{/* <input id="uploadImgIcon" type="image" /> */}
						</div>
						<div className="archive-btn noteIcon">
							<label for="archiveIcon">
								<i class="fas fa-archive fa-md"></i>
							</label>
							<button id="archiveIcon" />
						</div>
					</div>
					<div className='bottomClose'>
						<button type="submit">CLOSE</button>
					</div>
				</div>
			</form>
		);

		const defaultForm = (
			<div className="noteDefaultForm" onClick={(e) => {
				{
					e.stopPropagation();
					this.toggleForm();
					document.addEventListener('mousedown', this.handleOuterClick);
					document.addEventListener('keydown', this.handleKeyDown)
				}}}>
				<p>Take a note... </p>
				<div className='noteFormIcons'>
					<i class="far fa-check-square fa-lg"></i>
					<i class="far fa-image fa-lg"></i>
				</div>
			</div>
		);


		if (this.state.defaultForm) {
			return (
				<Fragment>
					{defaultForm}
				</Fragment>
			)
		} else {
			return (
				<Fragment>
					{expandedForm}
				</Fragment>
				
			)
		}

	}
};

export default NoteForm;
