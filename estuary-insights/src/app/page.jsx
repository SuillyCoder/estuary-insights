// src/app/page.jsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <nav style={{ background: '#eee', padding: '1rem' }}>
        <Link href="/applicant/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
        <Link href="/applicant/application">My Applications</Link>
      </nav>
      <main style={{ padding: '1rem' }}>
        <h1>Welcome to the Application Portal</h1>
        <p>This is the main landing page. Use the navigation to access Dashboard or Your Applications.</p>
      </main>
    </>
  );
}
