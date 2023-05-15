"use client"

import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'

const NavbarCart = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  
  return (
    <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
      <AiOutlineShopping />
      <span className='cart-item-qty'>{totalQuantities}</span>
    </button>
  )
}

export default NavbarCart