import React from 'react'
import "../styles.css"
import Cards from './Cards.js'
import Footer from './Footer.js'
import Slider from './Slider.js'
import Navbars from './Navbars.js'
import Header from './Header.js'
import Equipment from './Equipment'

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Navbars />
                <Header />
                <Slider />
                <Cards />
                <Equipment />
                <Footer />
            </div >
        )
    }
}