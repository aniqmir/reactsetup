import React from "react";
import { Starter } from "../../components";

import { connect } from "react-redux";
// import { login } from "../../store/auth/thunks";

const Dashboard: React.FC = (props: any) => {
  return (
    <Starter>
      <h2>{props.title}</h2>
      {/* <button onClick={props.login}>Login</button> */}
    </Starter>
  );
};

const mapStateToProps = (state: any) => {
  return {
    data: state,
  };
};
// const mapDispatchToProps = (dispatch: Function) => {
//   return { login: (url: any) => dispatch(login(url)) };
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Dashboard);
