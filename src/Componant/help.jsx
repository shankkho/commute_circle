import { useState } from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom'
import './Style.css'

const topics = [
    { icon: 'bi-search', title: 'Finding a ride', text: 'Search routes and book a seat.' },
    { icon: 'bi-car-front-fill', title: 'Offering a ride', text: 'Post your route and empty seats.' },
    { icon: 'bi-currency-rupee', title: 'Cost sharing', text: 'How the fare is split.' },
    { icon: 'bi-shield-check', title: 'Safety', text: 'Travel with comfort and care.' },
    { icon: 'bi-person-circle', title: 'Account', text: 'Profile, login and settings.' },
    { icon: 'bi-chat-dots-fill', title: 'Feedback', text: 'Share ideas or report a problem.' },
];

// Apne app ke rules ke hisaab se answers badal lena
const faqs = [
    { q: 'How do I offer a ride?', a: 'Open the Offer a Ride page, enter your starting point, destination, date, time, seats and vehicle, then press Post Ride.' },
    { q: 'How do I find a ride?', a: 'Enter your pickup and destination, choose a date, and pick a ride that matches your route and timing.' },
    { q: 'How many seats can I offer?', a: 'A car can offer up to 4 seats. Bikes and scooties can carry one passenger.' },
    { q: 'Can I choose who travels with me?', a: 'Yes. When you offer a ride you can set your gender and the ride-mate gender you prefer.' },
    { q: 'How is the cost shared?', a: 'The driver and riders split the fuel and toll cost of the trip. Agree on the amount before you start the ride.' },
    { q: 'What should I do if my plans change?', a: 'Tell the other person as early as you can, so they can make other arrangements.' },
    { q: 'I feel unsafe during a ride. What should I do?', a: 'Contact local emergency services first (dial 112 in India). After that, write to us on the Contact us page.' },
];

const Helpsupport = () => {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(0);

    const shown = faqs.filter((f) =>
        (f.q + ' ' + f.a).toLowerCase().includes(query.trim().toLowerCase())
    );

    return (
        <div className='w-100 bg-light min-vh-100'>
            <Navbar />

            {/* Header with search */}
            <div className='container-fluid bg-dark text-white py-5 shadow-lg'>
                <div className='container'>
                    <h2 className='fw-bold'>Help and support</h2>
                    <p className='text-secondary fs-5'>Find quick answers about rides, safety and your account.</p>
                    <div className='input-group input-group-lg col-md-6' style={{ maxWidth: 560 }}>
                        <span className='input-group-text bg-white border-0'>
                            <i className='bi bi-search text-muted'></i>
                        </span>
                        <input
                            type='text'
                            className='form-control border-0'
                            placeholder='Search for help'
                            value={query}
                            onChange={(e) => { setQuery(e.target.value); setOpen(0); }}
                        />
                    </div>
                </div>
            </div>

            <div className='container py-4'>

                {/* Topics */}
                <div className='p-3 p-md-4 border rounded-4 bg-white shadow-sm mb-4'>
                    <h5 className='fw-bold mb-3 pb-2 border-bottom'>Browse by topic</h5>
                    <div className='row g-3'>
                        {topics.map((t) => (
                            <div className='col-12 col-sm-6 col-lg-4' key={t.title}>
                                <div className='d-flex align-items-center gap-3 border rounded-4 p-3 h-100'>
                                    <span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 text-success flex-shrink-0' style={{ width: 44, height: 44 }}>
                                        <i className={`bi ${t.icon}`}></i>
                                    </span>
                                    <div>
                                        <div className='fw-semibold'>{t.title}</div>
                                        <div className='small text-secondary'>{t.text}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className='p-3 p-md-4 border rounded-4 bg-white shadow-sm mb-4'>
                    <h5 className='fw-bold mb-3 pb-2 border-bottom'>Frequently asked questions</h5>

                    {shown.length === 0 && (
                        <p className='text-secondary mb-0'>No answers match your search. Try different words, or contact us below.</p>
                    )}

                    {shown.map((f, i) => {
                        const isOpen = open === i;
                        return (
                            <div className='border rounded-3 mb-2 overflow-hidden' key={f.q}>
                                <button
                                    type='button'
                                    className='btn w-100 d-flex justify-content-between align-items-center text-start fw-semibold py-3 px-3 rounded-0'
                                    onClick={() => setOpen(isOpen ? -1 : i)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{f.q}</span>
                                    <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'} text-muted ms-3`}></i>
                                </button>
                                {isOpen && <div className='px-3 pb-3 text-secondary'>{f.a}</div>}
                            </div>
                        );
                    })}
                </div>

                {/* Still need help */}
                <div className='bg-dark text-white rounded-4 p-4 p-md-5 text-center'>
                    <h4 className='fw-bold'>Still need help?</h4>
                    <p className='text-secondary'>Send us a message and we will get back to you.</p>
                    <Link to='/contactus' className='btn btn-success btn-lg px-5'>Contact us</Link>
                   
                </div>

            </div>
        </div>
    );
};
export default Helpsupport;