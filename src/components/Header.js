import React from 'react'
import "../styles.css"
import heroOverlay from '../images/heroOverlay.png'
import Fade from 'react-reveal/Fade';

const Header = () => {

    return (

        <div>
            <div class="heroSection">
                <img className="heroPic" src={heroOverlay} alt="hero picture" />
                <Fade top cascade>
                    <div className="heroCenter">

                        <div class="heroText">The best personal training, right in your own home</div>
                        <button className="blueBtn">JOIN IFIT COACH</button>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default Header