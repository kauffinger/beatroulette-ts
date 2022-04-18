import Link from "next/link";
import { ReactNode } from "react";
import { useContext } from "react";
import { UserContext } from "../../lib/context";

function AuthGate({
  fallback,
  children,
}: {
  fallback: ReactNode;
  children: ReactNode;
}) {
  const { user } = useContext(UserContext);
  return user ? (
    <>{children}</>
  ) : (
    <>{fallback}</> || (
      <div className="flex flex-col h-screen justify-center">
        <div className="text-center text-2xl font-bold">
          You must be logged in to view this.
        </div>
      </div>
    )
  );
}

export default AuthGate;
