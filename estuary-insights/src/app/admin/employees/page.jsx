// src/app/admin/employees/page.jsx

export default function EmployeesPage() {
  // Sample employee data
  const employees = [
    { id: 1, name: 'Alice Smith', role: 'Developer' },
    { id: 2, name: 'Bob Johnson', role: 'Designer' },
  ];

  return (
    <section>
      <h2>Employees</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} - {emp.role}
          </li>
        ))}
      </ul>
    </section>
  );
}
