import { product } from "./types";

export function checkIsSelected(selectedProducts: product[], product: product){
    return selectedProducts.some(item => item.id === product.id);
}

export function formatPrice(Price: number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style:'currency', 
        currency: 'BRL',
        minimumFractionDigits: 2
    });
    return formatter.format(Price);
}