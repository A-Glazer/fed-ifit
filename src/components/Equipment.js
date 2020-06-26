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
                {/* <div>{equipTitle}</div> */}
                <div>Interested in our exciting iFit-enabled equipment?</div>
            </div>
            <div className="equipFlex">
                <div className="equipBox">
                    {/* equipBox1img */}
                    <img src={treadmill} />
                    {/* equipBox1text */}
                    <div className="equipSubTitle">Treadmills</div>
                </div>

                <div className="equipBox">
                     {/* equipBox2img */}
                    <img src={bike} />
                    {/* equipBox2text */}
                    <div className="equipSubTitle">Bikes</div>
                </div>

                <div className="equipBox">
                    {/* equipBox3img */}
                    <img src={elliptical} />
                    {/* equipBox3text */}
                    <div className="equipSubTitle">Ellipticals</div>
                </div>

                <div className="equipBox">
                    {/* equipBox4img */}
                    <img src={strength} />
                    {/* equipBox4text */}
                    <div className="equipSubTitle">Strength</div>
                </div>
            </div>

        </div>
    )
}
export default Equipment