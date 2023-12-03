import {partners} from "../data/partner"
import {useState} from "react";
import {useEffect} from "react";

const SlideAboutPartner = () => {
 //   const [isLoading, setLoading] = useState(true); //
//    const [isLoading] = useState(true)
    // ______ data-slide function

/*
    => {
        console.log('wootdd')
        var $this = $(this);
        var target = $this.attr('data-target');
        var $target = $(target);
        if ($('.slide-panel-parent').children().is('.open')) {
            console.log('it is')
            $('.open').not(target).removeClass('open');
            $('.active-slide-btn').not(this).removeClass('active-slide-btn');
            $(this).toggleClass('active-slide-btn');
            $(target).toggleClass('open');
            $('html').removeClass('slide-active');
        } else {
            $(target).toggleClass('open');
            $(this).toggleClass('active-slide-btn');
        }
        if ($('.slide-panel-parent').children().is('.open')) {
            $('html').addClass('slide-active');
        } else {
            $('html').removeClass('slide-active');
        }
        console.log('ending')
        e.preventDefault();
    }); */
/*
    $('.slide-panel .close').click(function(e) {
        $('.active-slide-btn').removeClass('active-slide-btn');
        $(this).parent().removeClass('open');
        $('html').removeClass('slide-active');
        $('.page-container').removeAttr('style');
        e.preventDefault();
    }); */



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

    const [state, setState] = useState(0)

    useEffect( () => {
        querySelect()
/*        if (document.querySelectorAll('[data-slide="slide"]').length === 2) {
            Array.from(document.querySelectorAll('[data-slide="slide"]')).map((element) => {
                console.log('3')
                console.log(element);
            });

            return true; */
       // await setState((state) => state + 1);
    }, []);
/*
    console.log('1')
        console.log(document.querySelectorAll('a[data-slide="slide"]'));
    console.log('2')

      console.log( Array.from(document.querySelectorAll('[data-slide="slide"]')))
        Array.from(document.querySelectorAll('[data-slide="slide"]')).map((element) => {
            console.log('3')
            console.log(element);
        });
*/
      


      const querySelect = () => {
          if (document.querySelectorAll('[data-slide="slide"]').length === 2) {
              Array.from(document.querySelectorAll('[data-slide="slide"]')).map((element) => {
                    console.log('in array')
                    console.log(element)

//                    console.log(document.getElementsByTagName(element));//.addEventListener('click', alert('hello8'))
                   // element.onclick = showHide;
                    //element.setAttribute("onclick", () => showHide());
                        element.addEventListener('click', showHide.bind(this, element))
                    /*() => {
                        const target = element.getAttribute('data-target');
                        console .log('the target')
                        console.log(target);
                        const targetElement = element.getElementsByClassName
                        if (document.querySelector('.slide-panel-parent').children().is('.open')) {
                            Array.from(document.querySelectorAll('.open')).map((elementChild) => {
                                if (elementChild.hasAttribute('class', 'open')) {
                                    
                                }
                    

                            }); 

                        }
                                }); */
                  element.preventDefault                  
                  return true;
                }); 
            }
      
        }

      const showHide = (element, temp) => {
        console.log('the element');
        console.log(element);
        const target = element.getAttribute('data-target');
        console.log('the target')
        console.log(target);
        const targetElement = document.getElementById(target);
        if (document.querySelector('.slide-panel-parent').children().is('.open')) {
            
        }

        
     }  
    return partnerlock;
}
export default SlideAboutPartner;
