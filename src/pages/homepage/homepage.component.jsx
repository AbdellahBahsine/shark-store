import './homepage.styles';

import Hero from '../../components/hero/hero.component';
import ProductsList from '../../components/products-list/products-list.component';

const HomePage = () => {
    return (
        <div className="homepage">
            <Hero />
            <ProductsList />
        </div>
    )
}

export default HomePage;