import React from 'react'
import "../styles.css"
import heroOverlay from '../images/heroOverlay.png'
import ifitCoach from '../images/ifitCoach.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Fade from 'react-reveal/Fade';

import gearjunkielogo from '../images/gearjunkielogo.svg'
import wiredlogo from '../images/wiredlogo.svg'
import mashablelogo from '../images/mashablelogo.svg'

import treadmill from '../images/treadmill.png'
import elliptical from '../images/elliptical.png'
import strength from '../images/strength.png'
import bike from '../images/bike.png'


import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


import Cards from './Cards.js'
import Footer from './Footer.js'

export default class Home extends React.Component {

    render() {
        const responsiveSlider = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };

        return (
            <div>
                {/* Product Nav */}
                <div className="productNav">
                    <ul>
                        <li><a href="#blog">BLOG</a></li>
                        <li><a href="#nourish">NOURISH</a></li>
                        <li><a href="#shop">Shop</a></li>
                    </ul>
                </div>

                {/* Bootstrap Nav */}
                <Navbar className="mainNav" expand="lg" >
                    <Navbar.Brand href="#home"><img src={ifitCoach} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="justify-content-center nocontainer">
                            <Nav className="mr-auto mainNavul">
                                <a href="#home" className="mainNavli">EXERCISE</a>
                                <a href="#link" className="mainNavli">NUTRITION</a>
                                <a href="#home" className="mainNavli">ACTIVITY</a>
                                <a href="#link" className="mainNavli">SLEEP</a>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                    <button className="mainNavButton">SIGN UP</button>
                </Navbar>

                {/* Hero Section */}
                <div class="heroSection">
                    <img className="heroPic" src={heroOverlay} alt="hero picture" />
                    <Fade top cascade>
                        <div className="heroCenter">

                            <div class="heroText">The best personal training, right in your own home</div>
                            <button className="blueBtn">JOIN IFIT COACH</button>
                        </div>
                    </Fade>
                </div>

                {/* Media Slider */}
                <div className="slideBoxbkd">
                    <Carousel responsive={responsiveSlider} infinite={true} autoPlay={true} keyBoardControl={true}>
                        <div className="slideBox">
                            <img src={gearjunkielogo} />
                            <p>“You focus on putting in the work, and the technology handles the rest.”</p>
                        </div>
                        <div className="slideBox">
                            <img src={wiredlogo} />
                            <p>“Literally transports you from home to wherever you choose to run.”</p>
                        </div>
                        <div className="slideBox">
                            <img src={mashablelogo} />
                            <p>“Breathes new life into a tired, old running routine.”</p>
                        </div>
                        <div className="slideBox">
                            <img src={gearjunkielogo} />
                            <p>“You focus on putting in the work, and the technology handles the rest.”</p>
                        </div>
                        <div className="slideBox">
                            <img src={wiredlogo} />
                            <p>“Literally transports you from home to wherever you choose to run.”</p>
                        </div>
                        <div className="slideBox">
                            <img src={mashablelogo} />
                            <p>“Breathes new life into a tired, old running routine.”</p>
                        </div>
                    </Carousel>

                    {/* cards */}
                    <Cards />

                    {/* Equipment Section  */}
                    <div className="equipText">
                        <div>Interested in our exciting iFit-enabled equipment?</div>
                    </div>
                    <div className="equipFlex">
                        <div className="equipBox">
                            <img src={treadmill} />
                            <div className="equipSubTitle">Treadmills</div>
                        </div>

                        <div className="equipBox">
                            <img src={bike} />
                            <div className="equipSubTitle">Bikes</div>
                        </div>

                        <div className="equipBox">
                            <img src={elliptical} />
                            <div className="equipSubTitle">Ellipticals</div>
                        </div>

                        <div className="equipBox">
                            <img src={strength} />
                            <div className="equipSubTitle">Strength</div>
                        </div>
                    </div>

                   <Footer />
                   
                </div >

            </div >
        )
    }
}