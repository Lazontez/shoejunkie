import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";
import TrendingContent from "../components/trendingContent/trendingContent"

import Footer from "../components/footer/footer"
class TrendingShoesPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <TrendingContent />
                <Footer />
               
            </div>
        )

    }

}

export default TrendingShoesPage