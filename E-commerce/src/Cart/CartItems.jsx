import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { Link } from "react-router-dom";

const CartItems = () => {
    const {all_product, cartItem, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
    
    return ( 
        <div className="cartitems">
            <div className="cart-format">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                        return( 
                            <div key={e.id}>
                                <div className="cartitems-format cart-format">
                                    <img src={e.image} alt="" className="product-icon" />
                                    <p>{e.name}</p>
                                    <p>Rs.{e.price}</p>
                                    <button className="quantity">{cartItem[e.id]}</button>
                                    <p>Rs.{e.price*cartItem[e.id].toFixed(2)}</p>
                                    <img src="https://static.thenounproject.com/png/705306-200.png" alt="" className="remove" onClick={() => {removeFromCart(e.id)}} />
                                </div>
                                <hr />
                                </div>
                        );   
                } 
                    return null;
            })}
            <div className="cartitem-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cart-total-item">
                            <p>Subtotal</p>
                            <p>Rs.{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <p>Total</p>
                            <p>Rs.{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        
                    </div>
                </div>
            </div>
            <Link to='/checkout'><button>Proceed to Checkout</button></Link>
        </div>
     );
}
 
export default CartItems;