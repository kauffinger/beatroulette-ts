import Link from "next/link";
import { Anchor } from "@mantine/core";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen-sm pb-6 space-y-2">
      <div className="text-sm font-bold text-rgray-100">
        Created with ❤️ by Konstantin Auffinger
      </div>
      <div className="flex space-x-4 text-sm">
        <Anchor
          component={Link}
          href="https://github.com/kauffinger/beatroulette-ts"
        >
          GitHub
        </Anchor>
        <Anchor
          component={Link}
          href="https://www.linkedin.com/in/konstantin-auffinger-27447121a/"
        >
          LinkedIn
        </Anchor>
      </div>
    </div>
  );
}

export default Footer;
