"use client";

import { ModeToggle } from "./modeToggle";

const NavBar = () => {
  return (
    <nav className="justify-end space-between p-4 flex sticky top-0">
      <div className="justify-center items-center flex mr-24 w-1/2">
        <></>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default NavBar;
