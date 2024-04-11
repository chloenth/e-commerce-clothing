import Button from '../button/Button';
import './styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div>Cart Item</div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
