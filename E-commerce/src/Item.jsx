import { Link } from "react-router-dom";

const Item = (props) => {
    return (  
        <div className="item">
            <Link to={`/product-view/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} /></Link>
            <p>{props.name}
                <br/>
            {props.category}
                <br />
            Rs.{props.price}
            <br />
            {props.rating}
            </p>
        </div>
    );
}
 
export default Item ;