import React, { useState } from 'react';
import './Home.css';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

import pizzaBg from '../../assets/images/homePage/newsLetter/newLetter-bg.png';


const homePageAboutContent = [
    {
        title: 'Made-to-Order Pizzas',
        description: 'Your pizza, your way. Choose from hand-tossed classics to gluten-free & cauliflower crusts.',
        image: require('../../assets/images/homePage/about/about-pizza.png')
    },
    {
        title: 'Specialty Pizzas',
        description: 'From BBQ Chicken to Kitchen Sink, our signature creations fit every craving.',
        image: require('../../assets/images/homePage/about/about-pizza.png')
    },
    {
        title: 'Indian-Inspired Pizzas',
        description: 'East meets West. Paneer Tikka and Chicken Tikka on a cheesy crust.',
        image: require('../../assets/images/homePage/about/about-pizza.png')
    },
    {
        title: 'Fresh Toppings Galore',
        description: 'Load it up—over 20 fresh and premium toppings to customize your pie.',
        image: require('../../assets/images/homePage/about/about-pizza.png')
    }
]

const pizzaMenuData = [
    {
        title: 'Made-To-Order Pizzas',
        image: require('../../assets/images/homePage/pizzaMenu/madeToOrderPizzas.png')
    },
    {
        title: 'Specialty Pizzas',
        image: require('../../assets/images/homePage/pizzaMenu/specialtyPizzas.png')
    },
    {
        title: 'Baked Chicken Wings',
        image: require('../../assets/images/homePage/pizzaMenu/bakedChickenWings.png')
    },
    {
        title: 'Sandwiches & Calzones',
        image: require('../../assets/images/homePage/pizzaMenu/sandwichesCalzones.png')
    },
    {
        title: 'Pasta & Bread',
        image: require('../../assets/images/homePage/pizzaMenu/pastaBread.png')
    },
    {
        title: 'Fresh Salads',
        image: require('../../assets/images/homePage/pizzaMenu/freshSalads.png')
    },
    {
        title: 'Sweet Desserts',
        image: require('../../assets/images/homePage/pizzaMenu/sweetDesserts.png')
    },
    {
        title: 'Beverages',
        image: require('../../assets/images/homePage/pizzaMenu/beverages.png')
    }
]

const reviews = [
    {
        stars: 5,
        text: "Botanica rice crackers are a staple in my pantry. They are a healthier alternative to traditional crackers and chips, but still satisfy my craving for something spicy and crunchy. Chilli garlic flavor is my personal favorite – it's so delicious!",
        user: "Jennifer",
        location: "From California",
        breakdown: [95, 5, 0, 0, 0],
        total: 5000
    },
    {
        stars: 5,
        text: "These crackers are perfect for my kids' lunchboxes. They love the taste and I love that they're baked, not fried. The cheese flavor is a big hit at our house!",
        user: "Michael",
        location: "From Texas",
        breakdown: [80, 15, 5, 0, 0],
        total: 2000
    },
    {
        stars: 4,
        text: "I enjoy these as a light snack during work. They're crunchy, flavorful, and not too salty. The packaging keeps them fresh for a long time.",
        user: "Priya",
        location: "From New York",
        breakdown: [60, 30, 10, 0, 0],
        total: 1200
    }
];

const starLabels = [
    '★★★★★',
    '★★★★☆',
    '★★★☆☆',
    '★★☆☆☆',
    '★☆☆☆☆'
];

const galleryImages = [
    require('../../assets/images/homePage/gallery/image-1.png'),
    require('../../assets/images/homePage/gallery/image-2.png'),
    require('../../assets/images/homePage/gallery/image-3.png'),
    require('../../assets/images/homePage/gallery/image-4.png'),
    require('../../assets/images/homePage/gallery/image-5.png'),
];

const Home = () => {
    const [current, setCurrent] = React.useState(0);
    const review = reviews[current];

    return (
        <>
            <HomeBanner />

            {/* ! About Us Section */}
            <section className="aboutus-container">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-7 mb-5 mb-lg-0">
                            <div className="about-content">
                                <p className='about-title'>Durkin’s Signature Services</p>
                                <p className='about-description'>We’re more than just pizza—we bring the full flavor experience to your table!</p>
                                <div className="about-row row">
                                    {homePageAboutContent.map((item, index) => (
                                        <div className="col-12 col-sm-6" key={index}>
                                            <div className="about-item">
                                                <img src={item.image} alt={item.title} className="about-item-image img-fluid" />
                                                <p className="about-item-title">{item.title}</p>
                                                <p className="about-item-description">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className='about-image'>
                                <img src={require('../../assets/images/homePage/about/about-section.png')} alt="Hot Spicy Pizza" className="about-main-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ! Pizza Menu Section */}
            <section className='pizza-container'>
                {/* ! Floating Images */}
                <img src={require('../../assets/images/homePage/pizzaMenu/Floating-Images/f1.png')} alt="float1" className="floating-img float1" />
                <img src={require('../../assets/images/homePage/pizzaMenu/Floating-Images/f2.png')} alt="float2" className="floating-img float2" />
                <img src={require('../../assets/images/homePage/pizzaMenu/Floating-Images/f4.png')} alt="float3" className="floating-img float3" />
                <img src={require('../../assets/images/homePage/pizzaMenu/Floating-Images/f3.png')} alt="float4" className="floating-img float4" />
                {/* Heading */}
                <div className="section-heading">
                    <p className="pizza-title">Crispy Crust, Melty Cheese</p>
                    <p className="pizza-subtitle">Pizza Perfection In Every Bite Made Hot, Made Fresh, Made For You!</p>
                </div>
                {/* cards grid */}
                <div className="container">
                    <div className="cards-grid">
                        <div className="row">
                            {pizzaMenuData.map((item, index) => (
                                <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index}>
                                    <div className="pizza-card">
                                        <img src={item.image} alt={item.title} className="pizza-card-img" />
                                        <p className="pizza-card-title">{item.title}</p>
                                        <Link to="/menu" className="pizza-card-link">
                                            <span className='pizza-card-link-text'>Explore More</span>
                                            <span className='pizza-card-link-icon'><i class="fa-solid fa-circle-chevron-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ! Steps Section */}
            <section className='steps-container d-none d-lg-block'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="steps-content">
                            {/* section heading */}
                            <div className="section-heading">
                                <p className='section-heading-title'>SIMPLE. FAST. DELICIOUS.</p>
                                <p className='section-heading-subtitle'>Get Your Pizza in 3 Easy Steps</p>
                            </div>

                            {/* steps content */}
                            <div className="row">
                                <div className="col-3">
                                    <div className="step-item">
                                        <img src={require('../../assets/images/homePage/steps/step-1.png')} alt="step-1" />
                                        <p className='step-item-title'>Pick Your Cravings</p>
                                        <p className='step-item-description'>Dive into our loaded menu — handcrafted pizzas, crispy wings, gooey pastas, and cheesy breads waiting for you.</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="step-item">
                                        <img src={require('../../assets/images/homePage/steps/step-2.png')} alt="step-2" />
                                        <p className='step-item-title'>Build It Your Way</p>
                                        <p className='step-item-description'>Customize your order with premium toppings, crust options, and bold flavors. You're the boss of your pie!</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="step-item">
                                        <img src={require('../../assets/images/homePage/steps/step-3.png')} alt="step-2" />
                                        <p className='step-item-title'>Sit Back & Enjoy</p>
                                        <p className='step-item-description'>Order in seconds. We'll handle the heat and bring the flavor — straight to your door or ready for pickup.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* steps image */}
                        <img src={require('../../assets/images/homePage/steps/steps-image.png')} alt="steps-img" className='steps-img' />
                    </div>
                </div>
            </section>

            {/* ! Steps mobile Section */}
            <section className='steps-mobile-container d-block d-lg-none'>
                <div className="container">
                    <div className="row">
                        <div className="steps-mobile-content">
                            {/* section heading */}
                            <div className="section-mobile-heading">
                                <p className='section-mobile-heading-title'>SIMPLE. FAST. DELICIOUS.</p>
                                <p className='section-mobile-heading-subtitle'>Get Your Pizza in 3 Easy Steps</p>
                            </div>

                            {/* steps content */}
                            <div className="row">
                                <div className="step-mobile-item">
                                    <img src={require('../../assets/images/homePage/steps/step-1.png')} alt="step-1" />
                                    <p className='step-mobile-item-title'>Pick Your Cravings</p>
                                    <p className='step-mobile-item-description'>Dive into our loaded menu — handcrafted pizzas, crispy wings, gooey pastas, and cheesy breads waiting for you.</p>
                                </div>
                                <div className="step-mobile-item">
                                    <img src={require('../../assets/images/homePage/steps/step-2.png')} alt="step-2" />
                                    <p className='step-mobile-item-title'>Build It Your Way</p>
                                    <p className='step-mobile-item-description'>Customize your order with premium toppings, crust options, and bold flavors. You're the boss of your pie!</p>
                                </div>
                                <div className="step-mobile-item">
                                    <img src={require('../../assets/images/homePage/steps/step-3.png')} alt="step-2" />
                                    <p className='step-mobile-item-title'>Sit Back & Enjoy</p>
                                    <p className='step-mobile-item-description'>Order in seconds. We'll handle the heat and bring the flavor — straight to your door or ready for pickup.</p>
                                </div>
                                <img src={require('../../assets/images/homePage/steps/steps-image.png')} alt="steps-mobile-img" className='steps-mobile-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ! Review Section */}
            <section className="review-section-container">
                <section className="review-section">
                    <div className="review-accent"></div>
                    <div className="review-card">
                        <div className="review-left">
                            <div className="review-score">{review.stars.toFixed(1)}</div>
                            <div className="review-score-label">Based on {review.total}+ reviews</div>
                            <div className="review-breakdown">
                                {review.breakdown.map((percent, idx) => (
                                    <div className="review-stars-row" key={idx}>
                                        <span className="review-star">{starLabels[idx]}</span>
                                        <div className="review-bar">
                                            <div
                                                className="review-bar-fill"
                                                style={{
                                                    width: percent + '%',
                                                    background: idx === 5 - review.stars ? '#ef3e36' : '#f3b3b0'
                                                }}
                                            ></div>
                                        </div>
                                        <span className="review-percent">{percent}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="review-divider"></div>
                        <div className="review-right">
                            <div className="review-stars">{'★'.repeat(review.stars) + '☆'.repeat(5 - review.stars)}</div>
                            <div className="review-text">{review.text}</div>
                            <div className="review-user">
                                <span className="review-user-name">{review.user}</span> - <span className="review-user-location">{review.location}</span>
                            </div>
                            <div className="review-pagination">
                                {reviews.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={"review-dot" + (current === idx ? " active" : "")}
                                        onClick={() => setCurrent(idx)}
                                        style={{ cursor: 'pointer' }}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* ! Gallery Section */}
            <section className="gallery-section">
                <div className="gallery-container">
                    <div className="gallery-row">
                        {galleryImages.map((img, idx) => (
                            <div className="gallery-item" key={idx}>
                                <img src={img} alt={`gallery-image-${idx + 1}`} className='gallery-image' />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ! NewsLetter Section */}
            <div className="newsletter-section-container">
                <section className="newsletter-section" style={{ backgroundImage: `url(${pizzaBg})` }} >
                    <div className="newLetter-content">
                        <p className="newLetter-label">NEWS LETTER</p>
                        <p className="newLetter-title">Get Fresh Pizza News!</p>
                        <p className="newLetter-desc">
                            Be the first to know about new toppings, hot deals, and mouthwatering offers.
                            Join our pizza-loving community—delivered fresh to your inbox.
                        </p>
                        <form className="newsletter-form">
                            <input className="newsletter-input" type="email" placeholder="Type here" />
                            <button className="newsletter-btn" type="submit">Subscribe</button>
                        </form>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}

export default Home;