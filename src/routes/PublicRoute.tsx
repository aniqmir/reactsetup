import * as React from "react";
import { Route, Redirect } from "react-router-dom";
// import { isLogin } from '../middleware/auth';

const isLogin = () => {
  return true;
};

const PublicRoute: React.FC<any> = ({
  component: Component,
  restricted,
  title,
  ...rest
}) => (
  // restricted = false meaning public route
  // restricted = true meaning restricted route
  <Route
    {...rest}
    render={(props) =>
      isLogin() && restricted ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} title={title} />
      )
    }
  />
);

export default PublicRoute;
