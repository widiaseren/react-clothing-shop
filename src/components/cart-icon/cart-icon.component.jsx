import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './cart-icon.styles.jsx';

import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext)
  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;