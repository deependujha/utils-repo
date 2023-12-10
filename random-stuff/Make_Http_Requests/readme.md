# Recommended way to make http requests in react & react-native 🚀

- Install axios

```bash
npm i axios
```

- Create a folder `axios` in `src` folder, and create files in it, **for making API requests**. These **files should export functions that use Axios to make HTTP requests**. For example:

```js
import axios from 'axios';

export function getUsers() {
  return axios.get('/api/users');
}

export function deleteUser(id) {
  return axios.delete(`/api/users/${id}`);
}
```

- In your React component, import the API module and call the functions to make HTTP requests. For example:

```js
import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from './api';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  function handleDelete(id) {
    deleteUser(id)
      .then(() => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
      })
      .catch(error => console.log(error));
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
```

- In this example, the getUsers and deleteUser functions from the API module are imported and used in the useEffect and handleDelete functions, respectively.

- #### `By creating a separate module for making API requests, you can keep your code organized and easy to maintain.`

- #### `Additionally, this approach allows you to reuse the same API functions across multiple components.`