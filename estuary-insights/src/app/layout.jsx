// src/app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Estuary Insights',
  description: 'Job Application Portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Shared header/nav could go here */}
        {children}
        {/* Shared footer could go here */}
      </body>
    </html>
  );
}
