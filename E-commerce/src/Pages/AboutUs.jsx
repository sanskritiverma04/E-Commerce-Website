import image from "../assets/about-us.webp"
import image2 from "../assets/test.avif"

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="abt-us">
                <img src={image} alt="" />
                <p><h2>About The Company</h2> <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nesciunt minus libero omnis atque, voluptatum veniam molestias minima. Sit iste totam officia recusandae harum ab necessitatibus culpa a illum. Animi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus, soluta ratione facere molestiae repudiandae molestias, quisquam mollitia rem quos architecto amet voluptate veritatis iusto qui atque quas sed autem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores optio sed fugiat ipsa inventore ratione repellat? Dicta voluptatum aperiam aliquam, quibusdam quis porro placeat accusamus, numquam ipsam ex ea beatae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eum mollitia, alias beatae veritatis eius ipsum aspernatur, omnis voluptatem qui consequatur sapiente? Deserunt corrupti voluptatem laboriosam quis reprehenderit nobis dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum laboriosam consequuntur quia maxime sint eaque nemo illum numquam nulla incidunt. Molestiae quisquam corporis, provident cupiditate porro accusamus quae dicta architecto.</p>
            </div>
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
        <div className="testimonial">
            <p><h2>Testimonials</h2><br />
            <b>Testimonial for The Company:</b><br /><br />
            "I've had the pleasure of shopping on QuickBuy.com multiple times now, and each experience has been nothing short of fantastic. As an avid online shopper, I value efficiency, reliability, and a seamless user experience—and QuickBuy.com delivers on all fronts.The website's interface is clean and intuitive, making it incredibly easy to find exactly what I'm looking for, whether it's the latest tech gadgets or everyday essentials. The product descriptions are detailed and accurate, ensuring I know exactly what to expect when my order arrives. What truly sets QuickBuy.com apart, though, is their commitment to customer service. On the rare occasion I've had a question or issue with an order, their support team has been quick to respond and incredibly helpful, resolving any issues promptly.Shipping is always fast and reliable, with items arriving well-packaged and in perfect condition. The convenience of being able to track my orders in real-time adds an extra layer of assurance.
            <br />Overall, I can confidently say that QuickBuy.com has become my go-to destination for online shopping. Whether you're looking for quality products, excellent customer service, or a user-friendly shopping experience, I highly recommend giving QuickBuy.com a try. You won't be disappointed!"
            <br /><br />- Sarah L., Happy Customer</p>
            <img src={image2} alt="" />
        </div>
        </div>
     );
}
 
export default AboutUs;