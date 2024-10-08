'use client';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export function UsersList({ users }: { users: User[] }) {
  console.log(users, 'users');
  return (
    <div>
      <div className="list-controls">
        <input type="text" placeholder="Search users" className="search-input" />
        <button className="sort-button">Toggle sorting</button>
      </div>
      <ul className="user-list">
        {users.map((user) => (
          <li className="user-list-item">{user.name}</li>
        ))}
      </ul>
      users list
    </div>
  );
}
