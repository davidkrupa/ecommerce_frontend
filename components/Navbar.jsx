import Link from 'next/link'

import { Cart, NavbarCart } from "."

const Navbar = () => {

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">JSM Headphones</Link>
      </p>
      <NavbarCart />
      <Cart />
    </div>
  )
}

export default Navbar