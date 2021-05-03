import {ProductsListContainer, Title} from './products-list.styles';

import Product from '../product/product.component';

const ProductsList = ({cartItems, handleClick, addItemToCart}) => {
    return (
        <ProductsListContainer>
            <Title>Trending now</Title>
            <Product cartItems={cartItems} handleClick={handleClick} addItemToCart={addItemToCart} />
        </ProductsListContainer>
    )
}

export default ProductsList;