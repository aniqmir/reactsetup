import React from "react";
import { Starter } from "../../components";

const Login: React.FC = (props: any) => {
  return (
    <Starter>
      <h2>{props.title}</h2>
    </Starter>
  );
};

export default Login;
