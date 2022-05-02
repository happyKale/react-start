import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// 액션 타입
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// 액션 생성 함수
const logIn = createAction(LOG_IN, (user: any) => ({ user }));
const logOut = createAction(LOG_OUT, (user: any) => ({ user }));
const getUser = createAction(GET_USER, (user: any) => ({ user }));

// initialState
const initialState = {
  user: {
    name: "김텐드",
    role: "admin",
    phone: "010-1234-5678",
    address: "서울특별시 가나구 다라로 177",
    email: "abc@gmail.com",
  },
  is_login: false,
};

// 리듀서
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = {
          name: "",
          role: "",
          phone: "",
          address: "",
          email: "",
        };
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  logIn,
  logOut,
  getUser,
};
export { actionCreators };
