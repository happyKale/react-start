import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { storage } from "../../libs/storage";
import { UserModel } from "../../models/user-model";

// 액션 타입
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// 액션 생성 함수
const logIn = createAction(LOG_IN, (user: { id: string; pwd: string }) => ({
  user,
}));
const logOut = createAction(LOG_OUT, () => ({}));
const getUser = createAction(GET_USER, (user: UserModel) => ({ user }));

// initialState
const initialState: { user: UserModel; is_login: boolean } = {
  user: {
    id: 1,
    name: "김텐드",
    role: "admin",
    phone: "010-1234-5678",
    address: "서울특별시 가나구 다라로 177",
    email: "abc@gmail.com",
  },
  is_login: storage.getItem("isLogin") ? true : false,
};

// 리듀서
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        storage.setItem("isLogin", "true");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        storage.clear();
        draft.user = {
          id: 0,
          name: "",
          role: "customer",
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
