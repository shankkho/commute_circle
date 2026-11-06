import Navbar from './Navbar';
import './Style.css'


const contacts = [
    { icon: 'bi-envelope-fill', title: 'Email', text: 'support@ridemate.com' },
    { icon: 'bi-telephone-fill', title: 'Phone', text: '+91 00000 00000' },
    { icon: 'bi-geo-alt-fill', title: 'Address', text: 'Your city, Maharashtra, India' },
    { icon: 'bi-clock-fill', title: 'Support hours', text: 'Mon - Sat, 9:00 AM - 6:00 PM' },
];

const Contactus = () => {
    return (
        <div className='w-100 bg-light min-vh-100'>
            <Navbar />

            {/* Header */}
            <div className='container-fluid bg-dark text-white py-5 shadow-lg'>
                <div className='container'>
                    <h2 className='fw-bold'>Contact us</h2>
                    <p className='text-secondary mb-0 fs-5'>
                        Questions, feedback or a problem with a ride? Send us a message and we will get back to you.
                    </p>
                </div>
            </div>

            <div className='container py-4'>
                <div className='row g-4'>

                    {/* Form */}
                    <div className='col-12 col-lg-7'>
                        <form className='p-3 p-md-4 border rounded-4 bg-white shadow-sm' onSubmit={(e) => e.preventDefault()}>
                            <h5 className='fw-bold mb-3 pb-2 border-bottom'>Send a message</h5>

                            <div className='row g-3 mb-3'>
                                <div className='col-12 col-md-6'>
                                    <label className='fw-semibold mb-1' htmlFor='name'>Full name</label>
                                    <div className='input-group shadow-sm border rounded-3 overflow-hidden'>
                                        <span className='input-group-text bg-white border-0 pe-2'>
                                            <i className='bi bi-person-fill text-muted'></i>
                                        </span>
                                        <input type='text' id='name' name='name' className='form-control border-0 ps-1 py-2' placeholder='Enter your name' />
                                    </div>
                                </div>

                                <div className='col-12 col-md-6'>
                                    <label className='fw-semibold mb-1' htmlFor='email'>Email</label>
                                    <div className='input-group shadow-sm border rounded-3 overflow-hidden'>
                                        <span className='input-group-text bg-white border-0 pe-2'>
                                            <i className='bi bi-envelope-fill text-muted'></i>
                                        </span>
                                        <input type='email' id='email' name='email' className='form-control border-0 ps-1 py-2' placeholder='Enter your email' />
                                    </div>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <label className='fw-semibold mb-1' htmlFor='subject'>Subject</label>
                                <div className='input-group shadow-sm border rounded-3 overflow-hidden'>
                                    <span className='input-group-text bg-white border-0 pe-2'>
                                        <i className='bi bi-chat-left-text-fill text-muted'></i>
                                    </span>
                                    <select id='subject' name='subject' className='form-select border-0 ps-1 py-2'>
                                        <option value=''>Select a topic</option>
                                        <option value='ride'>Problem with a ride</option>
                                        <option value='account'>Account help</option>
                                        <option value='feedback'>Feedback or suggestion</option>
                                        <option value='other'>Something else</option>
                                    </select>
                                </div>
                            </div>

                            <div className='mb-4'>
                                <label className='fw-semibold mb-1' htmlFor='message'>Message</label>
                                <textarea id='message' name='message' rows='5' className='form-control shadow-sm rounded-3 py-2' placeholder='Tell us how we can help'></textarea>
                            </div>

                            <div className='d-grid d-md-flex justify-content-md-end'>
                                <button type='submit' className='btn btn-success btn-lg px-5'>Send message</button>
                            </div>
                        </form>
                    </div>

                    {/* Contact details */}
                    <div className='col-12 col-lg-5'>
                        <div className='p-3 p-md-4 border rounded-4 bg-white shadow-sm mb-4'>
                            <h5 className='fw-bold mb-3 pb-2 border-bottom'>Get in touch</h5>
                            {contacts.map((c, i) => (
                                <div className={`d-flex align-items-center gap-3 ${i < contacts.length - 1 ? 'mb-3' : ''}`} key={c.title}>
                                    <span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 text-success flex-shrink-0' style={{ width: 44, height: 44 }}>
                                        <i className={`bi ${c.icon}`}></i>
                                    </span>
                                    <div>
                                        <div className='fw-semibold'>{c.title}</div>
                                        <div className='text-secondary'>{c.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='bg-dark text-white rounded-4 p-4'>
                            <h5 className='fw-bold'>Safety concern?</h5>
                            <p className='text-secondary mb-0'>
                                If you feel unsafe during a ride, contact local emergency services first (dial 112 in India), then write to us so we can look into it.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Contactus;