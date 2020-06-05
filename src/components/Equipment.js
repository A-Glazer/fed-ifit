import React from 'react'
import "../styles.css"
import treadmill from '../images/treadmill.png'
import elliptical from '../images/elliptical.png'
import strength from '../images/strength.png'
import bike from '../images/bike.png'

const Equipment = () => {

    return (
        <div>
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

        </div>
    )
}
export default Equipment