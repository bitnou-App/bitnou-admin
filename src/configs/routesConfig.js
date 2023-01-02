import React from 'react';
import { Redirect } from 'react-router-dom';

import { DashboardPageConfig } from '../pages/dashboard/DashboardPageConfig';
import { UsersPageConfig } from '../pages/users/UsersPageConfig';
import { CategoriesPageConfig } from '../pages/categories/CategoriesPageConfig';
import { BatchesPageConfig } from '../pages/batches/BatchesPageConfig';
import { LoginPageConfig } from '../pages/auth/login/LoginPageConfig';
import { Error404PageConfig } from '../pages/errors/404/Error404PageConfig';
import { Error500PageConfig } from '../pages/errors/500/Error500PageConfig';
// import { DocumentationConfig } from "../pages/documentation/DocumentationConfig";

const routeConfigs = [
  ...DashboardPageConfig.routes,
  ...UsersPageConfig.routes,
  ...CategoriesPageConfig.routes,
  ...BatchesPageConfig.routes,
  ...LoginPageConfig.routes,
  ...Error404PageConfig.routes,
  ...Error500PageConfig.routes,
];

const routes = [
  ...routeConfigs,
  {
    component: () => <Redirect to="/pages/errors/error-404" />,
  },
  // {
  //   path: "/test",
  //   exact: true,
  //   component: <Example />
  // }
];

export default routes;
