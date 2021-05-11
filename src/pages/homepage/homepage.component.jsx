import './homepage.styles';

import Hero from '../../components/hero/hero.component';
import ProductsList from '../../components/trending-list/trending-list.component';

const HomePage = () => {
    return (
        <div className="homepage">
            <Hero />
            <ProductsList />
        </div>
    )
}

export default HomePage;