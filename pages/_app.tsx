require("../lib/firebase");
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

import { UserContext } from "../lib/context";
import useUserData from "../lib/hooks/useUserData";

function MyApp({ Component, pageProps }: AppProps) {
  const userData = useUserData();

  return (
    <MantineProvider>
      <NotificationsProvider>
        <UserContext.Provider value={userData}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
