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

import card1img from '../images/card1img.jpg'
import card2img from '../images/card2img.jpg'
import card3img from '../images/card3img.jpg'
import card4img from '../images/card4img.jpg'
import card5img from '../images/card5img.jpg'
import card6img from '../images/card6img.jpg'
import card7img from '../images/card7img.jpg'
import card8img from '../images/card8img.jpg'
import time from '../images/time.png'
import miles from '../images/miles.png'
import card1sm from '../images/card1sm.png'
import card2sm from '../images/card2sm.png'
import card3sm from '../images/card3sm.png'
import card4sm from '../images/card4sm.png'
import card5sm from '../images/card5sm.png'
import card6sm from '../images/card6sm.png'
import card7sm from '../images/card7sm.png'
import card8sm from '../images/card8sm.png'
import music from '../images/music.png'

import treadmill from '../images/treadmill.png'
import elliptical from '../images/elliptical.png'
import strength from '../images/strength.png'
import bike from '../images/bike.png'


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
                    {/* SWITCH TO FLEXBOX: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */}
                    <div className="cardSection">

                        {/* card 1 */}
                        <div className="cards hvr-pop">
                            <img src={card1img} className="cardImg" />
                            <div class="cardContainer">
                                <img src={card1sm} className="imgSm" />
                                <div className="cardHeader">Lake Inniscarra, Ireland—Pyramid  </div>
                                <div className="iconRow">
                                    <img src={time} className="cardIcon" />30:53
                                    <img src={miles} className="cardIcon" />6,248
                                </div>
                                <div className="cardDetails">VIEW DETAILS</div>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className="cards hvr-pop">

                            <div className="cardOverlay">
                                <div className="bigNum">9</div>
                                <div className="workouts">Workouts</div>
                                <img src={music} />
                            </div>
                            <img src={card2img} className="cardImg" />
                            <div class="cardContainer">
                                <img src={card2sm} className="imgSm" />
                                <div className="cardHeader">Performance Series</div>
                            </div>
                        </div>

                        {/* card 3 */}
                        <div className="cards hvr-pop">
                            <img src={card3img} className="cardImg" />
                            <div class="cardContainer">
                                <img src={card3sm} className="imgSm" />
                                <div className="cardHeader">Slow Pulls and Fast Intervals</div>
                                <div className="iconRow">
                                    <img src={time} className="cardIcon" />44:13
                                    <img src={miles} className="cardIcon" />9,948 M
                                </div>
                            </div>
                        </div>

                        {/* card 4 */}
                        <div className="cards hvr-pop">

                            <div className="cardOverlay">
                                <div className="bigNum">12</div>
                                <div className="workouts">Workouts</div>
                                <img src={music} />
                            </div>
                            <img src={card4img} className="cardImg" />
                            <div class="cardContainer">
                                <img src={card4sm} className="imgSm" />
                                <div className="cardHeader">20 Minutes to Toned</div>
                            </div>
                        </div>
                    </div>
                    <div className="cardSection">
                        {/* card 5 */}
                        <div className="cards hvr-pop">
                            <img src={card5img} className="cardImg" />
                            <div class="cardContainer">
                                <img src={card5sm} className="imgSm" />
                                <div className="cardHeader">Charles Race, Boston, Massachusetts</div>
                                <div className="iconRow">
                                    <img src={time} className="cardIcon" />36:22
                                    <img src={miles} className="cardIcon" />8,648 M
                                </div>
                            </div>
                        </div>

                        {/* card 6 */}
                        <div className="cards hvr-pop">

                            <div className="cardOverlay">
                                <div className="bigNum">12</div>
                                <div className="workouts">Workouts</div>
                                <img src={music} />
                            </div>
                            <img src={card6img} className="cardImg" />
                            <div class="cardContainer">
                                <img src={card6sm} className="imgSm" />
                                <div className="cardHeader">Full-Body HIIT Series</div>
                            </div>
                        </div>


                        {/* card 7 */}
                        <div className="cards hvr-pop">
                            <img src={card7img} className="cardImg" />
                            <div class="cardContainer">
                                <img src={card7sm} className="imgSm" />
                                <div className="cardHeader">Kafue River, Zambia—Power Stroke Pyramid</div>
                                <div className="iconRow">
                                    <img src={time} className="cardIcon" />22:22
                                    <img src={miles} className="cardIcon" />4,660 M
                                </div>
                            </div>
                        </div>

                        {/* card 8 */}
                        <div className="cards hvr-pop">

                            <div className="cardOverlay">
                                <div className="bigNum">16</div>
                                <div className="workouts">Workouts</div>
                                <img src={music} />
                            </div>
                            <img src={card8img} className="cardImg" />
                            <div class="cardContainer">
                                <img src={card8sm} className="imgSm" />
                                <div className="cardHeader">Shred &  Burn Series</div>
                            </div>
                        </div>
                    </div>





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



                </div >
            </div >
        )
    }
}