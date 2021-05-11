import SHOP_DATA from './shop_data';

import Collection from '../collection/collection.component';

const CollectionsList = ({cartItems, handleClick, addItemToCart}) => {
    return (
        <div className="collections-list">
            {SHOP_DATA.map(({id, ...otherProps}) => <Collection key={id} cartItems={cartItems} handleClick={handleClick} addItemToCart={addItemToCart} {...otherProps} />)}
        </div>
    )
}

export default CollectionsList;