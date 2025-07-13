import './HomeBanner.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <section className="banner-section">
            <Header />

            {/* ! Floating Banner Pattern */}
            <div className="banner-image-container">
                <img src={require('../../assets/images/Banner/home-banner-pattern/full-pizza-pattern.png')} alt="Pizza" className="banner-pattern banner-pattern-1 img-fluid" />
                <img src={require('../../assets/images/Banner/home-banner-pattern/pizza-pattern.png')} alt="Pizza" className="banner-pattern banner-pattern-2 img-fluid" />
                <img src={require('../../assets/images/Banner/home-banner-pattern/green-chilli-pattern.png')} alt="Pizza" className="banner-pattern banner-pattern-3 img-fluid" />
                <img src={require('../../assets/images/Banner/home-banner-pattern/tomato-pattern.png')} alt="Pizza" className="banner-pattern banner-pattern-4 img-fluid" />
                <img src={require('../../assets/images/Banner/home-banner-pattern/leaf-pattern.png')} alt="Pizza" className="banner-pattern banner-pattern-5 img-fluid" />
                <img src={require('../../assets/images/Banner/home-banner-pattern/full-pizza-pattern.png')} alt="Pizza" className="banner-pattern banner-pattern-6 img-fluid" />
                <img src={require('../../assets/images/Banner/home-banner-pattern/pizza-pattern.png')} alt="Pizza" className="banner-pattern banner-pattern-7 img-fluid" />
                <img src={require('../../assets/images/Banner/home-banner-pattern/mushroom-pattern.png')} alt="Pizza" className="banner-pattern banner-pattern-8 img-fluid" />
            </div>

            <img
                src={require('../../assets/images/Banner/pizza-large.png')}
                alt="Pizza"
                className="pizza-image img-fluid"
            />
            <div className="banner-container">
                <div className="banner-content">
                    <p className="banner-title"> Crafted Fresh. Served Loud. Loved Always.</p>
                    <p className="banner-description">Gather the crew. Crank the tunes. We’re firing up real-deal pizzas with bold flavors and zero compromise.</p>
                </div>
                <div className="banner-button">
                    <Link to="/menu">View Our Menu</Link>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;