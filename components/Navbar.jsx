import Link from "next/link";

import { Cart, NavbarCart } from ".";
import Image from "next/image";
import logo from "../public/assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link href="/">
        <div className="logo-container">
          <Image src={logo} height={30} width={210} alt="logo" />
        </div>
      </Link>
      <NavbarCart />
      <Cart />
    </div>
  );
};

export default Navbar;
