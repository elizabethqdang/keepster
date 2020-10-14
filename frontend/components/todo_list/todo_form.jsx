import { uniqueId } from '../../util/id_generator'
import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
			body: "",
			form: false,
      done: false
		};
		this.toggleForm = this.toggleForm.bind(this);
		this.hideForm = this.hideForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

	toggleForm(e) {
		e.preventDefault();
		this.setState({form: !this.state.form})
	}

	hideForm(e) {
		e.preventDefault();
		this.setState({form: false})
	}

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    }); // reset form
  }

  render() {
		if (this.state.form) {
			return (
				<form className="todo-form" onSubmit={this.handleSubmit}>
					<label>
						<input
							className="input"
							ref="title"
							value={this.state.title}
							placeholder="Title"
							onChange={this.update('title')}
							required />
					</label>
					<label>
						<textarea
							className="input"
							ref="body"
							cols='20'
							value={this.state.body}
							// rows='5'
							placeholder="Take a note..."
							onChange={this.update('body')}
							required></textarea>
					</label>
					<button className="create-button">Close</button>
				</form>
			)
		} else {
			return (
				<label onClick={this.toggleForm} onFocusOut={this.hideForm}>
					<input
						className="note-form"
						multiline='true'
						ref="body"
						cols='20'
						value={this.state.body}
						rows='1'
						placeholder="Take a note..."
						onChange={this.update('body')}
						required></input>
				</label>
			)
		}

    return (
			{form}
      // <form className="todo-form" onSubmit={this.handleSubmit}>
      //   <label>
      //     <input
      //       className="input"
      //       ref="title"
      //       value={this.state.title}
      //       placeholder="Title"
      //       onChange={this.update('title')}
      //       required/>
      //   </label>
      //   <label>
      //     <textarea
      //       className="input"
      //       ref="body"
      //       cols='20'
      //       value={this.state.body}
      //       rows='5'
      //       placeholder="Take a note..."
      //       onChange={this.update('body')}
      //       required></textarea>
      //   </label>
      //   <button className="create-button">Close</button>
      // </form>
    );
  }
};

export default TodoForm;
