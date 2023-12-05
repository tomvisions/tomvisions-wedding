import {partners} from "../data/partner"
import {useEffect} from "react";
import {loadImage400x513} from '../shared'

const NewlineText = (props) => {
    const text = props.text;
    const newText = text.split('\n').map((str, index) => <p key={index} >{str}</p>);
  
  return newText;
}   

const SlideAboutPartner = () => {
  
      const partnerlock = partners.map((partner) => {
          const theId = `about-partner-${partner.id}`;
          const pictureHead = loadImage400x513(partner.picture);

          return (
            <div key={partner.id} className="slide-panel" id={theId}>
                <a href="#" className="close ti ti-close"></a>
                <div className="container vertical-align-middle">
                    <h2 className="theme-title">{partner.title}</h2>
                    <div className="row break-480px">
                        <div className="col-xs-6">
                            <div className="img-treatment">
                                <img src={pictureHead} alt={partner.bio}  />
                            </div>
                        </div>
                        <div className="col-xs-6">
                            
                        <NewlineText text={partner.bio}/>
                            
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
