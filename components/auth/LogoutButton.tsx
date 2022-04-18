import { auth } from "../../lib/firebase";
import AppButton from "../ui/AppButton";

import { LogoutIcon } from "@heroicons/react/solid";

function LogoutButton() {
  return (
    <AppButton
      className="transition hover:bg-accent text-white font-bold py-2 px-4 rounded"
      onClick={async () => await auth.signOut()}
    >
      <LogoutIcon /> Logout
    </AppButton>
  );
}

export default LogoutButton;
