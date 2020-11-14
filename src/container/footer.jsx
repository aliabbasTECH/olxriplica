import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <React.Fragment >
            <div className="footer flex">

                <div className="block flex flex-col">
                <div className="title siz16 fonto color">popular Catagories</div>
                <BrowserRouter> <Route>
                <Link to="/" className="noul noulh font siz14"> Cars </Link>
                <Link to="/" className="noul noulh font siz14"> Flats for rent </Link>
                <Link to="/" className="noul noulh font siz14"> Jobs </Link>
                <Link to="/" className="noul noulh font siz14">Mobile Phones</Link>
                </Route></BrowserRouter>
                </div>

                <div className="block flex flex-col">
                <div className="title siz16 fonto color">TRANDING SEARCHES</div>
                <BrowserRouter> <Route>
                <Link to="/" className="noul noulh font siz14"> Bikes </Link>
                <Link to="/" className="noul noulh font siz14"> Watches </Link>
                <Link to="/" className="noul noulh font siz14"> Books </Link>
                <Link to="/" className="noul noulh font siz14"> Dogs </Link>
                </Route></BrowserRouter>
                </div>

                <div className="block flex flex-col">
                <div className="title siz16 fonto color">ABOUT US</div>
                <BrowserRouter> <Route>
                <Link to="/" className="noul noulh font siz14"> About OLX Group </Link>
                <Link to="/" className="noul noulh font siz14"> OLX blog </Link>
                <Link to="/" className="noul noulh font siz14"> Contact Us </Link>
                <Link to="/" className="noul noulh font siz14"> OLX for Businesses</Link>
                </Route></BrowserRouter>
                </div>

                <div className="block flex flex-col">
                <div className="title siz16 fonto color">olx</div>
                <BrowserRouter> <Route>
                <Link to="/" className="noul noulh font siz14"> Help </Link>
                <Link to="/" className="noul noulh font siz14"> Sitemap </Link>
                <Link to="/" className="noul noulh font siz14"> legal privacy information </Link>
                <Link to="/" className="noul noulh font siz14">Mobile Phones</Link>
                </Route></BrowserRouter>
                </div>
                </div>
                <div className="sfooter flex">
                    <h2 className="cfff font siz14">Other Countries India - South Africa - Indonesia</h2>
                    <h2 className="r cfff font siz14">Free Classifieds in Pakistan .@ 2006-2020 OLX</h2>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Footer;