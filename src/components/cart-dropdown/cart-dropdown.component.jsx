import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx';

// import { useContext } from 'react';
// import { CartContext } from '../../context/cart.context';

import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const CartDropdown = () => {
  // const { cartItems } = useContext(CartContext)
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  
  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) :
          <EmptyMessage>Your cart is empty</EmptyMessage>
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown;