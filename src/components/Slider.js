import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../styles.css"

import gearjunkielogo from '../images/gearjunkielogo.svg'
import wiredlogo from '../images/wiredlogo.svg'
import mashablelogo from '../images/mashablelogo.svg'

export default class Slider extends React.Component {

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
            < div >
                < div className="slideBoxbkd" >
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
                </ div>
            </div >
        )
    }
}
