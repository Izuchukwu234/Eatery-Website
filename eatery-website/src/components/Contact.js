import React from 'react'

const Contact = () => {
  return (
    <div>
        <section id="contact" className="p-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <span className="text-primary fw-bold">Contact Us</span>
                        <hr />
                        <h1 className="display-6 fw-bold">Get intouch with us now.</h1>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-6 col-12">
                        <form className="img-thumbnail">
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Enter your name' required/>
                            </div>

                            <div className="mb-3">
                                <input type="email" className='form-control' placeholder='Enter your email' required/>
                            </div>

                            <div className="mb-3">
                                <textarea rows="3" className='form-control'></textarea>
                            </div>

                            <div className="mt-5">
                                <a href="#" className="btn btn-primary">Send Message</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact