import Link from "next/link";
import Image from "next/image";
import SearchComponent from "./SearchComponent";
import { AiOutlineMenu } from "react-icons/ai";
import BurgerMenu from "./BurgerMenu";
const Navbar = () => {
  return (
    <nav style={{ background: "transparent" }} className="p-4 ">
      <div className="flex gap-10 justify-between items-center">
        <div>
          <Link className="flex gap-2 items-center" href={"/"}>
            <Image src="/airbnb.png" alt="Logo" width={35} height={35} />
            AirBnB
          </Link>
        </div>
        <div className="hidden sm:flex">
          <SearchComponent />
        </div>
        {/* <SearchComponent /> */}
        <div>
          <ul className="hidden sm:flex flex-row gap-12">
            <Link href={"/"}>
              <li className="hover:text-red-500 duration-500">Home</li>
            </Link>
            <Link href={"/"}>
              <li className="hover:text-red-500 duration-500">About</li>
            </Link>
            <Link href={"/"}>
              <li className="hover:text-red-500 duration-500">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="sm:hidden">
          <BurgerMenu />
          {/* <AiOutlineMenu /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
