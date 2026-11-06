import './Style.css'
import navlogo from '../assets/navlogo.png';

const Navbar = () =>{

    return(
        <div className='container border-0'>
             <nav className="navbar navbar-expand-lg bg-white ">
                    <div className="container-fluid px-3">
            
                      {/*  Logo */}
                      <a
                        className="navbar-brand d-flex align-items-center"
                        href="/">
                        <img
                          src={navlogo}
                          alt="Commute Circle"
                          width="40"
                          height="40"
                          className="me-2" />
                        <span className="fw-bold">Commute Circle</span>
                      </a>
            
                      {/* Hamburger Button */}
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarMenu"
                        aria-controls="navbarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
            
                      { /* Navigation Links */}
                      <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav ms-auto align-items-lg-center">
            
                          <li className="nav-item">
                            <a className="nav-link active" href="/">
                              Home
                            </a>
                          </li>
            
                          <li className="nav-item">
                            <a className="nav-link" href="/findRide">
                              Find a Ride
                            </a>
                          </li>
            
                          <li className="nav-item">
                            <a className="nav-link" href="/Offerride">
                              Offer a Ride
                            </a>
                          </li>
            
                          <li className="nav-item">
                            <a className="nav-link" href="/aboutus">
                              About Us
                            </a>
                          </li>
            
                          { /*  ********************  Dropdown */}
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              More
                            </a>
            
                            <ul className="dropdown-menu dropdown-menu-lg-end">
                              <li>
                                <a className="dropdown-item" href="/contactus">
                                  Contact Us
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/Helpsupport">
                                  Help & Support
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/profile">
                                  My Profile
                                </a>
                              </li>
                            </ul>
                          </li>
            
                          <li className="nav-item ms-lg-2">
                            <a className="btn btn-primary" href="/login">
                              Login / Sign Up
                            </a>
                          </li>
            
                        </ul>
                      </div>
            
                    </div>
                  </nav>
        </div>
    );
} 
export default  Navbar;