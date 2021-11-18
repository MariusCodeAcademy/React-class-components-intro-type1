import UserFinder from './components/UserFinder';
import UsersContext from './store/UsersContext';

const DUMMY_USERS = [
  { id: 'u1', name: 'James' },
  { id: 'u2', name: 'Mike' },
  { id: 'u3', name: 'Jane' },
];

function App() {
  const usersContext = DUMMY_USERS;
  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
