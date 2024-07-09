import Item from './Item';
import latest from './assets/latest'

const LatestProducts = () => {
    return ( 
        <div className="latest">
            <h2>Latest Products</h2>
            <div className="collection">
                {latest.map((item,i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category}/>
                })}
            </div>
        </div>
     );
}
 
export default LatestProducts;