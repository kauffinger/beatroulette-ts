import { Button } from "@mantine/core";

function NavBar() {
  return (
    <div className="flex justify-between items-center w-full max-w-screen-sm p-6">
      <div className="text-2xl font-bold text-daccent hover:text-accent">
        Beatroulette
      </div>
      <div className="flex">
        <Button variant="subtle" color="lime">
          Play
        </Button>
        <Button variant="subtle" color="red">
          Login
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
