import { fetchJsonPlaceholder } from '../lib/api';

export default async function TodosBlock() {
  const todos = await fetchJsonPlaceholder('/todos?userId=1', 3000);

  return (
    <article className="card">
      <p className="eyebrow">3 seconds</p>
      <h2>Todos</h2>
      <ul className="item-list compact-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
            <span className={todo.completed ? 'status done' : 'status pending'}>
              {todo.completed ? 'Done' : 'Pending'}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
