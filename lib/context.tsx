import { User } from "firebase/auth";
import { createContext } from "react";

export type UserContent = {
  user: User | null | undefined;
  username: string;
  loading: boolean;
  profilePicture: string;
  isAdmin: boolean;
};

export const UserContext = createContext<UserContent>({
  user: null,
  username: "",
  loading: false,
  profilePicture: "",
  isAdmin: false,
});
