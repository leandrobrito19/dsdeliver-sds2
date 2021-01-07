import ProductCard from "./ProductCard";
import { product } from "./types";

type props ={
    products: product[];

}



function ProductList({ products }: props ){
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList;