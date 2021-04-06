import * as React from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

//pages
import routes from "./routes";

const Routes: React.FC = () => {
  // const [user, setUser] = React.useState<any>(null);
  // const value:any = React.useMemo(() => ({ user, setUser }), [user, setUser]);

  const userRestricted = () => {
    //if user logined, return false
    return false;
  };

  return (
    <>
      {routes.map((route: any, index: number) =>
        route.type === "public" ? (
          <PublicRoute
            restricted={route.restricted ? userRestricted() : false}
            component={route.component}
            path={route.path}
            exact={route.exact}
            title={route.title}
            key={route.path}
          />
        ) : (
          <PrivateRoute
            component={route.component}
            path={route.path}
            exact={route.exact}
            title={route.title}
            key={route.path}
          />
        )
      )}
    </>
  );
};

export default Routes;
