import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import { CheckoutContainer, Header, HeaderBlock } from './checkout-styles.jsx';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart, cartTotal } =
    useContext(CartContext);

  return (
    <CheckoutContainer>
      <Header>
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
      </Header>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='total'>Total: €{cartTotal}</span>
    </CheckoutContainer>
  );
};

export default Checkout;
