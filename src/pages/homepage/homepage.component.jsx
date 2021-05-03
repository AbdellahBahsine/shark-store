import './homepage.styles';

import Hero from '../../components/hero/hero.component';
import ProductsList from '../../components/products-list/products-list.component';

const HomePage = ({cartItems, handleClick, addItemToCart}) => {
    return (
        <div className="homepage">
            <Hero />
            <ProductsList cartItems={cartItems} handleClick={handleClick} addItemToCart={addItemToCart} />
        </div>
    )
}

export default HomePage;