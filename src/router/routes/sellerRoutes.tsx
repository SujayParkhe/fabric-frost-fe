import Home from "@/views/pages/Home";
import type { CustomRouteObject } from "@/types/auth";

const sellerRoutes: CustomRouteObject[] = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
];

export default sellerRoutes;
