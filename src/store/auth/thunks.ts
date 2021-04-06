import { ThunkAction } from "redux-thunk";
import { AppAction, AppState } from "..";

// import request from "../../api/request"; //----> Generic Request for API Calls

import { loginFailure, loginRequest, loginSuccess } from "./action";
import { User } from "./types";

export function login(
  user: User
): ThunkAction<Promise<User>, AppState, undefined, AppAction> {
  return async (dispatch) => {
    // const req = await request(
    //   "GET",
    //   "https://jsonplaceholder.typicode.com/todos",
    //   {}
    // )
    //   .then((res: any) => {
    //     return res;
    //   })
    //   .catch((err: any) => {
    //     return err;
    //   });

    // console.log(req);

    dispatch(loginRequest());

    try {
      dispatch(loginSuccess(user));
      return user;
    } catch (err) {
      dispatch(loginFailure(err.message));
      throw err;
    }
  };
}
