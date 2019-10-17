import React, { Component } from "react";
import axios from "axios";
import trendingContentCss from "../../css/trendingShoesContent/trendingContent.css"



class TrendingContent extends Component {


    state = {
        data: ["null"]
    }

    componentDidMount() {

        axios
            .get("api/trending/shoes").then(res => {
                this.setState({ data: res.data })
                console.log("Successfully Retrieved Trending Shoes")
            }).catch(err => {

                console.log(err)
            })

    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    {this.state.data.map((data, i) => {
                        return (
                            <div className="col-md-4 shoeArea" style={trendingContentCss}>
                                <h6 className="numberRank">{i + 1}.</h6>
                                <div className="shoeContent" style={{ "textAlign": "center" }}>
                                    <img className="shoeImage" height="250px" width="300px" alt={data.shoeName} src={data.image}></img>
                                    <div className="shoeName" id={data.shoeName}>{data.shoeName}</div>
                                </div>
                            </div>

                        )

                    })}
                </div>
            </div>


        )


    }

}

export default TrendingContent