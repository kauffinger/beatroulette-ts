import Link from "next/link";

import AppButton from "../../ui/AppButton";
import { Loader } from "@mantine/core";

function HostStatus({ isAdmin = false }: { isAdmin: boolean }) {
  return (
    <>
      {isAdmin ? (
        <>
          <div className="mt-16 mb-4 text-accent uppercase text-xl font-thin tracking-wider"></div>
          <Link href="/game/create">
            <a>
              <AppButton>Create Game</AppButton>
            </a>
          </Link>
        </>
      ) : (
        <>
          <div className="mt-16 text-accent uppercase text-xl font-thin tracking-wider">
            Waiting on host
          </div>
          <Loader />
        </>
      )}
    </>
  );
}

export default HostStatus;
