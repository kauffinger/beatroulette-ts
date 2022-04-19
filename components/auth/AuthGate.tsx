import Section from "../layout/Section";
import Link from "next/link";
import { ReactNode } from "react";
import { useContext } from "react";
import { UserContext } from "../../lib/context";

function AuthGate({ children }: { children: ReactNode }) {
  const { user } = useContext(UserContext);
  return user ? (
    <>{children}</>
  ) : (
    <Section>
      <div className="flex flex-col justify-center h-48">
        <div className="text-center text-2xl font-bold">
          You must be logged in to view this.
        </div>
      </div>
    </Section>
  );
}

export default AuthGate;
