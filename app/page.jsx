import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero card">
        <p className="eyebrow">Next.js App Router</p>
        <h1>Dashboard</h1>
        <p>Independent loading and error handling</p>
        <Link className="button" href="/dashboard">
          Open dashboard
        </Link>
      </section>
    </main>
  );
}
