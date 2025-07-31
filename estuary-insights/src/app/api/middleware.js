// middleware.js
import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      // For public paths (e.g., login), allow access
      if (req.nextUrl.pathname === "/") return true;

      // Protect the /admin routes - must be admin
      if (req.nextUrl.pathname.startsWith("/admin")) {
        return token?.role === "admin";
      }

      // Protect the /applicant routes - must be applicant
      if (req.nextUrl.pathname.startsWith("/applicant")) {
        return token?.role === "applicant";
      }

      // Default deny other protected paths
      return false;
    },
  },
});

export const config = {
  matcher: ["/admin/:path*", "/applicant/:path*"],
};
