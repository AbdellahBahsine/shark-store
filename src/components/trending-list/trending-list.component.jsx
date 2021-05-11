import {TrendingListContainer, Title} from './trending-list.styles';

import Product from '../trending/trending.component';
import TRENDING_DATA from './trending_data';

const ProductsList = () => {
    return (
        <TrendingListContainer>
            <Title>Trending now</Title>
            {TRENDING_DATA.map(({items}) => {
                return (<Product items={items} />)
            })}
        </TrendingListContainer>
    )
}

export default ProductsList;