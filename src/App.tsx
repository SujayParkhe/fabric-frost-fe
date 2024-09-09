import React, { useState } from "react";
import Router from "@/router/Router";
import publicRoutes from "@/router/routes/publicRoutes";

import type { RouteObject } from "react-router-dom";

const App: React.FC = () => {
  const [allRoutes, setAllRoutes] = useState<RouteObject[]>([...publicRoutes]);
  console.log(allRoutes);
  return <Router allRoutes={allRoutes} />;
};

export default App;
