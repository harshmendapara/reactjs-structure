import  React, { lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";

const AuthLayout = lazy(() => import("./layouts/Auth"));

const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));

const Home = lazy(() => import("./views/dashboard/Index"));
const Auth = lazy(() => import("./views/authentication/Index"));
const Add = lazy(() => import("./views/dashboard/AddEdit"));

const AppRoute = ({
    component: Component,
    layout: Layout,
    ...rest
  }) => (
    <Route
      {...rest}
      render={props => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }}
    />
  )

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <AppRoute
          exact
          path="/"
          component={Home}
          layout={DashboardLayout}
        />
        <AppRoute
          exact
          path="/edit/:paramsId"
          component={Add}
          layout={DashboardLayout}
        />
        <AppRoute
          exact
          path="/add"
          component={Add}
          layout={DashboardLayout}
        />
        <AppRoute
          exact
          path="/auth"
          component={Auth}
          layout={AuthLayout}
        />
      </Switch>
    </Router>
  );
}

export default AppRouter;
