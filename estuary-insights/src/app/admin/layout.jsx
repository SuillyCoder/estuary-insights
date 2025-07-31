// src/app/admin/layout.jsx
import Link from 'next/link';

export default function AdminLayout({ children }) {
  return (
    <>
      <nav style={{ background: '#ccc', padding: '1rem' }}>
        <Link href="/admin/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
        <Link href="/admin/employees" style={{ marginRight: '1rem' }}>Employees</Link>
        <Link href="/admin/applicants">Applicants</Link>
      </nav>
      <main style={{ padding: '1rem' }}>
        {children}
      </main>
    </>
  );
}
