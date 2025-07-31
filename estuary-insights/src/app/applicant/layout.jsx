// src/app/applicant/layout.jsx
import Link from 'next/link';

export default function ApplicantLayout({ children }) {
  return (
    <>
      <nav style={{ background: '#eee', padding: '1rem' }}>
        <Link href="/applicant/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
        <Link href="/applicant/application">My Applications</Link>
      </nav>
      <main style={{ padding: '1rem' }}>
        {children}
      </main>
    </>
  );
}
