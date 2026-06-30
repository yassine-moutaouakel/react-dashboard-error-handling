export default function BlockSkeleton({ title }) {
  return (
    <article className="card loading-card" aria-busy="true">
      <div>
        <p className="eyebrow">Loading</p>
        <h2>{title}</h2>
      </div>
      <div className="skeleton-lines">
        <span />
        <span />
        <span />
      </div>
    </article>
  );
}
