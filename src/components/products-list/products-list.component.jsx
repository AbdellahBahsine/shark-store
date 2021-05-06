import {ProductsListContainer, Title} from './products-list.styles';

import Product from '../product/product.component';
import TRENDING_DATA from './trending_data';

const ProductsList = () => {
    return (
        <ProductsListContainer>
            <Title>Trending now</Title>
            {TRENDING_DATA.map(({items}) => {
                return (<Product items={items} />)
            })}
        </ProductsListContainer>
    )
}

export default ProductsList;