import React from "react";


function Top30trending() {
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
                            Top 30 x Sneakers
                        </h2>
                        <div style={{"textAlign": "right"}} >
                            <q id="top30-subQuote" style={{ "color": "red"  , "paddingRight":"10px"}}><b>Most Sold Shoes On FlightClub</b></q>
                        </div>
                    </span>
                </div>
                <div className="col-md-2">

                </div>
            </div>
        </div>
    )

}

export default Top30trending