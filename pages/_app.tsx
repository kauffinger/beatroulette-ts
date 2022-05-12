require("../lib/firebase");
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

import { UserContext } from "../lib/context";
import useUserData from "../lib/hooks/useUserData";

function MyApp({ Component, pageProps }: AppProps) {
  const userData = useUserData();

  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <NotificationsProvider>
        <ModalsProvider>
          <UserContext.Provider value={userData}>
            <Component {...pageProps} />
          </UserContext.Provider>
        </ModalsProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
