// src/app/page.jsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here (API call/auth)
    alert(`Logging in as applicant with email: ${email}`);
    router.push('/applicant/dashboard'); // Redirect to dashboard after login
  };

  const adminMode = (e) => {
    e.preventDefault();
    // Implement login logic here (API call/auth)
    alert(`Entering Admin Mode...`);
    router.push('admin/dashboard'); // Redirect to dashboard after login
  };


  return (
    <main style={{ padding: '2rem' }}>
      <h1>Applicant Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>Password</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Login</button>
      </form>
      <h2 onClick = {adminMode}> Admin Mode (temp button)</h2>
    </main>
  );
}
