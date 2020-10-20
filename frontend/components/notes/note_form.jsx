import React from 'react';

class NoteForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			title: "",
			body: "",
			form: false,
			done: false
		};
		this.toggleClicked = this.toggleClicked.bind(this);
		this.handleOuterClick = this.handleOuterClick.bind(this);
		this.handleDotClick = this.handleDotClick.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.hideForm = this.hideForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.submit = this.handleSubmit.bind(this);
	}

	toggleClicked() {
		this.setState({ clicked: !this.state.clicked });
	}

	isClassDefaultForm(element) {
		return element.className === 'noteDefaultForm';
	}

	isClassExpandedForm(element) {
		return element.className === 'noteExpandedForm';
	}

	handleKeyDown(e) {
		if (e.key === 'Escape') {
			document.removeEventListener('mousedown', this.handleOuterClick);
			document.removeEventListener('keydown', this.handleKeyDown);
			this.toggleClicked();
		}
		//   else if (e.key === 'Enter') {
		//   this.handleSubmit(e);
		// }
	}

	handleOuterClick(e) {
		if (this.state.clicked && e.path.some(this.isClassExpandedForm)) {
			e.stopPropagation();
		} else {
			document.removeEventListener('mousedown', this.handleOuterClick);
			document.removeEventListener('keydown', this.handleKeyDown);
			this.toggleClicked();
			this.submit();
		}
	}

	handleDotClick(e) {
		e.stopPropagation();
		this.setState({ color: e.currentTarget.style.backgroundColor });
	}

	update(property) {
		return e => this.setState({ [property]: e.target.value });
	}

	toggleForm(e) {
		e.preventDefault();
		this.setState({ form: !this.state.form })
	}

	hideForm(e) {
		e.preventDefault();
		this.setState({ form: false })
	}

	submit() {
		if ((Boolean(this.state.title) || Boolean(this.state.body))) {
			this.props.createNote({
				id: this.props.currentUser,
				title: this.state.title,
				body: this.state.body
			});
			this.setState({ title: "", body: "" });
		} else {
			this.setState({ title: "", body: "" });
		}
		return false;
	}


	handleSubmit(e) {
		e.preventDefault();
		e.stopPropagation();
		this.toggleClicked();

		document.removeEventListener('mousedown', this.handleOuterClick);
		document.removeEventListener('keydown', this.handleKeyDown);
		
		const uniqueId = new Date().getTime();
		const note = Object.assign({}, this.state, { id: uniqueId });
		this.props.receiveNote(note);
		this.setState({
			title: "",
			body: ""
		}); // reset form
		
		this.submit();
	}

	render() {
		const expandedForm = (
			<form className="noteExpandedForm"
				id='newForm'
				onSubmit={(e) => this.handleSubmit(e)}>
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
					<div className='noteFormIcons'>
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
							{/* <select id="colorIcon">
								<option value="0">blue</option>
								<option value="1">pink</option>
								<option value="2">green</option>
								<option value="3">red</option>
							</select> */}
						</div>
						<div className="image-upload noteIcon">
							<label for="imgIcon">
								<i class="far fa-image"></i>
							</label>
							<input id="imgIcon" type="file" />
						</div>
						<div className="archive-btn noteIcon">
							<label for="archiveIcon">
								<i class="fas fa-archive fa-md"></i>
							</label>
							<button id="archiveIcon" />
						</div>
					</div>
					<div className='bottomClose'>
						<button>CLOSE</button>
					</div>
				</div>
			</form>
		);

		const defaultForm = (
			<div className="noteDefaultForm" onClick={(e) => {
				e.stopPropagation();
				this.toggleClicked();
				document.addEventListener('mousedown', this.handleOuterClick);
				document.addEventListener('keydown', this.handleKeyDown);
			}}>
				<p>Take a note... </p>
				<div className='noteFormIcons'>
					<i class="far fa-check-square fa-lg"></i>
					<i class="far fa-image fa-lg"></i>
				</div>
			</div>
		);


		if (this.state.clicked) {
			return (
				<div>{expandedForm}</div>
			)
		} else {
			return (
				<div>{defaultForm}</div>
			)
		}

	}
};

export default NoteForm;
