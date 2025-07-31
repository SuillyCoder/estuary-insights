// src/app/api/admin/route.js
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req) {
  const session = await getServerSession(req, authOptions);
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  if (session.user.role !== "admin") {
    return new Response(JSON.stringify({ error: "Forbidden - Not an admin" }), { status: 403 });
  }

  // Return admin data (statistics, recent applicants, etc.)
  return new Response(
    JSON.stringify({ message: "Welcome admin!", user: session.user }),
    { status: 200 }
  );
}
