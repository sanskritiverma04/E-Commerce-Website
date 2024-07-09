import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [contact,setContact] = useState("");
    const [body,setBody] = useState("");
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
            alert("Enter your description");
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
            body,
        };

        fetch('http://localhost:1000/contact-us', {
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
        <div className="contact-us">
            <div className="comp-info">
                <h2>Company Contact Info</h2>
                <div className="info">
                <p>Customer Care Number : +91 000XXXXXXX</p>
                <p>Company Mail-id : thecompany@gmail.com</p>
                <p>Our Office Address : xyz, Delhi</p>
                </div>
            </div>
            <div className="form">
                <h2>Contact us</h2>
                <form onSubmit={handleSubmit}>
                    <label>Customer Name:</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Customer Mail-id:</label>
                    <input
                        type="text"
                        required
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                    />
                    <label>Customer Contact Number:</label>
                    <input
                        type="text "
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                    <label>Description</label>
                    <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default ContactUs;