import React from 'react'
import Banner from '../Images/Banner.jpg';

const Header = () => {
  return (
    <div>
        <header className="vh-100 d-flex align-items-center" id='home'>
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <h1 className="display-5 fw-bold">
                            We Provide the best meal for every lingering hunger.
                        </h1>
                        <p className="lead">
                        It's been a long day at work and the last thing you feel like doing is putting together a meal. It can be tedious and time-consuming to shop for all the ingredients you need, chop, measure, cook and clean up afterward.
                        </p>
                        <p className="lead">
                        Fortunately, there's a better alternative than grabbing a bag of greasy takeout on the way home.
                        </p>
                        <a href="#about" className="btn btn-primary">See More</a>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <img src={Banner} alt="Banner Image" className="img-fluid shadow-lg banner" />
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header