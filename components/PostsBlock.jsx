import { fetchJsonPlaceholder } from '../lib/api';

export default async function PostsBlock() {
  const posts = await fetchJsonPlaceholder('/posts', 2000);
  const firstPosts = posts.slice(0, 10);

  return (
    <article className="card">
      <p className="eyebrow">2 seconds</p>
      <h2>Posts</h2>
      <ul className="item-list">
        {firstPosts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <span>{post.body}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
