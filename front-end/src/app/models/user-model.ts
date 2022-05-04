export type UserModel = {
  id: number;

  name: string;

  phone: string;

  address?: string;

  email: string;

  role: "admin" | "customer";
};
