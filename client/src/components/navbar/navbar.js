import React, { Component } from "react";
import NavbarCSS from "../../css/navbar/navbar.css"

class Navbar extends Component {

    state = {
        scrollPositon : document.body.scrollTop
    }
    componentDidMount(){
        window.addEventListener('scroll', this.navbarWatch)

    }

    

    navbarWatch=()=>{

            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                document.getElementById("header").style.borderBottom = "2px solid black";


            } else {
                document.getElementById("header").style.borderBottom = "none";

    
            }
        }
    

    render() {

        return (
            <span>
                <nav style={NavbarCSS} className="navbar" id="header" height="50px">
                    <span>
                        <a className="navbar-brand" href="/">


                            <div style={{ "display": "inline", "textAlign": "center" , }}>
                                <span style={{ "textAlign": "center", "color": "black" }}><h4 style={{"marginLeft":"50px"}}>SNEAKER WORLD</h4></span>
                            </div>
                        </a>
                    </span>
                    <ul style={{"padding":"15px", "marginRight" : "20px" }}>
                        <li style={{"display" : "inline" }}>
                            <a className="navLink" href="/" ><small style={{"color":"grey", "padding":"10px"}}> Upcoming Releases</small></a>
                        </li>
                       <span style={{"color":"grey"}}>  </span>
                        <li style={{"display" : "inline" , "marginRight" : "10px"}}>
                            <a className="navLink" href="/trending"> <small style={{"color":"grey" , "padding":"10px"}}>Trending</small></a>
                        </li>
                        <span style={{"color":"grey"}}>  </span>
                        {/* <li style={{"display" : "inline"}}>
                            <a className="navLink" href="/"><small style={{"color":"grey"}}>Devpicks</small></a>
                        </li> */}
                        <li style={{"display" : "inline"}}>
                            <a href="/">
                        <i style={{"color":"grey" , "padding":"10px"}}className="fas fa-home navLink" ></i>  
                        </a>                                
                        </li>
                    </ul>
                </nav>

                <div className="subHeader"></div>
            </span>
        )
    }

}
export default Navbar