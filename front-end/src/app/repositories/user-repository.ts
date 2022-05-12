import { httpClient } from "../libs/http-client";

type SignUpData = {
  id: string;
  pwd: string;
  name: string;
  phone: string;
  email: string;
  birth: string;
  gender: "male" | "female" | "none";
};

type SignInData = {
  id: string;
  pwd: string;
};

const userRepository = {
  signIn(userInfo: SignInData) {
    return httpClient.post("/users/signin", { ...userInfo }).then((res) => {
      return res;
    });
  },
  signUp(userInfo: SignUpData) {
    return httpClient.post("/users/signup", { ...userInfo }).then((res) => {
      return res;
    });
  },
};

export { userRepository };
