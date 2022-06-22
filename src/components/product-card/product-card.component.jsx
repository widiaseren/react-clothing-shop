// import { useContext } from 'react';
// import { CartContext } from '../../context/cart.context';

import { useDispatch, useSelector } from 'react-redux';
import Button, { BUTTON_TYPE } from '../button/button.component';

import { Footer, Name, Price, ProductCartContainer } from './product-card.styles.jsx';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
  const {name, price, imageUrl} = product;

  // const { addItemToCart } = useContext(CartContext)

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button 
        buttonType={BUTTON_TYPE.inverted} 
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCartContainer>
  )
}

export default ProductCard;