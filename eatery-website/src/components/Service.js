import React from 'react'

const Service = () => {
  return (
    <div>
        <section id="service" className="p-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <span className="text-primary fw-bold">Services</span>
                        <hr />
                        <h1 className="display-6 fw-bold">What we currently offer.</h1>
                    </div>
                </div>
                <div className="row mt-">
                    <div className="col-md-4">
                        <div className="card align-items-center p-5">
                            <i className="bi bi-truck"></i>
                            <div className="card-body">
                                <p>Fast Delivery</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card align-items-center p-5">
                            <i className="bi bi-egg-fried"></i>
                            <div className="card-body">
                                <p>Good Meal</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card align-items-center p-5">
                            <i className="bi bi-tree"></i>
                            <div className="card-body">
                                <p>Relaxation</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card align-items-center p-5">
                            <i className="bi bi-emoji-sunglasses"></i>
                            <div className="card-body">
                                <p>Leisure</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card align-items-center p-5">
                            <i className="bi bi-calendar-event"></i>
                            <div className="card-body">
                                <p>Events</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card align-items-center p-5">
                            <i className="bi bi-currency-dollar"></i>
                            <div className="card-body">
                                <p>Cashless Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Service