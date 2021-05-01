import {ShopContainer} from './shop.styles';

import CollectionsList from '../../components/collections-list/collections-list.component';

const ShopPage = ({cartItems, handleClick}) => {
    return (
        <ShopContainer>
            <CollectionsList cartItems={cartItems} handleClick={handleClick} />
        </ShopContainer>
    )
}

export default ShopPage;