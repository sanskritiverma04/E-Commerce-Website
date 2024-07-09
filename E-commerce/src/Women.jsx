import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import Item from "./Item";
import { useState } from "react";

const Women = (props) => {
    const {all_product} =useContext(ShopContext);
    const [price, setPrice] = useState(false);

    return ( 
    <div>
        <div className="price-container">
            <div className="price-sort" onClick={() =>{setPrice(!price)}}>
                <p>Sort by Price <img src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png" alt=""></img></p>
            </div>
            <div className={`price-list ${price? 'active' : 'inactive'}`}>
                <li>less than Rs.1000</li>
                <li>less than Rs.2000</li>
                <li>less than Rs.3000</li>
            </div>
        </div>
        <div className="women">
            {all_product.map((item,i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category} rating={item.rating} />
          }
          else{
            return null;
          }
        })}
        </div>
    </div>
     );
}
 
export default Women;
