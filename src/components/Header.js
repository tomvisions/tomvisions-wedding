const Header = () => {
    return (
        <><nav className="nav-wrapper visible-xs nav-wrapper-mobile">
            <div className="nav-wrapper-mobile-inner">
                <div className="nav-wrapper-mobile-vertical-center">
                </div>
            </div>
        </nav>
            <header className="header ps-container adjust-embellishments">
            <div className="header-inner">
                <div className="header-vertical-center">
                    <nav id="nav" className="nav-wrapper">
                        <a href="#" className="menu-toggle" aria-label="navigation menu" role="button" aria-controls="nav" aria-expanded="false">
                                <span className="veggieburger">
                                    <span className="lines"></span>
                                </span>
                        </a>
                        <ul className="nav">
                            <li className="active"><a href="#begin">Begin</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#our-story">Our Story</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <span className="header-embellishment-top" aria-hidden="true"></span>
            <span className="header-embellishment-bottom" aria-hidden="true"></span>
        </header></>
    );
}

export default Header;
