import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-transparent flex justify-between z-10">
        <div>
          <Image src="" alt="" />
        </div>
        <div className=" flex gap-9 pr-10 pt-12 pb-8 box-border">
          <h2>Work</h2>
          <h2>Studio</h2>
          <h2>News</h2>
          <h2>Contact</h2>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
