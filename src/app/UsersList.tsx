'use client';

import { useState } from 'react';

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
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<'alphabetical' | 'reversed-alphabetical'>('alphabetical');
  const filteredUsers = !!search.length ? users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase())) : users;
  const userData = filteredUsers.sort((a, b) => {
    if (sort === 'alphabetical') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const onToggleSortClick = () => {
    setSort(sort === 'alphabetical' ? 'reversed-alphabetical' : 'alphabetical');
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <div className="list-controls">
        <input type="text" placeholder="Search users" className="search-input" onChange={onSearchChange} />
        <button className="sort-button" onClick={onToggleSortClick}>
          Toggle sorting
        </button>
      </div>
      <ul className="user-list">
        {userData.map((user) => (
          <li className="user-list-item">{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
