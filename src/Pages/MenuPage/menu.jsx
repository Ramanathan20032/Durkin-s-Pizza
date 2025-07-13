import './menu.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import menuData from '../../utils/menuData.json';
import { useState, useRef, useEffect } from 'react';

import menupattern1 from '../../assets/images/MenuPage/menu-pattern-1.png';
import menupattern2 from '../../assets/images/MenuPage/menu-pattern-2.png';

const Menu = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Get all menu categories for filter buttons
    const categories = ['All', ...menuData.menu.map(item => item['menu-category'])];

    // Filter menu data based on active filter
    const filteredMenuData = activeFilter === 'All'
        ? menuData.menu
        : menuData.menu.filter(item => item['menu-category'] === activeFilter);

    const handleFilterClick = (category) => {
        setActiveFilter(category);
    };

    const handleDropdownClick = (category) => {
        setActiveFilter(category);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown on outside click
    useEffect(() => {
        if (!isDropdownOpen) return;
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <>
            <div className="menu-page">
                <Header />
            </div>

            {/* ! Menu Title */}
            <div className="menu-header-container">
                <img src={menupattern1} alt="menu-pattern-1" className='menu-pattern menu-pattern-1' />
                <img src={menupattern2} alt="menu-pattern-2" className='menu-pattern menu-pattern-2' />
                <div className="menu-header-content">
                    <h2 className="menu-header-title">Fresh • Delicious • Delivered</h2>
                    <p className="menu-header-description">🌟 From our wood-fired ovens to your table, every bite tells a story of tradition, quality ingredients, and culinary passion. Experience the perfect blend of classic Italian flavors and modern innovation. 🌟</p>
                </div>
            </div>


            {/* ! Menu Section */}
            <div className="menu-wrapper">

                {/* title */}
                <h2 className="our-menu">Our Menu</h2>

                {/* ! Desktop Menu Filter */}
                <div className="menu-filter filter-list">
                    <div className="menu-filter-item">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`menu-filter-button ${activeFilter === category ? 'active' : ''}`}
                                onClick={() => handleFilterClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ! Mobile Menu Filter */}
                <div className="dropdown-wrapper">
                    <div className="filter-section" ref={dropdownRef}>
                        <div className="custom-dropdown-header" onClick={toggleDropdown}>
                            {activeFilter}
                            <div className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}></div>
                        </div>
                        {isDropdownOpen && (
                            <ul className="custom-dropdown-list">
                                {categories.map((category, index) => (
                                    <li
                                        key={index}
                                        className={`dropdown-item ${activeFilter === category ? 'selected' : ''}`}
                                        onClick={() => handleDropdownClick(category)}
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* ! Menu Content */}
                <div className="menu-content">
                    {filteredMenuData.map((menuSection, sectionIndex) => (
                        <div key={sectionIndex} className="menu-card row justify-content-center">
                            <div className="col-12 col-lg-8">
                                <div className="menu-card-heading">
                                    <p className="menu-category">{menuSection['menu-category']}</p>
                                    <p className="menu-category-desc">{menuSection['menu-category-desc']}</p>
                                </div>
                            </div>
                            <div className="menu-card-image">
                                <img src={menuSection['menu-image']} alt={menuSection['menu-category']} />
                            </div>
                            <div className="menu-card-items row">
                                {menuSection['menu-items'].map((item, itemIndex) => (
                                    <div key={itemIndex} className="col-12 col-lg-6 menu-item-card">
                                        <div className="menu-item d-flex justify-content-between align-items-center">
                                            <div className="menu-item-name">{item['menu-item-name']}</div>
                                            <div className="menu-item-price">{item['menu-item-price']}</div>
                                        </div>
                                        <div className="menu-item-desc">{item['menu-item-desc']}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Menu;
