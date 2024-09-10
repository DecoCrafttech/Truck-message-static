import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    const publicUrl = process.env.PUBLIC_URL + '/';
    
    return (
        <>
            <div>
                <header className="ltn__header-5 ltn__header-transparent--- gradient-color-4---">
                    <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="ltn__top-bar-menu text-start  mailtext">
                                        <ul>
                                            <li className='fs-5 my-2 '>
                                                <a className=' mailtext' href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                                    <i className="icon-mail " /> info@truckmessage.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
                        <div className="container">
                            <div className="row">

                                <div className="col">
                                    <div className="site-logo-wrap mb-0">
                                        <div className="site-logo go-top">
                                            <Link to="/"><img src={publicUrl + "assets/img/truckmessage.png"} alt="truck message Logo - All in one truck solutions" /></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col header-menu-column d-none d-xl-block">
                                    <div className="header-menu">
                                        <nav>
                                            <div className="ltn__main-menu go-top">
                                                <ul>
                                                    <li><Link to="/">Home</Link></li> 
                                                    <li><Link to="/about">About</Link></li>
                                                    <li><Link to="/blog">Blog</Link></li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className='ltn__header-options ltn__header-options-2 mb-sm-20 justify-content-end align-items-center mb-0'>
                                        
                                                <div className="ltn__drop-menu user-menu">
                                                    <ul>
                                                        <li>
                                                            <Link to={process.env.REACT_APP_DYNAMIC_URI} title="Login">
                                                                <i className="far fa-sign-in-alt" />
                                                                <span className="tooltip">Login</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to={process.env.REACT_APP_DYNAMIC_URI} title="Sign Up">
                                                                <i className="fas fa-user-plus" />
                                                                <span className="tooltip">Sign Up</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div> 
                                                
                                        <div className="dropdown mobile-menu-toggle dropdown d-xl-none">
                                            <button type="button" className="btn ltn__utilize-toggle p-0 shadow" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa-solid fa-bars p-0" />
                                            </button>
                                            <ul className="dropdown-menu end-0 dropdown-menu-lg-end">
                                                <li className='mt-0'><Link to="/" className="dropdown-item">Home</Link></li> 
                                                <li className='mt-0'><Link to="/about" className="dropdown-item">About</Link></li>
                                                <li className='mt-0'><Link to="/" className="dropdown-item">Blog</Link></li> 
                                                <li className='mt-0'><Link to="/contact" className="dropdown-item">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
                    <div className="ltn__utilize-menu-inner ltn__scrollbar">
                        <div className="ltn__utilize-menu-head">
                            <div className="site-logo">
                                <Link to="/"><img src={publicUrl + "assets/img/logo.png"} alt="Logo" /></Link>
                            </div>
                            <button className="ltn__utilize-close">×</button>
                        </div>
                        <div className="ltn__utilize-menu">
                            <ul>
                                <li><Link to="/">Home</Link></li> 
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ); 
}

export default Navbar;
