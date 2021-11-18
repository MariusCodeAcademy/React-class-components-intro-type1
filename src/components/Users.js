import { useState, Component } from 'react';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'James' },
  { id: 'u2', name: 'Mike' },
  { id: 'u3', name: 'Jane' },
];

class Users extends Component {
  constructor(props) {
    super(props);
    // state always has to be one object !!! cannot be more than one
    this.state = {
      showUsers: true,
      someMoreVar: 5,
    };
  }
  // method
  toggleUsersHandler = () => {
    // this merges with this.state and does not ovewrite
    // console.log(this);
    this.setState({ showUsers: false });
  };

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

const Users1 = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    // proper way to update state if it depends on previos state
    setShowUsers((curState) => !curState);
    // works not always
    // setShowUsers(!showUsers);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
