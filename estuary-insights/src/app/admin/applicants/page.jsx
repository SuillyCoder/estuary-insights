// src/app/admin/applicants/page.jsx

export default function ApplicantsPage() {
  // Sample applicant data
  const applicants = [
    { id: 1, name: 'Charlie Doe', status: 'Pending' },
    { id: 2, name: 'Dana Lee', status: 'Reviewed' },
  ];

  return (
    <section>
      <h2>Applicants</h2>
      <ul>
        {applicants.map(applicant => (
          <li key={applicant.id}>
            {applicant.name} - {applicant.status}
          </li>
        ))}
      </ul>
    </section>
  );
}
