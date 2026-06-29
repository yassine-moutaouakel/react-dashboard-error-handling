import { fetchJsonPlaceholder } from '../lib/api';

export default async function UsersBlock() {
  const users = await fetchJsonPlaceholder('/users', 1000);

  return (
    <article className="card">
      <p className="eyebrow">1 second</p>
      <h2>Users</h2>
      <ul className="item-list">
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
