import AdminDashboard from "@/views/admin/AdminDashboard";
import Orders from "@/views/admin/Orders";
import Categories from "@/views/admin/Categories";
import Sellers from "@/views/admin/Sellers";
import PaymentRequest from "@/views/admin/PaymentRequest";
import InactiveSellers from "@/views/admin/InactiveSellers";
import SellerRequest from "@/views/admin/SellerRequest";
import SellerChat from "@/views/admin/SellerChat";

import type { CustomRouteObject } from "@/types/auth";

const adminRoutes: CustomRouteObject[] = [
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/orders",
    element: <Orders />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/category",
    element: <Categories />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/sellers",
    element: <Sellers />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/payment-request",
    element: <PaymentRequest />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/inactive-sellers",
    element: <InactiveSellers />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/seller-request",
    element: <SellerRequest />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/seller-chat",
    element: <SellerChat />,
    role: "admin",
  },
];

export default adminRoutes;
