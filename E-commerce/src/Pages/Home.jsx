import React from "react";
import women from "../assets/women.webp";
import men from "../assets/men.jpg";
import kids from "../assets/kids.png";
import LatestProducts from "../LatestProducts";
import Slideshow from "../SlideShow";

const Home = () => {
    return ( 
       <div>
        <Slideshow />
        <div className="category">
        <h2>Shop by Category</h2>
        <div className="category-img">
            <img src= {men} alt="Men's Category" />
            <img src= {women} alt="Women's Category" />
            <img src= {kids} alt="Kids Category" />
        </div>
        <div className="category-names">
            <h3>Men</h3>
            <h3>Women</h3>
            <h3>Kids</h3>
        </div>
        </div>
        <LatestProducts />
        <div className="feature">
        <h2>Our Features</h2>
            <div className="cont">
            <div className="first">
                <h2>Free Shipping Method</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati qui animi corporis fugit quod vitae. Perferendis quos, veniam praesentium quo quasi culpa ipsa eos quas dicta dolore exercitationem nesciunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ducimus, laborum quas consequatur voluptatum perspiciatis, laudantium nobis, praesentium dolores cum necessitatibus distinctio dolorem sequi voluptas saepe porro tempore quo expedita! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur distinctio expedita velit labore possimus ex architecto doloremque vel libero magnam. Voluptates recusandae vel magnam officia? Temporibus minus quod repellat autem.</p>
            </div>
            <div className="second">
                <h2>Secure Payment Method</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta earum optio, quibusdam sunt porro, exercitationem veniam veritatis perferendis suscipit, quia alias voluptatum impedit modi natus vero. Animi, expedita explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus facere sint pariatur sequi natus dolorum! Cumque dolorem quae voluptatem totam, sint molestias obcaecati harum natus, necessitatibus nam quidem, aut laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis, dicta vel quaerat ullam veniam aliquam ducimus placeat cum quos facilis alias, pariatur temporibus beatae nostrum enim exercitationem totam nemo?</p>
            </div>
            <div className="third">
                <h2>Easy Return</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati qui animi corporis fugit quod vitae. Perferendis quos, veniam praesentium quo quasi culpa ipsa eos quas dicta dolore exercitationem nesciunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ducimus, laborum quas consequatur voluptatum perspiciatis, laudantium nobis, praesentium dolores cum necessitatibus distinctio dolorem sequi voluptas saepe porro tempore quo expedita! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur distinctio expedita velit labore possimus ex architecto doloremque vel libero magnam. Voluptates recusandae vel magnam officia? Temporibus minus quod repellat autem.</p>
            </div>
            </div>
        </div>
       </div> 
     );
}
 
export default Home;