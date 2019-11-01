import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ users: json }));
  }

  render() {
    return (
      <div>
        <h1 className="text-center">List of Users</h1>
        <ListGroup className="mx-auto w-25">
          {this.state.users.map(el => (
            <ListGroupItem key={el.id} action>
              <Link id={el.id} to={`/posts/${el.id}`}>
                {el.name}
              </Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default Users;
