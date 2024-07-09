import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { useParams } from "react-router-dom";
import ViewPage from "./ViewPage";
import ProductDisplay from "./ProductDisplay";

const ProductView = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    return ( 
        <div className="product-view">
            <ViewPage product={product}/>
            <ProductDisplay product={product} />
        </div>
     );
}
 
export default ProductView;