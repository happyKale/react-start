import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { storage } from "../../libs/storage";
import { UserModel } from "../../models/user-model";
import { userRepository } from "../../repositories";

// 액션 타입
const SIGN_UP = "SIGN_UP";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";
const DELETE_USER = "DELETE_USER";

// 액션 생성 함수
const signUp = createAction(
  SIGN_UP,
  (user: {
    id: string;
    pwd: string;
    name: string;
    phone: string;
    email: string;
    birth: string;
    gender: "male" | "female" | "none";
  }) => ({ user })
);
const signIn = createAction(SIGN_IN, (user: { id: string; pwd: string }) => ({
  user,
}));
const signOut = createAction(SIGN_OUT, () => ({}));
const deleteUser = createAction(DELETE_USER, (user: { id: string }) => ({
  user,
}));

// initialState
const initialState: { user: UserModel; is_login: boolean } = {
  user: {
    id: 1,
    name: "김텐드",
    role: "admin",
    phone: "010-1234-5678",
    address: "서울특별시 가나구 다라로 177",
    email: "abc@gmail.com",
    birth: "1995-10-13",
    gender: "male",
  },
  is_login: storage.getItem("isLogin") ? true : false,
};

// 미들웨어
const signUpDB = (userInfo: {
  id: string;
  pwd: string;
  name: string;
  phone: string;
  email: string;
  birth: string;
  gender: "male" | "female" | "none";
}) => {
  return async (
    dispatch: any,
    getState: UserModel & boolean,
    { history }: any
  ) => {
    try {
      console.log("여기가 회원가입 미들웨어 axios호출 바로 전!!!");
      const response = await userRepository.signUp(userInfo);
      response && history.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };
};

const signInDB = (userInfo: { id: string; pwd: string }) => {
  return async (
    dispatch: any,
    getState: UserModel & boolean,
    { history }: any
  ) => {
    try {
      console.log("여기가 로그인 미들웨어 axios호출 바로 전!!!");
      const response = await userRepository.signIn(userInfo);
      response && history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

// 리듀서
export default handleActions(
  {
    [SIGN_UP]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [SIGN_IN]: (state, action) =>
      produce(state, (draft) => {
        storage.setItem("isLogin", "true");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [SIGN_OUT]: (state, action) =>
      produce(state, (draft) => {
        storage.clear();
        draft.user = {
          id: 0,
          name: "",
          role: "member",
          phone: "",
          address: "",
          email: "",
          birth: "0000-00-00",
          gender: "none",
        };
        draft.is_login = false;
      }),
  },
  initialState
);

export const userActions = {
  signUpDB,
  signInDB,
  signOut,
};
