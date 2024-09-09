import React from "react";
import { useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

interface RouterProps {
  allRoutes: RouteObject[];
}

const Router: React.FC<RouterProps> = ({ allRoutes }) => {
  const routes = useRoutes([...allRoutes]);
  return routes;
};

export default Router;
