import React, { Component } from "react"
import DevPicksCss from "../../css/mainBanner/devPicksMainBanner.css"

class DevPicksMainBanner extends Component {
 
    render() {
        return (

            <span style={{ DevPicksCss }}>
                <h1 id="DevPicksMainBannerHeader">DEVPICKS X OCTOBER</h1>
                <div className="container">
                    <div className="row devPicksContent" >
                        <div className="col-md-4 devPickShoe" style={{"padding":"20px"  , "textAlign":"center"}}>
                            <img src="./images/offwhite.jpeg" className="shoeImage" alt="Developer Pick" ></img>
                            <div style={{"marginTop":"10px"}}>
                                    <small> OFFWHITE X AIR PRESTO 'BLACK'
                                                    </small>

                                </div>                        </div>
                        <div className="col-md-4 devPickShoe" style={{"padding":"20px"  , "textAlign":"center"}}>
                                <img src="./images/greenNike.png" className="shoeImage" alt="Developer Pick" ></img>
                                {/* <small class="devPicksShoeName"> CONCEPTS X SB DUNK LOW 'GREEN LOBSTER'</small> */}
                                <div style={{"marginTop":"10px"}}>
                                    <small> CONCEPTS X SB DUNK LOW 'GREEN LOBSTER'
                                                    </small>

                                </div>
                        </div>
                        <div className="col-md-4 devPickShoe" style={{"padding":"20px" , "textAlign":"center"}}>
                                <img src="./images/travis.png" className="shoeImage" alt="Developer Pick"></img>
                                <div  style={{"marginTop":"10px"}}>
                                    <small >TRAVIS SCOTT X AIR JORDAN  1 RETRO HIGH 
                                                    'MOCHA'
                                                    </small>

                                </div>
                        </div>
                    </div>
                </div>

            </span>
        )
    }
}
export default DevPicksMainBanner