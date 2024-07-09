import { useState } from "react";
import Item from "../Item";
import product from '../assets/Products'
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"; 
import ProductView from "./ProductView";
import ViewPage from "./ViewPage";

const Product = () => {
    const [open, setOpen] = useState(false);
    const [price, setPrice] = useState(false);

    return ( 
        <div>
            <div className="filters">
            <div className="sort-container">
                <div className="sort" onClick={() =>{setOpen(!open)}}>
                <p>Sort by Category <img src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png" alt=""></img></p>
                </div>
                <div className={`list ${open? 'active' : 'inactive'}`}>
                <li><Link to='/men'>Men</Link></li>
                <li><Link to='/women'>Women</Link></li>
                <li><Link to='/kids'>Kids</Link></li>
                </div> 
            </div>
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
            </div>
            <div className="product">
            {product.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category} rating={item.rating}
                />
            })
            } 
            </div>
            <ViewPage product = {product} />
        </div>
     );
}
 
export default Product;