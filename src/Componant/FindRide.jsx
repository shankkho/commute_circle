import Navbar from './Navbar';
import './Style.css'
import ridedata from './ridedata';

const FindRide = () => {

    return (
        <div>
            <Navbar />

            {/* find a ride search  */}

            <div className='bg-dark w-100 py-5  shadow-lg'>
                <div className='container'>

                    <h3 className='text-white mb-4 fw-bold d-flex align-items-center gap-2'>
                        <i className="bi bi-search text-success fs-4"></i> Find a Ride
                    </h3>
                    <div className='row g-3 align-items-end'>

                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='input-group shadow-sm rounded-3 overflow-hidden'>
                                <span className='input-group-text bg-white border-0 pe-2'>
                                    <i className="bi bi-geo-alt-fill text-muted"></i>
                                </span>
                                <input type='text' name='from' className='form-control border-0 ps-1 py-2 fs-6' placeholder='Leaving from...' />
                            </div>
                        </div>

                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='input-group shadow-sm rounded-3 overflow-hidden'>
                                <span className='input-group-text bg-white border-0 pe-2'>
                                    <i className="bi bi-pin-map-fill text-muted"></i>
                                </span>
                                <input type='text' name='goingto' className='form-control border-0 ps-1 py-2 fs-6' placeholder='Going to...' />
                            </div>
                        </div>

                        <div className='col-12 col-md-6 col-lg-2'>
                            <div className='input-group shadow-sm rounded-3 overflow-hidden'>
                                <span className='input-group-text bg-white border-0 pe-2'>
                                    <i className="bi bi-calendar3 text-muted"></i>
                                </span>
                                <input type='date' name='date' className='form-control border-0 ps-1 py-2 fs-6' />
                            </div>
                        </div>

                        <div className='col-12 col-md-6 col-lg-1'>
                            <div className='input-group shadow-sm rounded-3 overflow-hidden'>
                                <span className='input-group-text bg-white border-0 pe-2'>
                                    <i className="bi bi-clock text-muted"></i>
                                </span>
                                <input type='time' name='time' className='form-control border-0 ps-1 py-2 fs-6' />
                            </div>
                        </div>

                        <div className='col-12 col-md-6 col-lg-1'>
                            <div className='input-group shadow-sm rounded-3 overflow-hidden'>
                                <span className='input-group-text bg-white border-0 pe-2'>
                                    <i className="bi bi-people-fill text-muted"></i>
                                </span>
                                <input
                                    type='number'
                                    name='passenger'
                                    min={1}
                                    className='form-control border-0 ps-1 py-2 fs-6'
                                    placeholder='1'
                                />
                            </div>
                        </div>

                        <div className='col-12 col-lg-2'>
                            <button className='btn btn-success w-100 py-2 fw-bold text-uppercase shadow-sm border-0 rounded-3 transition-all' type='submit'>
                                Search Ride
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            {/* filters records */}

            <div className='bg-body-secondary w-100 '>
                <div className='container '>
                    <div className='row p-4'>

                        <span><b>{ridedata.length} rides found</b></span>
                        {/* records */}
                        <div>
                            {
                                ridedata.map(each =>
                                    <div>
                                        <h5>{each.name}</h5>
                                        <p>{each.age}</p>
                                    </div>
                                )
                            }
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}
export default FindRide;