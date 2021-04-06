import * as React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Routes />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
