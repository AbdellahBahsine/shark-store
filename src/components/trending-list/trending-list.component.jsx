import {TrendingListContainer, Title} from './trending-list.styles';

import Trending from '../trending/trending.component';
import TRENDING_DATA from './trending_data';

const TrendingList = () => {
    return (
        <TrendingListContainer>
            <Title>Trending now</Title>
            {TRENDING_DATA.map(({id, items}) => {
                return (<Trending key={id} items={items} />)
            })}
        </TrendingListContainer>
    )
}

export default TrendingList;