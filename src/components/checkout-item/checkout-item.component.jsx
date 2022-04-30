import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Values, Quantity, RemoveButton } from './checkout-item.styles.jsx';

const CheckoutItem = ( {cartItem} ) => {
  const { name, price, quantity, imageUrl } = cartItem; 
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Values>{quantity}</Values>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem;