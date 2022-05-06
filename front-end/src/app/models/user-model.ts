export type UserModel = {
  id: number;

  name: string;

  phone: string;

  address?: string;

  email: string;

  birth: string;

  gender: "male" | "female";

  role: "admin" | "customer";
};
