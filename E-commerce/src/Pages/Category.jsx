import women from "../assets/women.webp";
import men from "../assets/men.jpg";
import kids from "../assets/kids.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import Item from "../Item";

const Category = (props) => {
  const {all_product} = useContext(ShopContext);
    return (
      <div className="category">
        <h1>Shop by Category</h1> 
      <div className="catgry">
      <div className="category-img">
          <Link to="/men"><img src= {men} alt="Men's Category" /></Link>
          <Link to="/women"><img src= {women} alt="Women's Category" /></Link>
          <Link to="/kids"><img src= {kids} alt="Kids Category" /></Link>
      </div>
      <div className="category-names">
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
      </div>
      <div className="description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur eum magnam cumque dolorem architecto temporibus, quo nihil incidunt voluptatum! Non error recusandae iste culpa quae modi pariatur dignissimos ipsa?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur eum magnam cumque dolorem architecto temporibus, quo nihil incidunt voluptatum! Non error recusandae iste culpa quae modi pariatur dignissimos ipsa?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur eum magnam cumque dolorem architecto temporibus, quo nihil incidunt voluptatum! Non error recusandae iste culpa quae modi pariatur dignissimos ipsa?</p>
      </div>
      </div>
      </div>
      );
}
 
export default Category;