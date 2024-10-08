import { UserList } from './user-list';
import styles from './page.module.scss';
import { getUsers } from './services/get-users';

export default async function Home() {
  const users = await getUsers();
  return (
    <div className={styles.rootContainer}>
      <h1 className={styles.header}>User list display app</h1>
      <UserList users={users} />
    </div>
  );
}
