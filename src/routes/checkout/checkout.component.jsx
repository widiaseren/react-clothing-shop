import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.jsx';

// import { useContext} from 'react';
// import { CartContext } from '../../context/cart.context';

import { useSelector } from 'react-redux/es/exports.js';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector.js';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
  // const { cartItems, cartTotal } = useContext(CartContext)
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      }
      <Total>TOTAL: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default Checkout;