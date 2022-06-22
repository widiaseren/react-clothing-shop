// import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './cart-icon.styles.jsx';

// import { CartContext } from '../../context/cart.context';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext)
  // const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItemCount = useSelector(selectCartCount)

  const toogleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
  

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;