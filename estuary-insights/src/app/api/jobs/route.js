// src/app/api/jobs/route.js

export async function GET() {
  // Dummy job listings (replace with DB or service calls)
  const jobs = [
    { id: 1, title: "Software Engineer", company: "Tech Corp" },
    { id: 2, title: "Product Manager", company: "Innovate Ltd." },
  ];

  return new Response(JSON.stringify(jobs), { status: 200 });
}
