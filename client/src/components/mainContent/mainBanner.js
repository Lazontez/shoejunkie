import React, { Component } from "react";
import mainBannerCSS from "../../css/mainBanner/mainBanner.css"

class MainBanner extends Component {
 
    render() {
        return (
            <div style={mainBannerCSS} id="mainBanner">
                <span id="featuredSneakerHeader" className="container">
                    <div className="row">
                        <div className="col-md-8" style={{"width":"100%"}}>
                            <span>
                                <small>FEATURED SNEAKER</small>
                            </span>
                            <span id="featuredSneakerName">
                                <h2>
                                    AIR  JORDAN  1  RETRO  HIGH X  'OG  BANNED'
                                </h2>
                            </span>
                        </div>
                        <div className="col-md-4" style={{"padding":"50px"}}>
                            <div className="btn btn-danger seeMoreBtn"><a href="https://www.goat.com/sneakers/air-jordan-1-retro-high-og-banned-2016-555088-001" target="blank" style={{"color":"white"}}>See More</a></div>
                        </div>
                    </div>
                </span>
            </div>
        )
    }
}

export default MainBanner