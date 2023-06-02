import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";

import Home from "./Home";
import Repository from "./Repository";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "/repository",
    element: <Repository />,
    title: "repository",
  },
];

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
