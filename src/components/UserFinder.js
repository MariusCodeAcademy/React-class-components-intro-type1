import css from './UserFinder.module.css';
import { useState, useEffect, Component } from 'react';
import Users from './Users';

const DUMMY_USERS = [
  { id: 'u1', name: 'James' },
  { id: 'u2', name: 'Mike' },
  { id: 'u3', name: 'Jane' },
];

class UserFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: '',
    };
  }

  // mehods
  searchChangeHandler = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  render() {
    return (
      <>
        <div className={css.finder}>
          <input
            type='search'
            value={this.state.searchTerm}
            onChange={this.searchChangeHandler}
          />
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}
// CLASS END

function UserFinder1() {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  // componentDidMount = useEffect(() => {}, [])
  useEffect(() => {
    setFilteredUsers(DUMMY_USERS);
  }, []);

  // componentWillUpdate - class based
  useEffect(() => {
    console.log('searchTerm updated', searchTerm);
    const filteredArr = DUMMY_USERS.filter((userObj) =>
      userObj.name.includes(searchTerm)
    );
    setFilteredUsers(filteredArr);
  }, [searchTerm]);

  return (
    <>
      <div className={css.finder}>
        <input
          type='search'
          value={searchTerm}
          onChange={searchChangeHandler}
        />
      </div>
      <Users users={filteredUsers} />
    </>
  );
}

export default UserFinder;
