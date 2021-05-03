import {ShopContainer} from './shop.styles';

import CollectionsList from '../../components/collections-list/collections-list.component';

const ShopPage = ({cartItems, handleClick, addItemToCart}) => {
    return (
        <ShopContainer>
            <CollectionsList cartItems={cartItems} handleClick={handleClick} addItemToCart={addItemToCart} />
        </ShopContainer>
    )
}

export default ShopPage;