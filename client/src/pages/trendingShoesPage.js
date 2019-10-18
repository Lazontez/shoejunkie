import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";
import Top30trending from "../components/trendingContent/top30trendingHeader"
import TrendingContent from "../components/trendingContent/trendingContent"

import Footer from "../components/footer/footer"
class TrendingShoesPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Top30trending />
                <TrendingContent></TrendingContent>
                <Footer />
               
            </div>
        )

    }

}

export default TrendingShoesPage