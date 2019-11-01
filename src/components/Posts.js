import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`
    )
      .then(response => response.json())
      .then(json => this.setState({ posts: json }));
  }

  goToEditPost = event => {
    event.preventDefault();
    this.props.history.push(`/editPost/${event.target.id}`);
  };

  render() {
    return (
      <Table bordered className="mx-auto w-75">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
            <th>Edit</th>
          </tr>
        </thead>
        {this.state.posts.map((el, i) => (
          <tbody key={el.id}>
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{el.title}</td>
              <td>{el.body}</td>
              <td>
                <Button id={el.id} color="primary" onClick={this.goToEditPost}>
                  Edit
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    );
  }
}

export default Posts;
