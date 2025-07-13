import './Header.css';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
    { name: "Home", to: "/" },
    { name: "Menu", to: "/menu" },
    { name: "Catering", to: "/catering" },
    { name: "Contact", to: "/contact" },
];

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 576) {
                setMobileNavOpen(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isActive = (to) => {
        if (to === "/") return location.pathname === "/";
        return location.pathname.startsWith(to);
    };

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-12 mx-sm-auto logo-container">
                        <Link to="/">
                            <img src={require('../../assets/images/Logo/Durkins-logo.png')} alt="logo" className='logo' />
                        </Link>
                    </div>
                </div>

                <nav className="nav-container d-none d-sm-block">
                    <ul className='nav-links'>
                        {navLinks.map((link) => (
                            <li className={`nav-link${isActive(link.to) ? ' active' : ''}`} key={link.name}>
                                <Link to={link.to} onClick={() => setMobileNavOpen(false)} className={isActive(link.to) ? 'active' : ''}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={`hamburger d-lg-none${mobileNavOpen ? ' active' : ''}`} onClick={() => setMobileNavOpen((open) => !open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`overlay${mobileNavOpen ? ' active' : ''}`} onClick={() => setMobileNavOpen(false)}></div>

                <div className={`mobile-nav${mobileNavOpen ? ' active' : ''}`}>
                    <ul className="mobile-nav-links">
                        {navLinks.map((link) => (
                            <li
                                className="mobile-nav-link"
                                key={link.name}
                                onClick={() => {
                                    setMobileNavOpen(false);
                                    navigate(link.to);
                                }}
                                style={{ cursor: 'pointer' }}
                            >
                                <span className={isActive(link.to) ? 'active' : ''}>{link.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;