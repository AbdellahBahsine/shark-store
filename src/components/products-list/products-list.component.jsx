import {ProductsListContainer, Title} from './products-list.styles';

import Product from '../product/product.component';
import TRENDING_DATA from './trending_data';

const ProductsList = ({cartItems, handleClick, addItemToCart}) => {
    return (
        <ProductsListContainer>
            <Title>Trending now</Title>
            {TRENDING_DATA.map(({items}) => {
                return (<Product cartItems={cartItems} handleClick={handleClick} addItemToCart={addItemToCart} items={items} />)
            })}
        </ProductsListContainer>
    )
}

export default ProductsList;