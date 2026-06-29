import { fetchJsonPlaceholder } from '../lib/api';

export default async function CommentsBlock() {
  const comments = await fetchJsonPlaceholder('/comments?postId=1', 1500, true);

  return (
    <article className="card">
      <p className="eyebrow">1.5 seconds</p>
      <h2>Comments</h2>
      <ul className="item-list">
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>
            <span>{comment.body}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
