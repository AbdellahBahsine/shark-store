
import SHOP_DATA from './shop_data';

import Collection from '../collection/collection.component';

const CollectionsList = () => {
    return (
        <div className="collections-list">
            {SHOP_DATA.map(({id, ...otherProps}) => <Collection key={id} {...otherProps} />)}
        </div>
    )
}

export default CollectionsList;