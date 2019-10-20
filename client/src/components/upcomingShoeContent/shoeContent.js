import React, {Component} from "react";
import axios from "axios";

class ShoeContent extends Component{

    state= {
        data:["null"]
    }

    componentDidMount(){
        this.getUpcoming()
    }

    getUpcoming(){
        axios.get("api/upcoming/shoes")
        .then(res=>{
            console.log(res.data[0].releaseDate.split(""))
        })
        .catch(err=>{
            console.log(err)
        })

    }
    
    render(){
        return(
            <div>
                Trending Shoes
            </div>
        )
    }
}

export default ShoeContent