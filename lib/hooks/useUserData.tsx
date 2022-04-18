import { getAuth, User } from "firebase/auth";
import {
  getFirestore,
  doc,
  DocumentReference,
  DocumentData,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";

interface ReturnTypes {
  user: User | null | undefined;
  username: string;
  loading: boolean;
  profilePicture: string;
  isAdmin: boolean;
}

const useUserData = (): ReturnTypes => {
  const [user, loading, error] = useAuthState(getAuth());
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  let userDataQuery = (): DocumentReference<DocumentData> | null => null;

  if (!loading && user)
    userDataQuery = () => doc(getFirestore(), "users", user.uid);

  const [userData, userDataLoading, userDataError] = useDocumentData(
    userDataQuery()
  );

  useEffect(() => {
    setUsername(userData?.username);
    setProfilePicture(userData?.image);
    setIsAdmin(userData?.isAdmin);
  }, [userData?.image, userData?.isAdmin, userData?.username]);

  return { user, username, loading, profilePicture, isAdmin };
};

export default useUserData;
