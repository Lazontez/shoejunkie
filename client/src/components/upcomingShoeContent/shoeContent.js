import React, { Component } from "react";
import axios from "axios";

class ShoeContent extends Component {

    state = {
        data: ["null"]
    }

    componentDidMount() {
        this.getUpcoming()
    }

    getUpcoming() {
        axios.get("api/upcoming/shoes")
            .then(res => {
                this.setState({ data: res.data })
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        const spinnerCSS={
            "textAlign":"center" ,
            "alignContent":"center"
            
        }
        if (this.state.data[0] === "null") {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-5"></div>

                        <div className="col-md-2" style={spinnerCSS}>
                            <div className="spinner-grow" style={{ "width": "3rem", "height": "3rem", "alignContent": "center" }} role="status" >
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        <div className="col-md-5">

                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container shoeDisplay" >
                    <div className="row">


                        {this.state.data.map(data => {
                            return (
                                <div className="col-md-4 col-sm-6 shoeArea" >
                                    <div className="shoeContent" style={{ "textAlign": "center" }}>
                                        <h6 className="numberRank">{data.releaseDate}</h6>
                                        <img className="shoeImage" height="100px" width="150px" alt={data.shoeName} src={data.image}></img>
                                        <div className="shoeName" id={data.shoeName}>{data.shoeName} </div>
                                        <div><a target="blank" href={data.moreInfoLink}><i style={{ "color": "grey" }} class="fas fa-eye"></i></a></div>
                                    </div>


                                </div>
                            )
                        })
                        }

                    </div>
                </div>
            )
        }
    }
}

export default ShoeContent