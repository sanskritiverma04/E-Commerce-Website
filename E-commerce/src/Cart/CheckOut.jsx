import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ShopContext } from '../ShopContext';

const CheckOut = () => {
    const { all_product, cartItem, getTotalCartAmount } = useContext(ShopContext);

    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [contact,setContact] = useState("");
    const [address,setAddress] = useState("");
    const navigate = useNavigate();

    const validateForm = () => {
        if (name === "") {
            alert("Enter your Name");
            return false;
        }

        if (mail === "") {
            alert("Enter your Mail-id");
            return false;
        }

        if (contact === "") {
            alert("Enter your Contact Number");
            return false;
        }

        if (body === "") {
            alert("Enter your Address");
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const data = {
            name,
            mail,
            contact,
            address,
        };

        fetch('http://localhost:2000/check-out', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
          })
            .then(response => {
              if (!response.ok){
                throw new Error('Network response was not ok');
              } 
              return response.json();
            })
            .then(result => {
              console.log('Success:', result);
              alert('Form submitted successfully!');
              navigate('/');
            })      
    };

    return ( 
        <div className="checkout-page">
            <h1>Checkout Page</h1>
            <div className="product-summary">
                {all_product.map((product) => {
                if (cartItem[product.id] > 0) {
                    return (
                    <div key={product.id} className="summary-item">
                        <img src={product.image} alt={product.name} className="summary-image" />
                        <p>{product.name}</p>
                        <p>Quantity: {cartItem[product.id]}</p>
                        <p>Price: Rs.{product.price}</p>
                        <p>Total: Rs.{(product.price * cartItem[product.id]).toFixed(2)}</p>
                    </div>
                    );
                }
                return null;
                })}
            </div>
            <div className="summary-total">
                <h2>Total Amount: Rs.{getTotalCartAmount()}</h2>
            </div>

            <div className="form-checkout">
                <h1>Shipping Information</h1>
                <form onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Mail-id:</label>
                        <input
                            type="text"
                            required
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                        />
                        <label>Contact Number:</label>
                        <input
                            type="text "
                            required
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                        <label>Address</label>
                        <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                        <Link to='/orderconfirm'><button type="submit">Submit</button></Link>
                </form>
            </div>
        </div>                    
     );
}
 
export default CheckOut;