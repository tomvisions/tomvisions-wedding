const Feature = () => {
    return (
        <div className="feature-section feature-odd make-page-height" id="begin">
            <div className="container the-couple-content">
                <section className="row text-center the-couple-row">
                    <div className="col-lg-6">
                        <div className="the-couple-image-holder">
                            <span className="the-couple-mask" aria-hidden="true">
                            </span>
                            <img className="the-couple-image" src="assets/couple-images/the-couple-fpo.jpg" alt="Couple Name" />
                        </div>
                    </div>
                    <div className="col-lg-6 the-couple-text-wrapper">
                        <h1 className="the-couple-name">Katherine & Christopher</h1>
                        <p className="text-uppercase the-couple-statement">Are getting married</p>
                        <h2 className="the-couple-date h3">November 14, 2016</h2>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Feature;

