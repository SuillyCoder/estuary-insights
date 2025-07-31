// src/app/applicant/dashboard/page.jsx

export default function ApplicantDashboard() {
  // Placeholder job postings data
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Corp' },
    { id: 2, title: 'Product Manager', company: 'Innovate Ltd.' },
  ];

  return (
    <section>
      <h2>Job Postings</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
