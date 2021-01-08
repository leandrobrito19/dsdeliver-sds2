import { product } from './types';

type props ={
    product: product
}

function formatPrice(Price: number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style:'currency', 
        currency: 'BRL',
        minimumFractionDigits: 2
    });
    return formatter.format(Price);
}


function ProductCard({ product }: props){
    return (
        <div className="order-card-container">
            <h3 className="order-card-title">
                {product.name }
            </h3>
            <img src={product.imageUri} className="order-card-image" alt={product.name} />
            <h3 className="order-card-price">
                 {formatPrice(product.price) }
            </h3>
            <div className="order-card-description">
                <h3>descrição</h3>
                <p>
                    {product.description}
                </p>
            </div>
        </div>
    )
}

export default ProductCard;