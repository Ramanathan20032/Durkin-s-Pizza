import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container py-5">
                
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3 footer-about-section mb-5 mb-lg-4 order-1 order-sm-1 order-lg-1">
                            <Link to="/"><img src={require('../../assets/images/Logo/Durkins-logo.png')} alt="logo" className="img-fluid footer-logo" /></Link>
                            <p>Hot, fresh, and made with love — your favorite neighborhood pizza place. Serving happiness one slice at a time.</p>
                            <div className="opening-hours">
                                <p className='opening-hours-title'><i class="fa-solid fa-clock me-2"></i> Opening Hours</p>
                                <p className='opening-time'>Mon – Sun : 11:00 AM – 10:00 PM</p>
                                <p className='opening-time'>Fri & Sat : 11:00 AM – 10:30 PM</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 footer-contact-section mb-5 mb-lg-4 order-2 order-sm-3 order-lg-2">
                            <a className='footer-contact-section-link' href="/" target='_blank' rel='noreferrer'><i class="fa-solid fa-location-dot me-2"></i> Visit Us - McKinney Location</a>
                            <p className='address'>8930 Hwy 121 Ste 594 McKinney, TX</p>
                            <a className='footer-contact-section-link' href="/" target='_blank' rel='noreferrer'><i class="fa-solid fa-phone me-2"></i> Call Us : +1 (972) 727-8400</a>
                            <a className='footer-contact-section-link' href="/" target='_blank' rel='noreferrer'><i class="fa-solid fa-envelope me-2"></i> Email :  contact@durkinspizza.com</a>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 footer-contact-section mb-5 mb-lg-4 order-3 order-sm-4 order-lg-3">
                            <a className='footer-contact-section-link' href="/" target='_blank' rel='noreferrer'><i class="fa-solid fa-location-dot me-2"></i> Visit Us - Frisco Location </a>
                            <p className='address'>4350 N. Main Street, Suite 140  Frisco, Texas 75033</p>
                            <a className='footer-contact-section-link' href="/" target='_blank' rel='noreferrer'><i class="fa-solid fa-phone me-2"></i>  Call Us : +1 (972) 294-5979</a>
                            <a className='footer-contact-section-link' href="/" target='_blank' rel='noreferrer'><i class="fa-solid fa-envelope me-2"></i> Email : contact@durkinspizza.com</a>
                            <div className='social-media-container d-block d-sm-none'>
                                <p className="social-media-title"><i class="fa-solid fa-mobile-screen-button me-2"></i> Follow Us</p>
                                <div className="footer-social-icons">
                                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 footer-links-section mb-4 mb-lg-4 order-4 order-sm-2 order-lg-4">
                            <p className="footer-links-section-title">🔗 Quick Links</p>
                            <li><Link className='footer-links-section-link' to="/">Home</Link></li>
                            <li><Link className='footer-links-section-link' to="/menu">Menu</Link></li>
                            <li><Link className='footer-links-section-link' to="/catering">Catering</Link></li>
                            <li><Link className='footer-links-section-link' to="/contact">Contact</Link></li>
                            <div className='social-media-container d-none d-sm-block mt-3'>
                                <p className="social-media-title"><i class="fa-solid fa-mobile-screen-button me-2"></i> Follow Us</p>
                                <div className="footer-social-icons">
                                    <a href="#" target='_blank' rel='noreferrer'><i class="fa-brands fa-facebook"></i></a>
                                    <a href="#" target='_blank' rel='noreferrer'><i class="fa-brands fa-instagram"></i></a>
                                    <a href="#" target='_blank' rel='noreferrer'><i class="fa-brands fa-twitter"></i></a>
                                    <a href="#" target='_blank' rel='noreferrer'><i class="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-line-seperation">
                    <img src={require('../../assets/images/Footer/line-seperation.png')} alt="line-seperation" className="img-fluid" />
                </div>

                <div className="footer-copyright-section d-block d-sm-none">
                    <p>2025 © Durkin’s Pizza  All Right Reserved.  Powered by </p>
                    <Link to="https://maghil.com/" target='_blank' rel='noreferrer'><img src={require('../../assets/images/Logo/maghil-logo.png')} alt="logo" className='maghil-logo' /></Link>
                </div>

                <div className="footer-copyright-section d-none d-sm-block">
                    <p>2025 © Durkin’s Pizza  All Right Reserved.  Powered by <Link to="https://maghil.com/" target='_blank' rel='noreferrer'><img src={require('../../assets/images/Logo/maghil-logo.png')} alt="logo" className='maghil-desktop-logo ms-2' /></Link></p>
                </div>

                <div className='footer-up text-center'>
                    <a
                        href="#"
                        className='footer-up-link'
                        onClick={e => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        <i className="fa-solid fa-angle-up"></i>
                    </a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
