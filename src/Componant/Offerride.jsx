import Navbar from './Navbar';
import './Style.css'

const Offerride = () => {
    return (
        <div className='w-100 bg-light min-vh-100'>
            <Navbar />

            <div className='container-fluid bg-dark text-white py-4 shadow-lg' >
                <div className='container text-white'>
                    <h3><b>Offer a Ride</b></h3>
                    <p className='text-secondary mb-0'>Driving to work anyway? Share your empty seats with people <br className='d-none d-md-block'></br> travelling your way and split the cost.</p>
                </div>
            </div>

            <div className='container py-4'>
                <div className='p-3 p-md-4 border rounded-4 bg-white shadow-sm'>

                    <div >
                        {/* Route*/}
                        <h5 className='fw-bold mb-3 pb-2 border-bottom'>Route</h5>
                        <div className='row g-3 mb-4'>
                            <div className='col-12 col-md-6'>
                                <label className='fw-semibold mb-1' htmlFor='pickup'>Starting point</label>
                                <div className='input-group shadow-sm border rounded-3 overflow-hidden'>
                                    <span className='input-group-text bg-white border-0 pe-2'>
                                        <i className="bi bi-geo-alt-fill text-success"></i>
                                    </span>
                                    <input type='text' id='pickup' name='Pickuplocation' className='form-control border-0 ps-1 py-2' placeholder='Enter Pickup Location' />
                                </div>
                            </div>

                            <div className='col-12 col-md-6'>
                                <label className='fw-semibold mb-1' htmlFor='destination'>Destination</label>
                                <div className='input-group shadow-sm border rounded-3 overflow-hidden'>
                                    <span className='input-group-text bg-white border-0 pe-2'>
                                        <i className="bi bi-geo-alt-fill text-danger"></i>
                                    </span>
                                    <input type='text' id='destination' name='Pickuplocation' className='form-control border-0 ps-1 py-2' placeholder='Enter Destination' />
                                </div>
                            </div>
                        </div>

                        {/* Schedule*/}
                        <h5 className='fw-bold mb-3 pb-2 border-bottom'>Schedule</h5>
                        <div className='row g-3 mb-4'>
                            <div className='col-12 col-md-6'>
                                <label className='fw-semibold mb-1' htmlFor='date'>Travel Date</label>
                                <div className='input-group shadow-sm border rounded-3 overflow-hidden'>
                                    <span className='input-group-text bg-white border-0 pe-2'>
                                        <i className="bi bi-calendar-event text-muted"></i>
                                    </span>
                                    <input type='date' id='date' name='Pickuplocation' className='form-control border-0 ps-1 py-2' placeholder='Enter Pickup Location' />
                                </div>
                            </div>

                            <div className='col-12 col-md-6'>
                                <label className='fw-semibold mb-1' htmlFor='time'>Departure Time</label>
                                <div className='input-group shadow-sm border rounded-3 overflow-hidden'>
                                    <span className='input-group-text bg-white border-0 pe-2'>
                                        <i className="bi bi-clock text-muted"></i>
                                    </span>
                                    <input type='time' id='time' name='Pickuplocation' className='form-control border-0 ps-1 py-2' placeholder='' />
                                </div>
                            </div>
                        </div>

                        {/* Seats*/}
                        <h5 className='fw-bold mb-3 pb-2 border-bottom'>Seats</h5>
                        <div className='row g-3 mb-4'>
                            <div className='col-12 col-md-6'>
                                <label className='fw-semibold mb-1' htmlFor='seats'>Available Seats</label>
                                <div className='input-group shadow-sm border rounded-3 overflow-hidden'>
                                    <span className='input-group-text bg-white border-0 pe-2'>
                                        <i className="bi bi-people-fill text-muted"></i>
                                    </span>
                                    <input type='text' id='seats' name='Pickuplocation' className='form-control border-0 ps-1 py-2' placeholder=' 3 seats' />
                                </div>
                            </div>
                        </div>

                        {/* Vehical*/}
                        <h5 className='fw-bold mb-3 pb-2 border-bottom'>Vehicle</h5>
                        <div className='row g-3 mb-4'>
                            <div className='col-12 col-md-6'>
                                <label className='fw-semibold mb-1' htmlFor='vehical'>Vehicle Type</label>
                                <div className='input-group shadow-sm border rounded-3 overflow-hidden'>
                                    <span className='input-group-text bg-white border-0 pe-2'>
                                        <i className="bi bi-car-front-fill text-muted"></i>
                                    </span>
                                    <select className='form-select border-0 ps-1 py-2' name='vahical' id="vehical">
                                        <option value="">Select a vehicle</option>
                                        <option value="car">Car</option>
                                        <option value="bike" >Bike</option>
                                        <option value="scooty">Scooty</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                         {/* Gender*/}
                        <h5 className='fw-bold mb-3 pb-2 border-bottom'>Gender</h5>
                        <div className='row g-3'>
                            <div className='col-12 col-md-6'>
                                <label className='fw-semibold mb-1' htmlFor='ridergender'>Your Gender</label>
                                <div className='input-group shadow-sm border rounded-3 overflow-hidden'>
                                    <span className='input-group-text bg-white border-0 pe-2'>
                                        <i className="bi bi-person-fill text-muted"></i>
                                    </span>
                                    <select className='form-select border-0 ps-1 py-2' name='vahical' id="ridergender">
                                        <option value="">Select a Rider gender</option>
                                        <option value="male">Male</option>
                                        <option value="female" >Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <label className='fw-semibold mb-1' htmlFor='mategender'>Ride-Mate Gender</label>
                                <div className='input-group shadow-sm border rounded-3 overflow-hidden'>
                                    <span className='input-group-text bg-white border-0 pe-2'>
                                        <i className="bi bi-people-fill text-muted"></i>
                                    </span>
                                    <select className='form-select border-0 ps-1 py-2' name='vahical' id="mategender">
                                        <option value="">Select a Ride-Mate gender</option>
                                        <option value="male">Male</option>
                                        <option value="female" >Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        {/* Button*/}
                        <div className='d-grid d-md-flex justify-content-md-end mt-4'>
                            <button type='button' className='btn btn-success btn-lg px-5'>Post Ride</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};
export default Offerride;