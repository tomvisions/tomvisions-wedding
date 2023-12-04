import logo from './logo.svg';
import './css/bootstrap.min.css';
import './css/swirly-love-theme.min.css';
import './css/custom-styles.css';
import Header from './components/Header';
import NavMobile from "./components/NavMobile";
import Feature from './components/Feature'
import About from './components/About'
import SlideAboutPartner from "./components/SlideAboutPartner";
import OurStory from "./components/OurStory";
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
            <div className="divider divider-even" aria-hidden="true"></div>
            <About />
            <OurStory/>

        </div>
        <div className="slide-panel-parent">
            <SlideAboutPartner/>
        </div>
      </div>
  );
}



export default App;
