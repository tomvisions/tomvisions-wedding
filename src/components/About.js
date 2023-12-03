const About = () => {
    return (
        <section className="feature-section make-page-height feature-even" id="about">
            <div className="container vertical-align-middle">
                <h2 className="theme-title">About the Couple</h2>
                <div className="row break-480px text-center">
                    <div className="col-xs-6 col-md-4 col-md-offset-1">
                        <a href="#"
                           data-slide="slide"
                           data-target="#about-partner-1"
                           className="color-inherit-link"
                           role="button"
                           aria-controls="about-partner-1"
                           aria-expanded="false">
                            <div className="img-treatment">
                                <img src="assets/couple-images/individual-1-fpo.jpg" alt="Name of Person" />
                            </div>
                            <h3 className="h1">Katherine</h3>
                            <p className="text-uppercase the-couple-statement">About Her + </p>
                        </a>
                    </div>
                    <span className="hidden-xs hidden-sm heart-divider" aria-hidden="true"></span>
                    <div className="col-xs-6 col-md-4 col-md-offset-2">
                        <a href="#"
                           data-slide="slide"
                           data-target="#about-partner-2"
                           className="color-inherit-link"
                           role="button"
                           aria-controls="about-partner-2"
                           aria-expanded="false"
                        >
                            <div className="img-treatment">
                                <img src="assets/couple-images/individual-2-fpo.jpg" alt="Name of Person" />
                            </div>
                            <h3 className="h1">Christopher</h3>
                            <p className="text-uppercase the-couple-statement">About Him + </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;


