import type { RouteObject } from "react-router-dom";
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";
import AdminLogin from "@/views/auth/AdminLogin";

import type { LoginProps, SignUpProps } from "@/types/auth";

const loginProps: LoginProps = {
  email: "",
  password: "",
};

const signupProps: SignUpProps = {
  name: "",
  email: "",
  password: "",
};

const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login {...loginProps} />,
  },
  {
    path: "/register",
    element: <Register {...signupProps} />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin {...loginProps} />,
  },
];

export default publicRoutes;
