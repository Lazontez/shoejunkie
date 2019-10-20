import React from "react";


function UpcomingReleasesHeader() {
    const top30HeadingCss = {
        "padding": "200px",
        "textAlign": "center",
        "font-family": "'Long Cang', cursive"

    }

    return (

        <div className="container" style={top30HeadingCss}>
            <div className="row">
                <div className="col-md-2"></div>

                <div className="col-md-6" style={{ "textAlign": "right" }}>
                    <span  >
                        <h2 id="top30-heading">
                            Sneakers x Future
                        </h2>
                        <div style={{"textAlign": "none"}} >
                            <q id="top30-subQuote" style={{ "color": "red"}}><b>Incoming Sneaker Alert</b></q>
                        </div>
                    </span>
                </div>
                <div className="col-md-2">

                </div>
            </div>
        </div>
    )

}

export default UpcomingReleasesHeader