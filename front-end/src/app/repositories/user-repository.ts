import { UserModel } from "../models/user-model";
import { httpClient } from "../libs/http-client";

const userRepository = {
  getUser(role: "admin" | "customer", userId?: string) {
    return httpClient.get<{ items: UserModel[] }>("/users").then((res) => {
      return res;
    });
  },
  signIn(id: string, pwd: string) {
    return httpClient.post("/signin", { id, pwd }).then((res) => {
      return res;
    });
  },
  signUp(
    id: string,
    pwd: string,
    pwdCheck: string,
    name: string,
    phone: string,
    email: string,
    birth: string,
    gender: "male" | "female"
  ) {
    return httpClient.post("/signup", {});
  },
};

export { userRepository };
