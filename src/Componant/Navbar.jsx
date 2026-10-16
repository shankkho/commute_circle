import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import navlogo from '../assets/navlogo.png';
import heroimg from '../assets/car_route_illustration.png'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  return (

    <div >
      <nav className="navbar container navbar-expand-lg bg-white shadow-sm">
        <div className="container-fluid px-3">

          {/*  ******************** Logo */}
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

          {/*  ********************  Hamburger Button */}
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

          { /* ******************** Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/find-commute">
                  Find a Commute
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/offer-ride">
                  Offer a Ride
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/about">
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
                    <a className="dropdown-item" href="/contact">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/help">
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

      {/* **********Hero Section  */}

      <section className="d-flex flex-column flex-lg-row w-100 bg-body-secondary  p-md-5 ">

        {/* Hero Text */}
        <div className="w-100 w-lg-50 ps-0 ps-lg-5 px-lg-3 d-flex flex-column justify-content-center">

          <h1>
            <b>
              Your Daily Commute,
              <br className="d-none d-md-block" />
              Better Together.
            </b>
          </h1>

          <p className="text-secondary pt-2 pb-2">
            Find people travelling your way, share ride, save money,
            and make every commute more convenient.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-2">

            <button className="btn btn-success hero-btn">
              <b>Find a Commute</b>
            </button>

            <button className="btn bg-white hero-btn-offer">
              Offer a Ride
            </button>

          </div>

        </div>

        {/* Hero Image */}
        <div className=" w-100 w-lg-50 d-flex justify-content-center align-items-center  mt-lg-0">

          <img
            src={heroimg}
            alt="People sharing a commute"
            className="img-fluid  w-75"
          />

        </div>

      </section>

      {/* search form  */}


      <div className="container my-5">
        <div className="bg-white p-3 p-md-4 p-lg-5 border rounded-4 shadow">

          {/* Search Form */}
          <form >
            <div className="row g-3">
              <div className="col-12 col-md-6 col-lg-3">
                <label htmlFor="from" className="form-label fw-semibold">
                  From
                </label>
                <input
                  type="text"
                  id="from"
                  className="form-control form-control-lg"
                  placeholder="Pickup location"
                  required />
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label htmlFor="to" className="form-label fw-semibold">
                  To
                </label>
                <input
                  type="text"
                  id="to"
                  className="form-control form-control-lg"
                  placeholder="Enter destination"
                  required
                />
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label htmlFor="date" className="form-label fw-semibold">
                  Travel Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="form-control form-control-lg"
                  required
                />
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label htmlFor="time" className="form-label fw-semibold">
                  Departure Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="form-control form-control-lg"
                  required
                />
              </div>
              <div className="col-12 mt-4">
                <button
                  type="submit"
                  className="btn btn-success btn-lg w-100 fw-semibold"
                >
                  Search Rides
                </button>
              </div>

            </div>
          </form>

        </div>
      </div>

      {/* steps */}

      <section className="container py-5">
        <div className='text-center mb-4'>
          <h3><b>Your Commute in 3 Simple Steps</b></h3>
        </div>
        <div className="row g-4">

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="feature-card h-100 p-4 bg-white border rounded-4 shadow-sm">
              <div className="feature-icon icon-green mb-3">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h5 className="fw-bold mb-3">Find Your Route</h5>
              <p className="text-secondary mb-0">
                Enter your pickup point and destination to discover
                rides that match your route.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="feature-card h-100 p-4 bg-white border rounded-4 shadow-sm">
              <div className="feature-icon icon-green mb-3">
                <i className="bi bi-chat-dots"></i>
              </div>
              <h5 className="fw-bold mb-3">Connect & Coordinate</h5>
              <p className="text-secondary mb-0">
                Explore available rides and connect with drivers travelling in your direaction.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="feature-card h-100 p-4 bg-white border rounded-4 shadow-sm">
              <div className="feature-icon icon-green mb-3">
                <i className="bi bi-car-front"></i>
              </div>
              <h5 className="fw-bold mb-3">Share the Journey</h5>
              <p className="text-secondary mb-0">
                Coordinate your commute , share travel costs, and enjoy the journey together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* why */}

      <section className="container py-5">
        <div className='text-center mb-4'>
          <h3><b>Why Commute Circle</b></h3>
        </div>
        <div className="row g-4">

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="feature-card h-100 p-4 bg-white border rounded-4 shadow-sm">
              <div className="feature-icon icon-green mb-3">
                <i className="bi bi-currency-dollar"></i>
              </div>
              <h5 className="fw-bold mb-3">Save on Travel Costs</h5>
              <p className="text-secondary mb-0">
                Share fuel and commuting expenses.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="feature-card h-100 p-4 bg-white border rounded-4 shadow-sm">
              <div className="feature-icon icon-green mb-3">
                <i className="bi bi-leaf"></i>
              </div>
              <h5 className="fw-bold mb-3">Reduce Traffic</h5>
              <p className="text-secondary mb-0">
                Help reduce the number of Individual Vehicals on the road.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="feature-card h-100 p-4 bg-white border rounded-4 shadow-sm">
              <div className="feature-icon icon-green mb-3">
                <i className="bi bi-person"></i>
              </div>
              <h5 className="fw-bold mb-3">Meet Your Community</h5>
              <p className="text-secondary mb-0">
                Connect with people travelling similar routes.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="feature-card h-100 p-4 bg-white border rounded-4 shadow-sm">
              <div className="feature-icon icon-green mb-3">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h5 className="fw-bold mb-3">Convenient Commuting</h5>
              <p className="text-secondary mb-0">
                Discover suitable rides for your daily journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}


      <footer className="bg-dark text-white pt-5 pb-3">
        <div className="container">

          <div className="row g-4 pb-4">

            {/* Brand Section */}
            <div className="col-12 col-md-6 col-lg-5">
              <div className="d-flex align-items-center mb-3">
                <div className="feature-icon icon-white">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>

                <h3 className="fw-bold ms-3 mb-0">
                  Commute Circle
                </h3>
              </div>

              <p className="text-secondary mb-3">
                Better Commutes, Stronger Connections.
              </p>

              <p className="text-secondary small mb-0">
                Share your ride, save money, and make every journey
                more sustainable.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-md-6 col-lg-7">
              <h5 className="fw-bold mb-3">Quick Links</h5>

              <ul className="list-unstyled d-flex flex-wrap gap-3 gap-lg-4 mb-0">
                <li>
                  <a href="#about" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="footer-link">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#contact" className="footer-link">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="footer-link">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <hr className="border-secondary" />

          {/* Copyright */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 pt-2">
            <p className="text-secondary small mb-0 text-center">
              © {new Date().getFullYear()} Commute Circle. All rights reserved.
            </p>

            <p className="text-secondary small mb-0">
              Made for better journeys <i className="bi bi-heart-fill text-danger"></i>
            </p>
          </div>

        </div>
      </footer>

    </div>

  );
};

export default Navbar;
