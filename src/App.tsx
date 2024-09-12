import React, { useEffect, useState } from "react";
import Router from "@/router/Router";
import publicRoutes from "@/router/routes/publicRoutes";
import getRoutes from "@/router/routes";

import type { RouteObject } from "react-router-dom";

const App: React.FC = () => {
  const [allRoutes, setAllRoutes] = useState<RouteObject[]>([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes]);
  }, []);

  return <Router allRoutes={allRoutes} />;
};

export default App;
