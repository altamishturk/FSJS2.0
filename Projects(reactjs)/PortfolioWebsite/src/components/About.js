import React from 'react'

function About() {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                {/* <!-- About Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div className="row">
                    <div className="col-lg-4 ms-auto">
                        <p className="lead">
                          I'm Altamish Web developer & Designer. The India, UK, Australia, and the US are among the countries where I work as a freelance web developer and designer. The work I have done does not define me as an individual, I define myself as an individual based on the work I want to do. Skills can be taught, but personalities are not. I like to keep learning, keep challenging myself, and do interesting things that matter. 
                        </p>
                    </div>
                    <div className="col-lg-4 me-auto">
                        <p className="lead">
                          I'm helping businesses to showcase their business in the online world I enjoy projects that require problem-solving, in terms of cost efficiency. I’m inspired by companies with big vision and by start-ups with big dreams and I want to help you build something incredible. Thanks for visiting, and have a great day!
                        </p>
                    </div>
                </div>
                {/* <!-- About Section Button--> */}
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" target="blank" href="http://altamish.in/">
                        <i className="fas fa-download1 me-2"></i>
                        Visit My Website
                    </a>
                </div>
            </div>
        </section>
  )
}

export default About