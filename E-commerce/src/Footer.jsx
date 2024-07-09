import { Link } from "react-router-dom";

const Footer = () => {
    return (  
        <div className="footer">
            <h2>The Company</h2>
            <div className="footer-content">
                <div className="footer-links">
                <Link to='/contact'>Contact us</Link>
                <Link to='/about'>About us</Link>
                </div>
                <div className="follow">
                    <p>Follow us</p>
                    <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1-2.png" alt="" />
                    <img src="https://th.bing.com/th/id/OIP.xd3sxnfRDdSuGpIWv3Xf9wAAAA?rs=1&pid=ImgDetMain" alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright @ 2023 - All Right Reserved</p>
            </div>
        </div>
    );
}
 
export default Footer;