import { Button } from "@mantine/core";
import Link from "next/link";
import { useContext } from "react";

import { UserContext } from "../../lib/context";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";

function NavBar() {
  const { user, username, loading, profilePicture, isAdmin } =
    useContext(UserContext);
  return (
    <div className="flex justify-between items-center w-full max-w-screen-sm p-6">
      <div className="text-2xl font-bold text-daccent hover:text-accent">
        Beatroulette
      </div>
      <div className="flex">
        {user ? (
          <>
            <Link href={"/game"} passHref>
              <Button
                variant="subtle"
                color="lime"
                className="hover:bg-rgray-800"
              >
                Play
              </Button>
            </Link>
            <LogoutButton />
          </>
        ) : (
          <LoginButton></LoginButton>
        )}
      </div>
    </div>
  );
}

export default NavBar;
