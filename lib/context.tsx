import { User } from "firebase/auth";
import { createContext } from "react";

export type UserContent = {
  user: User | null | undefined;
  username: string | null;
  loading: boolean | null;
  profilePicture: string | null;
  isAdmin: boolean | null;
};

export const UserContext = createContext<UserContent>({
  user: null,
  username: null,
  loading: null,
  profilePicture: null,
  isAdmin: null,
});
