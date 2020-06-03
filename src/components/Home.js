import React from 'react'
import "../styles.css"
import heroOverlay from '../images/heroOverlay.png'
// import productNav from './productNav.js'

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


                <p>Main Nav Here</p>

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