import React from 'react'
import "../styles.css"
import heroOverlay from '../images/heroOverlay.png'
import ifitCoach from '../images/ifitCoach.png'

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import gearjunkielogo from '../images/gearjunkielogo.svg'
import wiredlogo from '../images/wiredlogo.svg'
import mashablelogo from '../images/mashablelogo.svg'

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


                {/* Main Nav */}
                <div className="mainNav">
                    <ul>
                        <img src={ifitCoach} />
                        <li><a href="#blog">EXERCISE</a></li>
                        <li><a href="#nourish">NUTRITION</a></li>
                        <li><a href="#shop">ACTIVITY</a></li>
                        <li><a href="#sleep">SLEEP</a></li>
                        <button>SIGN UP</button>
                    </ul>
                </div>

                {/* Hero Section */}
                <div class="heroSection">
                    <img className="heroPic" src={heroOverlay} alt="hero picture" />
                    <div className="heroCenter">
                        <div class="heroText">The best personal training, right in your own home</div>
                        <button className="blueBtn">JOIN IFIT COACH</button>
                    </div>
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
                    </Carousel>
                </div>
            </div>
        )
    }
}