import AdminDashboard from "@/views/admin/AdminDashboard";
import type { CustomRouteObject } from "@/types/auth";

const adminRoutes: CustomRouteObject[] = [
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
];

export default adminRoutes;
