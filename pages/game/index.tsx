import { useContext } from "react";

import { UserContext } from "../../lib/context";
import AuthGate from "../../components/auth/AuthGate";
import LoginStatus from "../../components/game/waiting/LoginStatus";
import HostStatus from "../../components/game/waiting/HostStatus";
import Section from "../../components/layout/Section";
import Page from "../../components/layout/Page";

function PlayHome() {
  const { user, username, loading, profilePicture, isAdmin } =
    useContext(UserContext);
  return (
    <Page>
      <AuthGate>
        <main className="flex flex-col flex-1">
          <Section className="flex flex-col items-center justify-center bg-rgray-900 h-full w-full">
            <LoginStatus></LoginStatus>
            <HostStatus isAdmin={isAdmin}></HostStatus>
          </Section>
        </main>
      </AuthGate>
    </Page>
  );
}

export default PlayHome;
