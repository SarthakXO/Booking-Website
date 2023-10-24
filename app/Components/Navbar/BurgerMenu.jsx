"use client";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const BurgerMenu = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      {menu ? (
        <AiOutlineClose onClick={handleMenu} />
      ) : (
        <AiOutlineMenu onClick={handleMenu} />
      )}
    </div>
  );
};

export default BurgerMenu;
