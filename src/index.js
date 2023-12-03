import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import useScript from "./hooks/useScript";

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>

<!-- Bootstrap plugins -->
<script src="assets/js/bootstrap.min.js" type="text/javascript"></script>

<!-- RSVP jQuery scripts : form.js (ajax form) / validation script / google custom map -->
<script src="assets/rsvp/rsvp-form-google-map-swirly-love.min.js" type="text/javascript"></script>

<!-- Vendor and Custom main scripts -->
<script src="assets/js/swirly-love.js" type="text/javascript"></script>

<!-- Your Custom JS -->
<script src="assets/js/your-custom.js" type="text/javascript"></script>

<!-- Google Map API -->
<script src="https://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>
*/

const Javascript = props => {
    useScript('https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js');
    useScript('/assets/js/bootstrap.min.js');
//    useScript('/assets/js/underscore.js');
//    useScript('/assets/js/jquery.touchSwipe.js');
//    useScript('/assets/js/fitText.js');
//    useScript('/assets/js/js.cookie.js');
 //   useScript('/assets/js/jquery.magnific-popup.js');
  //  useScript('/assets/js/imagesloaded.pkgd.min.js');
  //  useScript('/assets/js/jquery.flexverticalcenter.js');
    useScript('/assets/js/swirly-love.js');
  //  useScript('/assets/js/fitText.js');


    // rest of your component
}

root.render(
 <>
    <App />
      <Javascript/>
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
