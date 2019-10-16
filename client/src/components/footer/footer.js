import React, { Component } from "react";
import footerCss from "../../css/footer/footer.css"

class Footer extends Component {
    render() {
        return (
            <span style={footerCss}>
                <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <span style={{"color": "black"}} className="copyright">
                                    
                                </span>
                            </div>
                            <div className="col-md-4">
                                <span style={{"padding":"10px"}}>
                                <h4>CONTACT ME</h4>
                                </span>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a target="blank" href="https://lazontezgardner.herokuapp.com/contact">
                                        <i className="far fa-comment"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a target="blank" href="https://github.com/Lazontez?tab=repositories">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a target="blank" href="https://www.linkedin.com/in/lazontez-gardner-805669169/">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                {/* <ul className="list-inline quicklinks">
                                    <li className="list-inline-item">
                                        <a href="/"></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/"></a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </footer>
            </span>
        )
    
      
    }
}

export default Footer