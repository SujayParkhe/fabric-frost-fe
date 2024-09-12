import { privateRoutes } from "@/router/routes/privateRoutes";
import MainLayout from "@/layout/MainLayout";

const getRoutes = () => {
  return {
    path: "/",
    element: <MainLayout />,
    children: privateRoutes,
  };
};

export default getRoutes;
