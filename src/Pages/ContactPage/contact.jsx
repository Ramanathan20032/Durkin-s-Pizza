import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './contact.css';

const Contact = () => {

    const locations = [
        {
            title: 'West McKinney',
            subtitle: 'Custer & SH 121',
            address: '8930 Hwy 121 Ste 594, McKinney, TX',
            addressNote: 'NE corner of Custer and 121 Next to QuikTrip',
            phone: '(972) 727-8400',
            email: 'contact@durkinspizza.com',
        },
        {
            title: 'Frisco',
            subtitle: 'Main & Legacy',
            address: '4350 N. Main Street, Suite 140, Frisco, Texas 75033',
            addressNote: '',
            phone: '(972) 294-5979',
            email: 'contact@durkinspizza.com',
        },
    ];

    const mapData = [
        {
            title: 'West McKinney',
            address: '8930 Hwy 121 Ste 594, McKinney, TX',
            mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.393964243527!2d-96.7331236848137!3d33.14831598086409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19e2e2e2e2e2%3A0x1234567890abcdef!2s8930%20State%20Hwy%20121%20STE%20594%2C%20McKinney%2C%20TX%2075070!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus',
        },
        {
            title: 'Frisco',
            address: '4350 n. Main Street, Suite 140, Frisco, TX 75033',
            mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.393964243527!2d-96.8131236848137!3d33.17831598086409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19e2e2e2e2e2%3A0xabcdef1234567890!2s4350%20Main%20St%20Suite%20140%2C%20Frisco%2C%20TX%2075033!5e0!3m2!1sen!2sus!4v1680000000001!5m2!1sen!2sus',
        },
    ];

    // Remove reasonOptions, only keep state for reason
    const [reason, setReason] = useState('');

    return (
        <>
            <div className="contact-page">
                <Header />
            </div>

            {/* ! Location Section */}
            <div className="location-section py-5">
                <div className="container">
                    <div className="section-title">
                        <h2 className="section-title-text">Our Locations</h2>
                        <p className="section-title-desc">Visit us at either of our convenient locations</p>
                    </div>
                    <div className="row">
                        {locations.map((loc, idx) => (
                            <div className="location-cards col-12 col-lg-6 mb-5" key={idx}>
                                <div className="location-card">
                                    <div className="location-name">{loc.title}</div>
                                    <div className="location-subName">{loc.subtitle}</div>
                                    <div className="location-address mb-2 text-start">
                                        <a href='' className='address-text loc-text-link'><i class="fa-solid fa-location-dot me-2"></i>{loc.address}</a>
                                    </div>
                                    {loc.addressNote && <p className='address-note'>{loc.addressNote}</p>}
                                    <div className="location-contact mb-2 text-start">
                                        <a href='' className='contact-text loc-text-link'><i class="fa-solid fa-phone me-2"></i>{loc.phone}</a>
                                    </div>
                                    <div className="location-mail mb-2 text-start">
                                        <a href='' className='mail-text loc-text-link'><i class="fa-solid fa-envelope me-2"></i>{loc.email}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ! Map Section */}
            <div className="map-section">
                {/* floating leaf */}
                <img src={require('../../assets/images/contactPage/leaf-left.png')} alt="leaf left" className="map-leaf map-leaf-left" />
                <img src={require('../../assets/images/contactPage/leaf-right.png')} alt="leaf right" className="map-leaf map-leaf-right" />
                <div className="container">
                    <div className="section-title">
                        <h2 className="section-title-text">Find Us</h2>
                        <p className="section-title-desc">Easy to locate with convenient parking</p>
                    </div>
                    <div className="row">
                        {mapData.map((map, idx) => (
                            <div className="col-12 col-lg-6 mb-5" key={idx}>
                                <div className="map-title"><h3>{map.title}</h3></div>
                                <div className="map-address"><p>{map.address}</p></div>
                                <div className="map-card">
                                    <div className="map-iframe-wrapper">
                                        <iframe
                                            src={map.mapSrc}
                                            width="100%"
                                            height="320"
                                            style={{ border: 0, borderRadius: '20px' }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title={map.title}
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ! Contact Section */}
            <div className="contact-section">
                <div className="container">
                    <div className="section-title">
                        <h2 className="section-title-text">Get In Touch</h2>
                        <p className="section-title-desc">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                    </div>

                    {/* ! Contact Form */}
                    <div className="contact-form">
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-md-4">
                                    <label className="form-label text-start w-100">First Name</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label className="form-label text-start w-100">Phone Number</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label className="form-label text-start w-100">Email Address</label>
                                    <input type="email" className="form-control" placeholder="" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label text-start w-100">Reason for Inquiry</label>
                                    <select className="form-select" value={reason || ''} onChange={e => setReason(e.target.value)} required>
                                        <option value="" disabled></option>
                                        <option value="order">Order</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="catering">Catering</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label text-start w-100">Subject</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label text-start w-100">Message</label>
                                    <textarea className="form-control" style={{ resize: 'none' }} rows="5" placeholder="Tell us more about your inquiry"></textarea>
                                </div>
                                <div className="col-12 d-flex justify-content-center mt-3">
                                    <button type="submit" className="contact-btn">SEND MESSAGE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
};

export default Contact;