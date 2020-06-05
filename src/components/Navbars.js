import React from 'react'
import "../styles.css"
import ifitCoach from '../images/ifitCoach.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Navbars = () => {

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
        </div>
    )
}
export default Navbars