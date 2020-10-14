import { uniqueId } from '../../util/id_generator'
import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
      todo_id: this.props.todo_id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const step = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveStep(step);
    this.setState({
      title: "",
      body: ""
    }); // reset form
  }

  render() {
    return (
      <form className="step-form" onSubmit={ this.handleSubmit }>
        <label>
          <input
            className="input"
            ref="title"
            value={ this.state.title }
            onChange={ this.update('title') }
            required />
        </label>
        <label>
          <input
            className="input"
            ref="body"
            value={ this.state.body }
            onChange={ this.update('body') }
            required />
        </label>
        <button className="create-button">Close</button>
      </form>
    );
  }
}

export default StepForm;
