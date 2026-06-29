import { Suspense } from 'react';
import BlockSkeleton from '../../components/BlockSkeleton';
import CommentsBlock from '../../components/CommentsBlock';
import ErrorBoundary from '../../components/ErrorBoundary';
import PostsBlock from '../../components/PostsBlock';
import TodosBlock from '../../components/TodosBlock';
import UsersBlock from '../../components/UsersBlock';

function DashboardSection({ title, children }) {
  return (
    <ErrorBoundary title={title}>
      <Suspense fallback={<BlockSkeleton title={title} />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

export default function DashboardPage() {
  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <p className="eyebrow">Streaming dashboard</p>
        <h1>Dashboard</h1>
        <p>Independent loading and error handling</p>
      </header>

      <section className="dashboard-grid" aria-label="Dashboard data blocks">
        <DashboardSection title="Users">
          <UsersBlock />
        </DashboardSection>
        <DashboardSection title="Comments">
          <CommentsBlock />
        </DashboardSection>
        <DashboardSection title="Posts">
          <PostsBlock />
        </DashboardSection>
        <DashboardSection title="Todos">
          <TodosBlock />
        </DashboardSection>
      </section>
    </main>
  );
}
