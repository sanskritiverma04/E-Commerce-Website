import star from '../assets/star.jpeg';
import dullstar from '../assets/dull star.png';
import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import Item from "../Item";

const ProductDisplay = (props) => {
    const {product} = props;
    const {all_product} = useContext(ShopContext);
    const {addToCart} = useContext(ShopContext);

    return ( 
        <div className="productdisplay">
        <div className="display">
            <div className="display-left">
                <div className="image-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="image-display">
                    <img src={product.image} alt="" className="main-image-display" />
                </div>
            </div>
            <div className="display-right">
                <h1>{product.name}</h1>
                <div className="star-display">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star}alt="" />
                    <img src={star} alt="" />
                    <img src={dullstar} alt="" />
                </div>
                <div className="display-price">
                    Rs.{product.price}
                </div>
                <div className="display-description">
                    <b>Description</b><br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis in modi veniam corrupti autem earum, commodi sapiente dolor dolorem sequi beatae ipsam, aperiam vel nesciunt ut aliquid repellendus nostrum! Aut!
                </div>
                <button onClick={() => {addToCart(product.id)}}>Add to Cart</button>
            </div>
            </div>
            <div className="relatedproducts">
                <h1>Related Products</h1>
                <div className="related-items">
                    {all_product.map((item,i) => {
                        if (product.category === item.category && product.id !== item.id) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category} />
                        }
                        else{
                        return null;
                         }
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default ProductDisplay;