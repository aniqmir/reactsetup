import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { isLogin } from '../middleware/auth';

const isLogin = () => {
  return true;
};

const PrivateRoute: React.FC<any> = ({
  component: Component,
  title,
  ...rest
}) => (
  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /signin page
  <Route
    {...rest}
    render={(props) =>
      isLogin() ? <Component {...props} title={title} /> : <Redirect to="/" />
    }
  />
);

export default PrivateRoute;
