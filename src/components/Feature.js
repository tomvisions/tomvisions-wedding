import { loadImage1280x610 } from "../shared/image";

const Feature = () => {
    
    const tomVanessa = loadImage1280x610('van-tom.jpg');

    const background = `url(${tomVanessa})`;

    return (
        <div className="feature-section feature-odd" id="begin">
            <div className="hero-banner" style={{"backgroundImage": background, "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
            <section className="row text-center the-couple-row">
                  <div className="col-sm-12 the-couple-text-wrapper">
                      <h1 className="the-couple-name">Vanessa & Tom</h1>
                      <p className="text-uppercase the-couple-statement">Got married: July 7, 2018</p>
                   </div>
              </section>  
                </div>            
        </div>
    );
}
export default Feature;

