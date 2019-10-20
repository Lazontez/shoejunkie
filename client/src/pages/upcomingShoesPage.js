import React from "react";
import NavBar from "../components/navbar/navbar"
import ShoeContent from "../components/upcomingShoeContent/shoeContent"
import Footer from "../components/footer/footer"
class UpcomingShoesPage extends React.Component{

    render(){
        
        return(
            <span>
                <NavBar />
                <ShoeContent />
                <Footer />

            </span>
        )

    }
}

export default UpcomingShoesPage