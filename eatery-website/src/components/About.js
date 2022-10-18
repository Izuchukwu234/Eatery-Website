import React from 'react'
import Bitterleaf from '../Images/Bitterleaf.jpg';
import Ogbono from '../Images/Ogbono.jpg';
import Rice from '../Images/Rice.jpg';
import White from '../Images/White.jpg';

const About = () => {
    return (
        <div>
            <section id="about" className="p-100">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-5 align-self-center">
                            <span className="text-primary fw-bold">About Us</span>
                            <hr />
                            <h1 className="display-6 fw-bold">Know more about our Awka Eatery.</h1>
                            <p className="text-muted">We are located in the heart of Kubwa village, Abuja and we make our food delivery without wasting time after your order.</p>
                            <p className='text-muted'>With seemingly endless options, how do you find the best meal service for your situation? Mouth-watering and colorful meal delivery boxes from the likes of Freshly, Home Chef, Sakara Life, Purple Carrot and Gobble are now a staple delivery for busy home cooks</p>
                            <a href="#contact" className="btn btn-outline-primary">Contact Us</a>
                            <hr />
                            <div className="about-icons mt-3">
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-twitter"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-youtube"></i>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                    <img src={Rice} className="img-fluid img-thumbnail" alt='' />
                                </div>
                                <div className="col-md-6">
                                    <img src={Bitterleaf} className="img-fluid img-thumbnail" alt='' />
                                </div>
                            </div>
                            <div className="row mt-2 justify-content-center">
                                <div className="col-md-7">
                                    <img src={White} alt="" className="img-fluid img-thumbnail" />
                                </div>
                                <div className="col-md-4">
                                    <img src={Ogbono} className="img-fluid img-thumbnail" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About