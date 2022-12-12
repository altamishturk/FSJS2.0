import React from 'react'

function Hero() {
  return (
    <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Avatar Image--> */}
                <img className="masthead-avatar mb-5 rounded-circle" src="https://media-exp1.licdn.com/dms/image/C4D03AQF67jY2wfiUEA/profile-displayphoto-shrink_800_800/0/1662582186952?e=2147483647&v=beta&t=ZXFxKk3t9V8763cHXVAbgItBI-wBnkdUPBJt2CpC1Nk" alt="..." />
                {/* <!-- Masthead Heading--> */}
                <h1 className="masthead-heading text-uppercase mb-0">Altamish</h1>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
                <p className="masthead-subheading font-weight-light mb-0">Web Developer - Web Designer - Web Engineer</p>
            </div>
        </header>
  )
}

export default Hero