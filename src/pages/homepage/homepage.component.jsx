import './homepage.styles';

import Hero from '../../components/hero/hero.component';
import TrendingList from '../../components/trending-list/trending-list.component';

const HomePage = () => {
    return (
        <div className="homepage">
            <Hero />
            <TrendingList />
        </div>
    )
}

export default HomePage;