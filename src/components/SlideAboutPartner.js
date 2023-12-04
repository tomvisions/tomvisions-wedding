import {partners} from "../data/partner"
import {useEffect} from "react";

const SlideAboutPartner = () => {
      const partnerlock = partners.map((partner) => {
          const theId = `about-partner-${partner.id}`;
          return (
            <div key={partner.id} className="slide-panel" id={theId}>
                <a href="#" className="close ti ti-close"></a>
                <div className="container vertical-align-middle">
                    <h2 className="theme-title">{partner.title}</h2>
                    <div className="row break-480px">
                        <div className="col-xs-6">
                            <div className="img-treatment">
                                <img src="assets/couple-images/individual-1-fpo.jpg" alt="Name of Person"/>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <p>
                                {partner.bio}
                            </p>
                            <blockquote>
                                <p>
                                    {partner.quote}
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <a href="#" className="go-to-top scroll-panel-top"><span className="ti ti-arrow-up"></span></a>
            </div>
          )
        })
    useEffect( () => {
        querySelect()
    }, []);

      const querySelect = () => {
          if (document.querySelectorAll('[data-slide="slide"]').length === 2) {
              Array.from(document.querySelectorAll('[data-slide="slide"]')).map((element) => {

                  element.addEventListener('click', show.bind(this, element))

                });
            }

          if (document.querySelectorAll('.slide-panel .close').length === 2) {
              Array.from(document.querySelectorAll('.slide-panel .close')).map((element) => {

                  element.addEventListener('click', hide.bind(this, element))
              });
          }

        }

      const show = (element, event) => {
        const target = element.getAttribute('data-target');
        const targetElement = document.getElementById(target);

        targetElement.classList.add('open');
        element.classList.add('active-slide-btn');

        document.querySelector('html').classList.add('slide-active');
        event.preventDefault();

     }

    const hide = (element, event) => {

        element.parentElement.classList.remove('open');
        document.querySelector('.active-slide-btn').classList.remove('active-slide-btn');
        document.querySelector('html').classList.remove('slide-active');
        event.preventDefault();

    }
    return partnerlock;
}
export default SlideAboutPartner;
