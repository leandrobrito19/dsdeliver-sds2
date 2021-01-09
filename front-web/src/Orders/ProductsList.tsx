import { checkIsSelected } from "./Helpres";
import ProductCard from "./ProductCard";
import { product } from "./types";

type props ={
    products: product[];
    selectedProducts: product[];
    onSelectProduct: (product: product) => void;
}



function ProductList({ products, selectedProducts,  onSelectProduct }: props ){
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard 
                    key={product.id} 
                    product={product}
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectedProducts, product)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList;