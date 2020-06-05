import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import youtube from '../images/youtube.png'
import pinterest from '../images/pinterest.png'

class Footer extends React.Component {
    
    state = { language: "English" }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            language: event.target.value
        })
    }
    
    render() {
        return (

            <div>
                {/* New Footer */}
                <div className="footerbkd2">
                    <Container className="footerbkd2space">
                        <Row className="footerHeader">
                            <Col >Company</Col>
                            <Col smPull={1}>Account</Col>
                            <Col smPull={1}>Support</Col>
                        </Row>
                        <Row className="footerInfo">
                            <Col smPull={1}>About</Col>
                            <Col smPull={1}>Log In</Col>
                            <Col smPull={1}>Help Center</Col>
                        </Row>
                        <Row className="footerInfo">
                            <Col smPull={1}>Contact Us</Col>
                            <Col smPull={1}>Create Account</Col>
                            <Col smPull={1}>Accessibility</Col>
                        </Row>
                        <Row className="footerInfo">
                            <Col smPull={1}>Careers</Col>
                            <Col smPull={1}></Col>
                            <Col smPull={1}></Col>
                        </Row>
                    </Container>

                </div>

                {/* footer 2 */}
                <div className="footerIcons">
                    <img src={youtube} />
                    <img src={pinterest} />
                    <img src={facebook} />
                    <img src={twitter} />
                    <img src={instagram} />
                </div>

                {/* footer 3 */}
                <table className="footerBottom">
                    <tr>
                        <td className="languageBox">
                            <select name="language" value={this.state.language} onChange={this.handleChange}>
                                <option value="English">English</option>
                                <option value="español">español</option>
                                <option value="中文">中文</option>
                                <option value="русский">русский</option>
                            </select>
                        </td>
                        <td className="centerLang">© iFit.com. All Rights Reserved.</td>
                        <td className="centerLang">Privacy Policy</td>
                        <td className="centerLang">Terms of Use</td>
                    </tr>
                </table>

            </div>
        )
    }
}
export default Footer