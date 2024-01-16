import './css/bootstrap.min.css';
import './css/swirly-love-theme.min.css';
import './css/wedding.css';
//import './css/custom-styles.css';
import Header from './components/Header';
import NavMobile from "./components/NavMobile";
import Feature from './components/Feature'
import About from './components/About'
import SlideAboutPartner from "./components/SlideAboutPartner";
import OurStory from "./components/OurStory";
import Gallery from "./components/Gallery";
//import {useState} from "react";
//console.log('hello')

function App() {

  //const [isLoading, setLoading] = useState(true);
  return (
      <div>
      <NavMobile />
      <Header />

        <div className="page-container clearfix" id="content" role="main">
            <Feature/>
            <About />
            <OurStory/>
            <Gallery/>
        </div>
        <div className="slide-panel-parent">
            <SlideAboutPartner/>
        </div>
      </div>
  );
}



export default App;
