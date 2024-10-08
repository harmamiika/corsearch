'use client';

import { User } from './interfaces/User';
import styles from './user-list.module.scss';
import { useState } from 'react';

export function UserList({ users }: { users: User[] }) {
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

  const handeToggleSortClick = () => {
    setSort(sort === 'alphabetical' ? 'reversed-alphabetical' : 'alphabetical');
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <div className={styles.listControls}>
        <input type="text" placeholder="Search users" className={styles.searchInput} onChange={handleSearchChange} />
        <button className={styles.sortButton} onClick={handeToggleSortClick}>
          Toggle sorting
        </button>
      </div>
      <div className={styles.userList}>
        {userData.map((user) => (
          <div key={user.id} className={styles.userCard}>
            <div className={styles.userCardContent}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.website}</p>
              <p>
                {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
