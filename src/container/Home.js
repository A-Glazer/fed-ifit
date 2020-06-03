import React from 'react'
import "../styles.css"
import heroOverlay from '../images/heroOverlay.png'
// import productNav from './productNav.js'
import ifitCoach from '../images/ifitCoach.png'

export default class Home extends React.Component {

    render() {
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

            </div>
        )
    }
}