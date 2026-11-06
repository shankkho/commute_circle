import Navbar from './Navbar';
import './Style.css'
import { Link } from 'react-router-dom'
 
const steps = [
    { icon: 'bi-signpost-split-fill', title: 'Post or search', text: 'Drivers post their route, time and empty seats. Riders search for a ride going their way.' },
    { icon: 'bi-people-fill', title: 'Match and connect', text: 'Pick a ride that fits your schedule and preferences, then confirm your seat.' },
    { icon: 'bi-currency-rupee', title: 'Travel and split the cost', text: 'Ride together and share the fuel and toll cost instead of paying it alone.' },
];

const values = [
    { icon: 'bi-piggy-bank-fill', title: 'Save money', text: 'Sharing a ride cuts daily travel costs for everyone in the car.' },
    { icon: 'bi-shield-check', title: 'Ride with comfort', text: 'Choose who you travel with using ride-mate gender preferences.' },
    { icon: 'bi-tree-fill', title: 'Fewer cars on the road', text: 'More people per vehicle means less traffic and less pollution.' },
    { icon: 'bi-people', title: 'Meet people on your route', text: 'Your daily commute becomes a chance to travel with people nearby.' },
];

const Aboutus = () => {
    return (
        <div className='w-100 bg-light min-vh-100'>
            <Navbar />

            {/* Header */}
            <div className='container-fluid bg-dark text-white py-5 shadow-lg'>
                <div className='container'>
                    <h2 className='fw-bold'>About RideMate</h2>
                    <p className='text-secondary mb-0 fs-5'>
                        A simple way to share rides, split costs and make every commute easier.
                    </p>
                </div>
            </div>

            <div className='container py-4'>

                {/* Story */}
                <div className='p-3 p-md-4 border rounded-4 bg-white shadow-sm mb-4'>
                    <h5 className='fw-bold mb-3 pb-2 border-bottom'>Why we built RideMate</h5>
                    <div className='row g-4 align-items-center'>
                        <div className='col-12 col-md-7'>
                            <p>
                                Every day, thousands of people drive to work or college with empty seats in their car,
                                while others spend more time and money looking for a way to travel the same route.
                            </p>
                            <p className='mb-0'>
                                RideMate brings these two groups together. Drivers share their empty seats, riders
                                find an affordable trip, and everyone splits the cost.
                            </p>
                        </div>
                        <div className='col-12 col-md-5'>
                            <div className='bg-success bg-opacity-10 border border-success rounded-4 p-4 text-center'>
                                <i className='bi bi-car-front-fill text-success' style={{ fontSize: 48 }}></i>
                                <h5 className='fw-bold mt-2 mb-1'>Our mission</h5>
                                <p className='mb-0 text-secondary'>Make everyday travel affordable, friendly and shared.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How it works */}
                <div className='p-3 p-md-4 border rounded-4 bg-white shadow-sm mb-4'>
                    <h5 className='fw-bold mb-3 pb-2 border-bottom'>How it works</h5>
                    <div className='row g-3'>
                        {steps.map((s, i) => (
                            <div className='col-12 col-md-4' key={s.title}>
                                <div className='h-100 border rounded-4 p-3'>
                                    <div className='d-flex align-items-center gap-3 mb-2'>
                                        <span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-dark text-white' style={{ width: 44, height: 44 }}>
                                            <i className={`bi ${s.icon}`}></i>
                                        </span>
                                        <h6 className='fw-bold mb-0'>{i + 1}. {s.title}</h6>
                                    </div>
                                    <p className='text-secondary mb-0'>{s.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why RideMate */}
                <div className='p-3 p-md-4 border rounded-4 bg-white shadow-sm mb-4'>
                    <h5 className='fw-bold mb-3 pb-2 border-bottom'>Why choose RideMate</h5>
                    <div className='row g-3'>
                        {values.map((v) => (
                            <div className='col-12 col-sm-6' key={v.title}>
                                <div className='d-flex gap-3 p-2'>
                                    <i className={`bi ${v.icon} text-success fs-3`}></i>
                                    <div>
                                        <h6 className='fw-bold mb-1'>{v.title}</h6>
                                        <p className='text-secondary mb-0'>{v.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <div className='bg-dark text-white rounded-4 p-4 p-md-5 text-center'>
                    <h4 className='fw-bold'>Ready to share your next ride?</h4>
                    <p className='text-secondary'>Offer your empty seats or find a ride going your way.</p>
                    <div className='d-grid d-sm-flex justify-content-sm-center gap-2'>
                        <Link to='/Offerride' className='btn btn-success btn-lg px-5'> Offer a Ride </Link>
                         <Link to='/Findride' className='btn btn-outline-light btn-lg px-5'>  Find a Ride</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Aboutus;