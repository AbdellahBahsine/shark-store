
import SHOP_DATA from './shop_data';

import Collection from '../collection/collection.component';

const CollectionsList = ({cartItems, handleClick}) => {
    return (
        <div className="collections-list">
            {SHOP_DATA.map(({id, ...otherProps}) => <Collection key={id} cartItems={cartItems} handleClick={handleClick} {...otherProps} />)}
        </div>
    )
}

export default CollectionsList;