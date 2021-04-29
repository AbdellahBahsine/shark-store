import {ProductsListContainer, Title} from './products-list.styles';

import Product from '../product/product.component';

const ProductsList = () => {
    return (
        <ProductsListContainer>
            <Title>Trending now <span></span><span></span></Title>
            <Product />
        </ProductsListContainer>
    )
}

export default ProductsList;