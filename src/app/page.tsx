import { UsersList } from './UsersList';

const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
};

export default async function Home() {
  const users = await getUsers();
  return (
    <div>
      <h1>User list display app</h1>
      <UsersList users={users} />
    </div>
  );
}
