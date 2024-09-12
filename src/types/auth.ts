import { RouteObject } from "react-router-dom";

type LoginProps = {
  email: string;
  password: string;
};

type SignUpProps = {
  name: string;
  email: string;
  password: string;
};

type CustomRouteObject = RouteObject & {
  ability?: string[];
  role?: string;
};

export type { LoginProps, SignUpProps, CustomRouteObject };
