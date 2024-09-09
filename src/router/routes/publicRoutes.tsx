import type { RouteObject } from "react-router-dom";
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";
import { LoginProps, SignUpProps } from "@/types/auth";

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
];

export default publicRoutes;
