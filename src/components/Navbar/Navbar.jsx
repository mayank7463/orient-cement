import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTimes, faChevronRight, faChevronLeft, faBars, faCloudDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const openLevel = (event) => {
        const $openLevel = event.currentTarget;
        const $navLevel = $openLevel.nextSibling;
        $navLevel.classList.add('isOpen');
    };

    const closeLevel = (event) => {
        const $closeLevel = event.currentTarget;
        const $navLevel = $closeLevel.closest('.js-pushNavLevel');
        $navLevel.classList.remove('isOpen');
    };

    const closePushNav = () => {
        setIsOpen(false);
        document.body.classList.remove('pushNavIsOpen');
    };

    const handleMenuItemClick = () => {
        closePushNav();
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navnav ${isScrolled ? 'scrolled' : ''}`}>
                <div className="wrapper">
                    <Link to={"/"} className="logo">
                        <img src="./Navbar/orient-logo.png" alt="Logo" />
                    </Link>
                    <div className="burger js-menuToggle" onClick={toggleNav}>
                        <FontAwesomeIcon icon={faBars} size="2x" color='black' />
                    </div>
                </div>
                <div className="nav-background" />
                <ul className={`pushNav js-topPushNav ${isOpen ? 'isOpen' : ''}`}>
                    <li className="closeLevel js-closeLevelTop hdg" onClick={closePushNav}>
                        <FontAwesomeIcon icon={faTimes} /> Close
                    </li>
                    <li>
                        <Link to="/" onClick={handleMenuItemClick}>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                    </li>
                   
                    <li>
                        <Link to="/about-us" onClick={handleMenuItemClick}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/parentage" onClick={handleMenuItemClick}>Parentage</Link>
                    </li>
                    <li>
                        <Link to="/performance" onClick={handleMenuItemClick}>Measuring Our Performance</Link>
                    </li>
                    <li>
                        <Link to="/value-creation" onClick={handleMenuItemClick}>Value Creation Model</Link>
                    </li>
                    <li>
                        <Link to="/chairman-messages" onClick={handleMenuItemClick}>Chairman’s Message</Link>
                    </li>
                    <li>
                        <Link to="/md-messages" onClick={handleMenuItemClick}>Managing Director’s Message</Link>
                    </li>
                    <li>
                        <Link to="/bod" onClick={handleMenuItemClick}>Our Board of Directors</Link>
                    </li>
                    <li>
                        <Link to="/strong-roots" onClick={handleMenuItemClick}>What is so Unique About Strong Roots?</Link>
                    </li>
                    <li>
                        <Link to="/our-brands" onClick={handleMenuItemClick}>Our Brands are More than What Meets the Eye</Link>
                    </li>
                    <li>
                        <Link to="/collective-strength" onClick={handleMenuItemClick}>Harnessing Collective Strengths to Soar Higher</Link>
                    </li>
                    <li>
                        <Link to="/sustainable" onClick={handleMenuItemClick}>Strong Roots are Critical to Build a Sustainable Foundation</Link>
                    </li>
                    <li>
                        <Link to="/sdgs" onClick={handleMenuItemClick}>Sustainable Development Goals (SDGs)</Link>
                    </li>
                    <li>
                        <Link to="/community-development" onClick={handleMenuItemClick}>Reaching New Heights through Inclusive Community Development</Link>
                    </li>
                    <li>
                        <Link to="/awards" onClick={handleMenuItemClick}>Awards and Accolades</Link>
                    </li>
                    <li>
                        <Link to=".\pdf\Orient Cement CI 24.pdf" target='_blank' onClick={handleMenuItemClick}>Corporate Information</Link>
                    </li>
                    <hr />
                    <li>
                        <div className="openLevel js-openLevel font-medium text-[#433f3f]" onClick={openLevel}>
                            Statutory Reports <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                        <ul className="pushNav pushNav_level js-pushNavLevel">
                            <li className="closeLevel js-closeLevel hdg" onClick={closeLevel}>
                                <FontAwesomeIcon icon={faChevronLeft} /> Go Back
                            </li>
                            <li>
                                <Link to="./pdf/Orient Cement Notice 24.pdf" target='_blank' onClick={handleMenuItemClick}>
                                     Notice
                                </Link>
                            </li>
                            <li>
                                <Link to="./pdf/Orient Cement BR 24.pdf" target='_blank' onClick={handleMenuItemClick}>
                                     Board’s Report
                                </Link>
                            </li>
                            <li>
                                <Link to="./pdf/Orient Cement MDA 24.pdf" target='_blank' onClick={handleMenuItemClick}>
                                     Management Discussion and Analysis
                                </Link>
                            </li>
                            <li>
                                <Link to="./pdf/Orient Cement CG 24.pdf" target='_blank' onClick={handleMenuItemClick}>
                                      Corporate Governance Report
                                </Link>
                            </li>
                            <li>
                                <Link to="./pdf/Orient Cement BRSR 24.pdf" target='_blank' onClick={handleMenuItemClick}>
                                      Business Responsibility and Sustainability Report
                                </Link>
                            </li>
                            <li>
                                <Link to="./pdf/Orient Cement IAS 24.pdf" target='_blank' onClick={handleMenuItemClick}>
                                       Independent Assurance Statement
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className="openLevel js-openLevel font-medium text-[#433f3f]" onClick={openLevel}>
                            Financial Statements <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                        <ul className="pushNav pushNav_level js-pushNavLevel">
                            <li className="closeLevel js-closeLevel hdg" onClick={closeLevel}>
                                <FontAwesomeIcon icon={faChevronLeft} /> Go Back
                            </li>
                            <li>
                                <Link to="./pdf/Orient Cement IAR 24.pdf" target='_blank' onClick={handleMenuItemClick}>
                                    Independent Auditor’s Report
                                </Link>
                            </li>
                            <li>
                                <Link to="./pdf/Orient Cement BS 24.pdf" target='_blank' onClick={handleMenuItemClick}>
                                    Balance Sheet
                                </Link>
                            </li>
                            <li>
                                <Link to="./pdf/Orient Cement PL 24.pdf" target='_blank' onClick={handleMenuItemClick}>
                                     Statement of Profit and Loss
                                </Link>
                            </li>
                            <li>
                                <Link to="./pdf/Orient Cement CF 24.pdf" target='_blank' onClick={handleMenuItemClick}>
                                     Statement of Cash Flows
                                </Link>
                            </li>
                            <li>
                                <Link to="./pdf/Orient Cement CIE 24.pdf" target='_blank' onClick={handleMenuItemClick}>
                                      Statement of Changes in Equity
                                </Link>
                            </li>
                            <li>
                                <Link to="./pdf/Orient Cement Notes 24.pdf" target='_blank' onClick={handleMenuItemClick}>
                                       Notes to the Ind AS Financial Statements
                                </Link>
                            </li>
                        </ul>
                    </li>
                          {/* <li>
                                <Link to="./docs/Abans Holdings AR 2023-24 Revised-swRY0nk3-99-135.pdf" target='_blank' onClick={handleMenuItemClick}>
                                    Standalone Financial Statements with Auditor’s Report
                                </Link>
                            </li> */}
                    <li>
                        <Link className="openLevel js-openLevel font-medium " to={"https://orientcement.com/wp-content/uploads/2024/07/ORIENT_CEMENT_LIMITED_AR_2023-24.pdf"} target='_blank' >
                            Download Full Report <FontAwesomeIcon icon={faCloudDownload} />
                        </Link>
                    </li>
                </ul>
            </nav>
            <span className="screen" onClick={closePushNav}></span>
        </>
    );
};

export default Navbar;
