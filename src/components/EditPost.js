import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';

class EditPost extends Component {
  state = {
    post: {},
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
    )
      .then(response => response.json())
      .then(json => this.setState({ post: json }));
  }

  changeTitle = event => this.setState({ title: event.target.value });

  changeBody = event => this.setState({ body: event.target.value });

  sendForm = event => {
    event.persist();
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          title: this.state.title,
          body: this.state.body
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
    )
      .then(response => response.json())
      .then(json => console.log(json));
  };

  render() {
    return (
      <>
        <h1 className="text-center">Edit Post</h1>
        <AvForm onValidSubmit={this.sendForm} className="mx-auto w-50">
          <AvField
            name="title"
            label="Title"
            type="text"
            value={this.state.title}
            onChange={this.changeTitle}
            errorMessage="Invalid text"
            validate={{
              required: { value: true },
              pattern: { value: '^[A-Za-z0-9]+$' },
              minLength: { value: 1 },
              maxLength: { value: 20 }
            }}
          />
          <AvField
            name="body"
            label="Body"
            type="text"
            required
            value={this.state.body}
            onChange={this.changeBody}
            validate={{
              required: { value: true, errorMessage: 'Please enter a body' },
              pattern: {
                value: '^[A-Za-z0-9]+$',
                errorMessage:
                  'Your name must be composed only with letter and numbers'
              },
              minLength: {
                value: 10,
                errorMessage: 'Your name must be between 10 and 100 characters'
              },
              maxLength: {
                value: 100,
                errorMessage: 'Your name must be between 10 and 100 characters'
              }
            }}
          />
          <Button color="primary">Submit</Button>
        </AvForm>
      </>
    );
  }
}

export default EditPost;
