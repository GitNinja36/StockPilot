import React from 'react';

function ZerodhaPage() {
    return (
        <div className='container mt-5 mb-5'>
            {/* Info Section */}
            <section className='row mb-5 '>
                <div className='col-md-6'>
                    <h1>Trust with confidence</h1>
                    <div className='mt-5'>
                        <div className='mt-4'>
                            <h5 className='fw-medium'>Customer-first always</h5>
                            <p className='mt-3 fw-normal'>
                                That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                            </p>
                        </div>
                        <div className='mt-4'>
                            <h5 className='fw-medium'>No spam or gimmicks</h5>
                            <p className='mt-3 fw-normal '>
                                No gimmicks, spam, "gamification", or annoying push notifications. High-quality apps that you use at your pace, the way you like.
                            </p>
                        </div>
                        <div className='mt-4'>
                            <h5 className='fw-medium'>The Zerodha universe</h5>
                            <p className='mt-3 fw-normal'>
                                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                            </p>
                        </div>
                        <div className='mt-4'>
                            <h5 className='fw-medium'>Do better with money</h5>
                            <p className='mt-3 fw-normal'>
                                With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-md-5'>
                    {/* Image Section */}
                    <div className="text-center">
                        <img 
                            src="media/images/ecosystem.png" 
                            alt="Eco-System" 
                            className='img-fluid' 
                            style={{ maxWidth: '623px', height: '612' }}
                        />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p >Explore our products <i className="fa-solid fa-arrow-right"></i></p>
                        </div>
                        <div>
                            <p>Try Kite demo <i className="fa-solid fa-arrow-right"></i></p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default ZerodhaPage;
