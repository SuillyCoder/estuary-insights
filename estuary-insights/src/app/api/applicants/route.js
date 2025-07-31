// src/app/api/applicants/route.js
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req) {
  const session = await getServerSession(req, authOptions);
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  if (session.user.role !== "applicant") {
    return new Response(JSON.stringify({ error: "Forbidden - Not an applicant" }), { status: 403 });
  }

  // Return applicant-specific data
  return new Response(
    JSON.stringify({ message: "Welcome applicant!", user: session.user }),
    { status: 200 }
  );
}
