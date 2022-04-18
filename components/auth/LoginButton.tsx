import { auth, googleAuthProvider, signInWithPopup } from "../../lib/firebase";
import AppButton from "../ui/AppButton";

function LoginButton() {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AppButton
      className="transition bg-rgray-900 hover:bg-rgray-700 text-accent font-bold py-2 px-4 rounded w-auto flex-row border border-accent"
      onClick={signInWithGoogle}
    >
      Login
    </AppButton>
  );
}

export default LoginButton;
