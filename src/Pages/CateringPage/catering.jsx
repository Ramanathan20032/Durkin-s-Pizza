import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './catering.css';

const Catering = () => {

    const features = [
        {
            icon: require('../../assets/images/cateringPage/premiumIngredient.png'),
            title: 'Premium Ingredients',
            desc: 'We use top-quality mozzarella, sauces, and hand-cut veggies in every catered order.',
        },
        {
            icon: require('../../assets/images/cateringPage/expertPizzaChefs.png'),
            title: 'Expert Pizza Chefs',
            desc: 'Decades of experience crafting handmade pizzas for every type of event.',
        },
        {
            icon: require('../../assets/images/cateringPage/hotFreshDelivery.png'),
            title: 'Hot, Fresh Delivery',
            desc: 'Right out of the oven to your location – always fast, never cold.',
        },
        {
            icon: require('../../assets/images/cateringPage/easyOrderingSupport.png'),
            title: 'Easy Ordering Support',
            desc: 'Our team helps you plan portions, toppings, and timing to perfection.',
        },
    ];


    return (
        <>
            <div className="catering-page">
                <Header />

                <div className="catering-banner">
                    <div className="catering-banner-content container-fluid">
                        <p className="catering-banner-title">Place your catering order today!</p>
                        <h2 className="catering-banner-logo">Durkin’s Pizza</h2>
                        <p className="catering-banner-desc">Fast, hot & made with love – Delivered fresh to your event!</p>

                        <div className="catering-contact-links">
                            <p className="catering-contact-link d-flex align-items-center"><i class="fa-solid fa-phone me-1 me-sm-2"></i> <span>(972) 727-8400</span></p>
                            <p className="catering-contact-link d-flex align-items-center"><i class="fa-solid fa-phone me-1 me-sm-2"></i> <span>(972) 294-5979</span></p>
                            <p className="catering-contact-link d-flex align-items-center"><i class="fa-solid fa-envelope me-1 me-sm-2"></i> <span>inquiry@durkinspizza.com</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ! Catering About Section */}
            <div className="catering-about-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 mb-5 mb-lg-0">

                            <h2 className="catering-about-title">Why Choose Durkin's Pizza For Your Catering?</h2>
                            <div className="row">
                                {features.map((feature, index) => (
                                    <div key={index} className="col-12 col-md-6 mb-4">
                                        <div className="catering-about-feature">
                                            <div className="catering-about-feature-icon">
                                                <img src={feature.icon} alt={feature.title} />
                                            </div>
                                            <p className='catering-about-feature-title'>{feature.title}</p>
                                            <p className='catering-about-feature-desc'>{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="catering-about-image">
                                <img src={require("../../assets/images/cateringPage/catering-about-1.png")} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ! Catering Form Section */}
            <div className="catering-form-section">
                <img src={require("../../assets/images/cateringPage/flakes.png")} alt="" className='catering-flakes catering-flakes-1' />
                <img src={require("../../assets/images/cateringPage/flakes.png")} alt="" className='catering-flakes catering-flakes-2' />
                <div className="container">
                    <div className="catering-form-container">
                        {/* floating Pizza */}
                        <img src={require("../../assets/images/cateringPage/pizza-slice.png")} alt="" className='catering-pizza-slice'/>
                        <div className="catering-form-header-container">
                            <h2 className="catering-form-title">Catering Order Form</h2>
                            <p className="catering-form-desc">We're here to help you plan the perfect event. Fill out the form below and we'll get back to you as soon as possible.</p>
                        </div>
                        <div className="catering-form-body-container">
                            <form className="row g-3 catering-order-form" autoComplete="off">
                                {/* First Name */}
                                <div className="col-12 col-md-6">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" required />
                                </div>
                                {/* Last Name */}
                                <div className="col-12 col-md-6">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" required />
                                </div>
                                {/* Phone Number */}
                                <div className="col-12 col-md-6">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" id="phone" placeholder="" required />
                                </div>
                                {/* Email Address */}
                                <div className="col-12 col-md-6">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" placeholder="" required />
                                </div>
                                {/* Country */}
                                <div className="col-12 col-md-6">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" id="country" required>
                                        <option value="">Select Country</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Mexico">Mexico</option>
                                    </select>
                                </div>
                                {/* Address Line 1 */}
                                <div className="col-12 col-md-6">
                                    <label htmlFor="address1" className="form-label">Address Line 1</label>
                                    <input type="text" className="form-control" id="address1" placeholder="" required />
                                </div>
                                {/* City */}
                                <div className="col-12 col-md-4">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" id="city" placeholder="" required />
                                </div>
                                {/* State */}
                                <div className="col-12 col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input type="text" className="form-control" id="state" placeholder="" required />
                                </div>
                                {/* ZIP Code */}
                                <div className="col-12 col-md-4">
                                    <label htmlFor="zip" className="form-label">ZIP Code</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required />
                                </div>
                                {/* Catering Order Details */}
                                <div className="col-12">
                                    <label htmlFor="details" className="form-label">Catering Order Details</label>
                                    <textarea className="form-control" id="details" rows="5" style={{ resize: 'none' }} placeholder="Let us know your order, event details, and delivery time..." required></textarea>
                                </div>
                                {/* Submit Button */}
                                <div className="col-12 d-flex justify-content-center">
                                    <button type="submit" className="catering-order-btn">SUBMIT CATERING ORDER</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Catering;
