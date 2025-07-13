<script setup lang="ts">
import {partners} from "@/data/partner"
import {loadImage400x513} from '@/shared'

const NewlineText = (props) => {
    const text = props.text;
   // const newText = text.split('\n').map((str, index) => <p key={index} >{str}</p>);

  return newText;
}

const partnerlock = partners.map((partner) => {
  const theId = `about-partner-${partner.id}`;
  const pictureHead = loadImage400x513(partner.picture);

})
</script>

<template>
  <div key={partner.id} class="slide-panel" id={theId}>
    <div class="close ti ti-close"></div>
    <div class="container vertical-align-middle">
      <h2 class="theme-title">{partner.title}</h2>
      <div class="row break-480px">
        <div class="col-xs-6">
          <div class="img-treatment">
            <img src={{pictureHead}} alt={partner.bio}  />
          </div>
        </div>
        <div class="col-xs-6">

          <NewlineText text={partner.bio}/></NewlineText>

            <blockquote>
              <p>
                {partner.quote}
              </p>
            </blockquote>
        </div>
      </div>
    </div>
    <div class="go-to-top scroll-panel-top"><span class="ti ti-arrow-up"></span></div>
  </div>
</template>

    useEffect( () => {
        const querySelect = () => {
            if (document.querySelectorAll('[data-slide="slide"]').length === 2) {
                Array.from(document.querySelectorAll('[data-slide="slide"]')).map((element) => {

                    element.addEventListener('click', show.bind(this, element))

                    return element;
                  });
              }

            if (document.querySelectorAll('.slide-panel .close').length === 2) {
                Array.from(document.querySelectorAll('.slide-panel .close')).map((element) => {

                    element.addEventListener('click', hide.bind(this, element))

                    return element;
                });
            }

          }

        querySelect()
    }, []);



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
